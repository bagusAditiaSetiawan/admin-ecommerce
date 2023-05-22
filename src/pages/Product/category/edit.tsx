import { useNavigate, useParams } from "react-router-dom";
import { ProductCategoryForm } from "../../../components/forms/product-category";
import { useProductCategoryUpdateHook, useProductCategoryDetailHook } from "../../../hooks/product/product-category.hook";
import { LoadingBasic } from "../../../components/loading/basic-loading";
import { useEffect, useState } from "react";
import { UpdateProductCategory } from "../../../utills/intefaces/product-category";
import { useAppDispatch } from "../../../store";
import { updateProductCategory } from "../../../actions/product-category";

export const ProductCategoryPageEdit = () => {
	const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {isLoading } =  useProductCategoryUpdateHook();
    const {detail} = useProductCategoryDetailHook(id);

    
    const [form, setForm] = useState<UpdateProductCategory>({
        id: 0,
        name: '',
        description: ''
    });
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(value => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateProductCategory({
            ...form,
        }))
    }

    useEffect(() => {
        if(detail) {
            setForm(state => ({
                ...state,
                ...detail
            }))
        }
    }, [detail]);

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => navigate('/app/product/category')}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3">
                        {isLoading && (
                            <LoadingBasic />
                        )}
                        {!isLoading && (
                            <ProductCategoryForm detail={detail} submitHandler={submitHandler} onChangeHandler={onChangeHandler} form={form} />
                        )}
                    </div>
                </div>
            </div>
        </div>            
    );
}