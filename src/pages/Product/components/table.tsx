import { Fragment, useEffect, useState } from "react"
import PaginationBasic from "../../../components/pagination/basic-pagination"
import { ProductCard } from "../../../components/cards/product-card"
import { FilterProduct, useProductListHook } from "../../../hooks/product/product.hook";
import { useAppDispatch, useAppSelector } from "../../../store";
import { deleteProduct, getProduct } from "../../../actions/product";
import Swal from "sweetalert2";
import { DELETE_PRODUCT_CLEAR } from "../../../constants/product";


export const ProductTable = () => {
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState<FilterProduct>({
        page: 1,
        limit: 12,
        name: ''
    });
    
    const {list, isLoading, error} = useProductListHook(filter);
    const {detail} = useAppSelector(state => state.deleteProduct);

    const paginateHandler = (page: number) => {
        setFilter(state => ({
            ...state,
            page,
        }))
    }

    const deleteHandler = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {                
              dispatch(deleteProduct(id))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
        })
    }

    useEffect(() => {
        if(detail) {
            Swal.fire({
                title: 'Success delete Data',
                icon: 'success',
            }).then(() => {
                dispatch({
                    type: DELETE_PRODUCT_CLEAR
                })
                
                dispatch(getProduct({
                    page: filter.page,
                    limit: filter.limit,
                }))
            })
        }
    }, [detail]);
    return (
        <Fragment>        
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {list.data.map((product) => (
                    <ProductCard key={product.id} deleteHandler={deleteHandler} product={product} />
                ))}
            </div>
            <PaginationBasic page={filter.page} limit={filter.limit} total={list.total} paginateHandler={paginateHandler} />
        </Fragment>
    )
}