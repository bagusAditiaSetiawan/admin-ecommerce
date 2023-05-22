import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateProductCategory, DataProductCategory } from "../../utills/intefaces/product-category";
import { FormInput } from "./form.input";

type ProductCategoryFormProps = {
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void,
    onChangeHandler:  (e: React.ChangeEvent<HTMLInputElement>) => void,
    form: CreateProductCategory
    detail?: DataProductCategory,
}


export const ProductCategoryForm = ({submitHandler, onChangeHandler, form}: ProductCategoryFormProps) => {
    const navigate = useNavigate();
    return (        
        <form className="mt-2 sm:ml-4 text-left" onSubmit={(e) => submitHandler(e)}>
            <h4 className="text-lg font-medium text-gray-800">
                Form 
            </h4>
            <FormInput 
                onChange={onChangeHandler} 
                name="name" 
                value={form.name}
                label="Name"
                type="text"
            />
            <FormInput 
                onChange={onChangeHandler} 
                name="description" 
                value={form.description}
                label="Description"
                type="text"
            />
            <div className="items-center gap-2 mt-3 sm:flex">
                <button
                    className="w-full mt-2 p-2 flex-1 text-white bg-primary rounded-md outline-none"
                    type="submit"                                        
                >
                    Save
                </button>
                <button
                    className="w-full mt-2 p-2 flex-1 text-gray-800 rounded-md outline-none border"
                    type="button"
                    onClick={() =>
                        navigate('/app/product/category')
                    }                                                
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}