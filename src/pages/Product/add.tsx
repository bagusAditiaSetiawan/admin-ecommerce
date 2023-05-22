import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../components/forms/form.input";
import { FormQuil } from "../../components/forms/form.quil";
import { FormSelectMultiple, Option } from "../../components/forms/form.select";
import { MultiValue } from "react-select";
import { useAppDispatch, useAppSelector } from "../../store";
import { useProductCategoryListHook } from "../../hooks/product/product-category.hook";
import { FormFilesMultiple } from "../../components/forms/form.files";
import { DataFile } from "../../utills/intefaces/files";
import { createProduct } from "../../actions/product";
import { CreateProduct } from "../../utills/intefaces/product";
import { useProductCreateHook } from "../../hooks/product/product.hook";
import { LoadingBasic } from "../../components/loading/basic-loading";
import { ProductForm } from "../../components/forms/product";

type FormDataProduct = {
    name: string,
    description: string,
    price: number,
}

export const ProductPageAdd = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [categories, setCategories] = useState<Option[]>([]);
    const [files, setFiles] = useState<DataFile[]>([]);
    const [formData, setFormData] = useState<FormDataProduct>({
        name: '',
        description: '',
        price: 0,
    })

    const {isLoading} = useProductCreateHook();

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
    
    const handleProductAdd = async (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: CreateProduct = {
            ...formData,
            categories: categories.map(({value}) => value),
            images: files.map(({id}) => id),
        }
        dispatch(createProduct(data))
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
                  submitHandler={handleProductAdd}
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