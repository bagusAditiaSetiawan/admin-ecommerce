export interface DataProductCategory {
    id: number,
    name: string,
    description: string
}

export interface CreateProductCategory {
    name: string,
    description: string
} 
export interface UpdateProductCategory extends CreateProductCategory {
    id: number
}
