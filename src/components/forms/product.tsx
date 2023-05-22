import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateProductCategory, DataProductCategory } from "../../utills/intefaces/product-category";
import { FormInput } from "./form.input";
import { DataFile } from "../../utills/intefaces/files";
import { CreateProduct } from "../../utills/intefaces/product";
import { useAppSelector } from "../../store";
import { FormSelectMultiple, Option } from "./form.select";
import { MultiValue } from "react-select";
import { FormQuil } from "./form.quil";
import { FormFilesMultiple } from "./form.files";

type ProductFormProps = {
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void,
    onChangeHandler:  (e: React.ChangeEvent<HTMLInputElement>) => void,
    form: CreateProduct
    detail?: DataProductCategory,
    files: DataFile[],
    setFiles: React.Dispatch<React.SetStateAction<DataFile[]>>,
    onDeleteFile: (id: number) => void,
    onChangeMultiple:  (value: MultiValue<Option>) => void,
    categories: Option[],
    onFilterCategory: (value: string) => void,
    onChangQuil: (value: string) => void,
}


export const ProductForm = ({
    submitHandler, onChangeHandler, onChangQuil,
    form, files, setFiles, onDeleteFile,
    onChangeMultiple, categories, onFilterCategory
    }: ProductFormProps) => {
    const navigate = useNavigate();

    const {list: listCategory} = useAppSelector(state => state.listProductCategory);

    return (        
        <form
        onSubmit={submitHandler}    
        >
            <h4 className="text-lg font-medium text-gray-800">
                Form
            </h4>
            <FormInput type="text" onChange={onChangeHandler}
            label="Name" name="name" id="name" value={form.name}
            />
            <FormInput type="number" onChange={onChangeHandler}
            label="Price" name="price" id="price" value={form.price}
            />
            <FormSelectMultiple options={listCategory.data.map(({id, name}) => ({
                value: id,
                label: name,
            }))} label="Categories" name="categories"
            onChange={onChangeMultiple}
            value={categories}
            onInputChange={onFilterCategory}
            />
            <FormQuil
            onChange={onChangQuil} name="description" label="Description"
            value={form.description}
            />
            <FormFilesMultiple isOnlyImage={true} files={files} setFiles={setFiles}
            onDeleteFile={onDeleteFile}
            />
            <div className="items-center gap-2 mt-3 sm:flex">
                <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-primary rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    type="submit"                                            
                >
                    Save
                </button>
                <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() =>
                        navigate('/app/product')
                    }                         
                    type="button"                       
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}