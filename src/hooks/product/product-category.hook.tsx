
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getProductCategory, getDetailProductCategory } from "../../actions/product-category";
import { CREATE_PRODUCT_CATEGORY_CLEAR, UPDATE_PRODUCT_CATEGORY_CLEAR } from "../../constants/product-category";
import { DetailProductCategoryState, ListProductCategoryState } from "../../reducers/product-category.reducer";
import { useAppDispatch, useAppSelector } from "../../store";

export type FilterProductCategory = {
    page: number,
    limit: number,
    name?: string,
}

export const useProductCategoryListHook = ({page, limit, name}: FilterProductCategory): ListProductCategoryState => {
	const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const {list, isLoading, error} = useAppSelector(state => state.listProductCategory);
    useMemo(() => dispatch(getProductCategory({page, limit, name})), [
        page, limit, pathname, name
    ])
    return {list, isLoading, error}
}


export const useProductCategoryDetailHook = (id: string | undefined): DetailProductCategoryState => {
	const dispatch = useAppDispatch();
    const {detail, isLoading, error} = useAppSelector(state => state.detailProductCategory);
    useMemo(() => id ? dispatch(getDetailProductCategory(+id)) : '', [
        id, dispatch
    ])
    return {detail, isLoading, error}
}

export const useProductCategoryCreateHook = () => {
	const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {created, isLoading, error} = useAppSelector(state => state.createProductCategory);    
    useEffect(() => {
        if(created) {
            Swal.fire({
                title: 'Success created Data',
                icon: 'success',
            }).then(() => {
                navigate('/app/product/category')
            })
        }
        return () => {
            dispatch({
                type: CREATE_PRODUCT_CATEGORY_CLEAR,
            })
        }
    }, [dispatch, created, navigate]);


    return {isLoading, error, created };
}

export const useProductCategoryUpdateHook = () => {
	const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {updated, isLoading, error} = useAppSelector(state => state.updateProductCategory);

    useEffect(() => {
        if(updated) {
            Swal.fire({
                title: 'Success updated Data',
                icon: 'success',
            }).then(() => {
                navigate('/app/product/category')
            })
        }
        return () => {
            dispatch({
                type: UPDATE_PRODUCT_CATEGORY_CLEAR,
            })
        }
    }, [dispatch, updated, navigate]);
    return {updated, isLoading, error}
}