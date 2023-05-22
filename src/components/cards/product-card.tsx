import { useNavigate } from "react-router-dom";
import { convertNumberToRupiah } from "../../helpers/number";
import { baseApi } from "../../hooks/axios/client";
import { DataProduct } from "../../utills/intefaces/product";
import { DataProductCategory } from "../../utills/intefaces/product-category";
import { ButtonDanger, ButtonPrimary } from "../buttons/base.button";

interface ProductCardProps  {
  product: DataProduct,
  deleteHandler: (id: number) => void,
}

export const ProductCard = ({product, deleteHandler}: ProductCardProps) => {
    const navigate = useNavigate();
    return (
      <div className="bg-white group relative h-full">
          <img
            src={`${product.product_items_images && product.product_items_images[0]?.file?.filename && `${baseApi}/file/${product.product_items_images[0]?.file?.filename}`}`}
            alt={product.name}
            className="w-full object-cover object-center lg:w-full h-[200px] lg:h-[250px]"
          />
        <div>
          <h1 className="text-sm lg:text-base">{product.name}</h1>
        </div>
        <div className="flex justify-end gap-2 mb-4">
            <ButtonPrimary label="edit" clickHandler={() => navigate(`/app/product/edit/${product.id}`)} />
            <ButtonDanger label="delete" clickHandler={() => {
              deleteHandler(product.id)
            }} />
        </div>
      </div>
    );
  }