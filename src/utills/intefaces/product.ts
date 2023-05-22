import { DataFile } from "./files"
import { DataProductCategory } from "./product-category"


interface ProductItemsImages {
    id: number,
    product_item_id: number,
    file: DataFile,
}
interface ProductItemsCategories {
    id: number,
    product_item_id: number,
    product_category: DataProductCategory,
}

export interface DataProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    product_items_images?: ProductItemsImages[],
    product_items_categories?: ProductItemsCategories[],
}

export interface CreateProduct {
    name: string,
    description: string,
    price: number,
    categories?: number[],
    images?: number[],
} 
export interface UpdateProduct extends CreateProduct {
    id: number
}
