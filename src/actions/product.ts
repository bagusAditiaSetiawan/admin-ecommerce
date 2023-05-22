import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { clientToken } from '../hooks/axios/client';
import { ErrorAxios } from '../hooks/axios/error';
import { CREATE_PRODUCT_ERROR, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_IMAGE_ERROR, DELETE_PRODUCT_IMAGE_REQUEST, DELETE_PRODUCT_IMAGE_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DETAIL_PRODUCT_ERROR, DETAIL_PRODUCT_REQUEST, DETAIL_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from '../constants/product';
import { CreateProduct, UpdateProduct } from '../utills/intefaces/product';

type GetProduct = {
    page: number,
    limit: number,
    name?: string,
}

export const getProduct = ({page = 1, limit = 10, name = ""}: GetProduct) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: GET_PRODUCT_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/item?page=${page}&limit=${limit}&name=${name}`,
            method: 'GET',
        })
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: GET_PRODUCT_ERROR,
            error: errors.errors[0].message,
        })
    }
}

export const getDetailProduct = (id: number) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: DETAIL_PRODUCT_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/item/${id}`,
            method: 'GET',
        })
        dispatch({
            type: DETAIL_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: DETAIL_PRODUCT_ERROR,
            error: errors.errors[0].message,
        })
    }
}



export const createProduct = (formData: CreateProduct) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: CREATE_PRODUCT_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/item`,
            method: 'POST',
            data: formData,
        })
        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: CREATE_PRODUCT_ERROR,
            error: errors.errors[0].message,
        })
    }
}


export const updateProduct = (formData: UpdateProduct) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: UPDATE_PRODUCT_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/item`,
            method: 'PATCH',
            data: formData,
        })
        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: UPDATE_PRODUCT_ERROR,
            error: errors.errors[0].message,
        })
    }
}
export const deleteProduct = (id: number) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: DELETE_PRODUCT_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/item/${id}`,
            method: 'DELETE',
        })
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: DELETE_PRODUCT_ERROR,
            error: errors.errors[0].message,
        })
    }
}


export const deleteProductImage = (id: number) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: DELETE_PRODUCT_IMAGE_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/item/image/${id}`,
            method: 'DELETE',
        })
        dispatch({
            type: DELETE_PRODUCT_IMAGE_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: DELETE_PRODUCT_IMAGE_ERROR,
            error: errors.errors[0].message,
        })
    }
}