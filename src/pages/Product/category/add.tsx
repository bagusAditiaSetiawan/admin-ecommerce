import { useNavigate } from "react-router-dom";
import { ProductCategoryForm } from "../../../components/forms/product-category";
import { useProductCategoryCreateHook } from "../../../hooks/product/product-category.hook";
import { LoadingBasic } from "../../../components/loading/basic-loading";
import { useState } from "react";
import { CreateProductCategory } from "../../../utills/intefaces/product-category";
import { createProductCategory } from "../../../actions/product-category";
import { useAppDispatch } from "../../../store";

export const ProductCategoryPageAdd = () => {
    const navigate = useNavigate();
	const dispatch = useAppDispatch();
    const {isLoading} =  useProductCategoryCreateHook();
    
    const [form, setForm] = useState<CreateProductCategory>({
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
        dispatch(createProductCategory({
            ...form
        }))
    }

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
                            <ProductCategoryForm submitHandler={submitHandler} onChangeHandler={onChangeHandler} form={form} />
                        )}
                    </div>
                </div>
            </div>
        </div>            
    );
}