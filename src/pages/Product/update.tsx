import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Option } from "../../components/forms/form.select";
import { MultiValue } from "react-select";
import { useAppDispatch, useAppSelector } from "../../store";
import { useProductCategoryListHook } from "../../hooks/product/product-category.hook";
import { DataFile } from "../../utills/intefaces/files";
import { updateProduct } from "../../actions/product";
import { UpdateProduct } from "../../utills/intefaces/product";
import { useProductDetailHook, useProductUpdateHook } from "../../hooks/product/product.hook";
import { LoadingBasic } from "../../components/loading/basic-loading";
import { ProductForm } from "../../components/forms/product";

type FormDataProduct = {
    name: string,
    description: string,
    price: number,
}

export const ProductPageUpdate = () => {
    const navigate = useNavigate();
    const {id} = useParams() ;
    const dispatch = useAppDispatch();
    const [categories, setCategories] = useState<Option[]>([]);
    const [files, setFiles] = useState<DataFile[]>([]);
    const [formData, setFormData] = useState<FormDataProduct>({
        name: '',
        description: '',
        price: 0,
    })

    const {detail} = useProductDetailHook(id);

    useEffect(() => {
        if(detail) {
            setFormData(detail);
            if(detail.product_items_categories && detail.product_items_categories.length > 0) {
                setCategories(detail.product_items_categories.map(({product_category}) => ({
                    value: product_category.id,
                    label: product_category.name,
                })))
            }
            if(detail.product_items_images) {
                setFiles(detail.product_items_images.map(({file}) => ({
                    id: file.id,
                    filename: file.filename,
                })))
            }
        }
    }, [detail]);

    const {isLoading} = useProductUpdateHook();

    const [filterCategory, setFilterCategory] = useState<string>("");

    useProductCategoryListHook({
        page: 1,
        limit: 10,
        name: filterCategory
    })
    
    const onFilterCategory = (value: string) => {
        setFilterCategory(value);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((state) => ({
            ...state,
            [e.target.name]: e.target.type === 'number' ?  +e.target.value : e.target.value
        }))
    }

    const onChangQuil = (value: string) =>  {
        setFormData(state => ({
            ...state,
            description: value,
        }))
    }

    const onChangeMultiple = (value: MultiValue<Option>) => {
        setCategories([...value])
    }

    const onDeleteFile = (id: number) => {
        const filterDelete = files.filter((file) => file.id !== id);
        setFiles(filterDelete);
    }
    
    const handleProductUpdate = async (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(detail) {
            const data: UpdateProduct = {
                id: detail?.id,
                ...formData,
                categories: categories.map(({value}) => value),
                images: files.map(({id}) => id),
            }
            dispatch(updateProduct(data))
        }
    }
    
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => navigate('/app/product')}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-7xl p-4 mx-auto bg-white rounded-md shadow-xl">
                {isLoading && (
                    <LoadingBasic />
                )}
                {!isLoading && (
                  <ProductForm 
                  onChangQuil={onChangQuil}
                  onChangeMultiple={onChangeMultiple}
                  submitHandler={handleProductUpdate}
                  files={files}
                  categories={categories}
                  onFilterCategory={onFilterCategory}
                  onDeleteFile={onDeleteFile}
                  onChangeHandler={onChange}
                  form={formData}
                  setFiles={setFiles}
                  />
                )}     
                </div>
            </div>
        </div>            
    );
}