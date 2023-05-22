
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getProduct, getDetailProduct } from "../../actions/product";
import { CREATE_PRODUCT_CLEAR, UPDATE_PRODUCT_CLEAR } from "../../constants/product";
import { DetailProductState, ListProductState } from "../../reducers/product.reducer";
import { useAppDispatch, useAppSelector } from "../../store";

export type FilterProduct = {
    page: number,
    limit: number,
    name?: string,
}

export const useProductListHook = ({page, limit, name}: FilterProduct): ListProductState => {
	const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const {list, isLoading, error} = useAppSelector(state => state.listProduct);
    useMemo(() => dispatch(getProduct({page, limit, name})), [
        page, limit, pathname, name
    ])
    return {list, isLoading, error}
}


export const useProductDetailHook = (id: string | undefined): DetailProductState => {
	const dispatch = useAppDispatch();
    const {detail, isLoading, error} = useAppSelector(state => state.detailProduct);
    useMemo(() => id ? dispatch(getDetailProduct(+id)) : '', [
        id, dispatch
    ])
    return {detail, isLoading, error}
}

export const useProductCreateHook = () => {
	const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {created, isLoading, error} = useAppSelector(state => state.createProduct);    
    useEffect(() => {
        if(created) {
            Swal.fire({
                title: 'Success created Data',
                icon: 'success',
            }).then(() => {
                navigate('/app/product')
            })
        }
        return () => {
            dispatch({
                type: CREATE_PRODUCT_CLEAR,
            })
        }
    }, [dispatch, created, navigate]);


    return {isLoading, error, created};
}

export const useProductUpdateHook = () => {
	const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {updated, isLoading, error} = useAppSelector(state => state.updateProduct);

    useEffect(() => {
        if(updated) {
            Swal.fire({
                title: 'Success updated Data',
                icon: 'success',
            }).then(() => {
                navigate('/app/product')
            })
        }
        return () => {
            dispatch({
                type: UPDATE_PRODUCT_CLEAR,
            })
        }
    }, [dispatch, updated, navigate]);
    return {updated, isLoading, error}
}