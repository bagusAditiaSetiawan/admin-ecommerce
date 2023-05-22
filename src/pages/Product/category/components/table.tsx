import { useEffect, useState } from "react"
import PaginationBasic from "../../../../components/pagination/basic-pagination"
import { useAppDispatch, useAppSelector } from "../../../../store"
import { useProductCategoryListHook } from "../../../../hooks/product/product-category.hook"
import { useNavigate } from "react-router-dom"
import { LoadingBasic } from "../../../../components/loading/basic-loading"
import Swal from "sweetalert2"
import { DELETE_PRODUCT_CATEGORY_CLEAR } from "../../../../constants/product-category"
import { deleteProductCategory, getProductCategory } from "../../../../actions/product-category"
import { ButtonDanger, ButtonPrimary } from "../../../../components/buttons/base.button"


export const ProductCategoryTable = () => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const {isLoading} = useProductCategoryListHook({
        page,
        limit
    })

    const {list, error} = useAppSelector(state => state.listProductCategory);
    const paginateHandler = (id: number) => {
        setPage(id)
    }

    
    const {detail} = useAppSelector(state => state.deleteProductCategory);
    
    useEffect(() => {
        if(detail) {
            Swal.fire({
                title: 'Success delete Data',
                icon: 'success',
            }).then(() => {
                dispatch({
                    type: DELETE_PRODUCT_CATEGORY_CLEAR
                })
                
                dispatch(getProductCategory({
                    page,
                    limit,
                }))
            })
        }
    }, [detail]);
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
              dispatch(deleteProductCategory(id))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
        })
    }

    const navigate = useNavigate();
    return (
        <>        
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light table-auto">
                                <thead className="border-b bg-gray-100 font-medium dark:border-neutral-500">
                                    <tr>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Description</th>
                                    <th scope="col" className="py-4">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list && list.data.map(({id, name, description}) => (
                                        <tr key={id}>
                                        <td scope="col" className="px-6 py-4">{name}</td>
                                        <td scope="col" className="px-6 py-4">{description}</td>
                                        <td scope="col" className="px-6 py-4 flex gap-2 sm:gap-4 justify-end">
                                            <ButtonPrimary label="edit" clickHandler={() => navigate(`/app/product/category/${id}`)} />
                                            <ButtonDanger clickHandler={() => deleteHandler(id)} label="delete" />
                                        </td>
                                        </tr>
                                    ))}
                                    {error && (
                                        <tr>
                                            <td scope="col" colSpan={4} className="text-center px-6 py-4 bg-red-400 text-white font-medium">{error}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {isLoading && (
                                <LoadingBasic />
                            )}
                       </div>
                    </div>
                </div>
            </div>
            <PaginationBasic page={page} limit={limit} total={list.total} paginateHandler={paginateHandler} />
        </>
    )
}