import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { clientToken } from '../hooks/axios/client';
import { ErrorAxios } from '../hooks/axios/error';
import { CREATE_PRODUCT_CATEGORY_ERROR, CREATE_PRODUCT_CATEGORY_REQUEST, CREATE_PRODUCT_CATEGORY_SUCCESS, DELETE_PRODUCT_CATEGORY_ERROR, DELETE_PRODUCT_CATEGORY_REQUEST, DELETE_PRODUCT_CATEGORY_SUCCESS, DETAIL_PRODUCT_CATEGORY_ERROR, DETAIL_PRODUCT_CATEGORY_REQUEST, DETAIL_PRODUCT_CATEGORY_SUCCESS, GET_PRODUCT_CATEGORY_ERROR, GET_PRODUCT_CATEGORY_REQUEST, GET_PRODUCT_CATEGORY_SUCCESS, UPDATE_PRODUCT_CATEGORY_ERROR, UPDATE_PRODUCT_CATEGORY_REQUEST, UPDATE_PRODUCT_CATEGORY_SUCCESS } from '../constants/product-category';
import { CreateProductCategory, UpdateProductCategory } from '../utills/intefaces/product-category';

type GetProductCategory = {
    page: number,
    limit: number,
    name?: string,
}

export const getProductCategory = ({page = 1, limit = 10, name = ""}: GetProductCategory) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: GET_PRODUCT_CATEGORY_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/category?page=${page}&limit=${limit}&name=${name}`,
            method: 'GET',
        })
        dispatch({
            type: GET_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: GET_PRODUCT_CATEGORY_ERROR,
            error: errors.errors[0].message,
        })
    }
}

export const getDetailProductCategory = (id: number) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: DETAIL_PRODUCT_CATEGORY_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/category/${id}`,
            method: 'GET',
        })
        dispatch({
            type: DETAIL_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: DETAIL_PRODUCT_CATEGORY_ERROR,
            error: errors.errors[0].message,
        })
    }
}



export const createProductCategory = (formData: CreateProductCategory) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: CREATE_PRODUCT_CATEGORY_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/category`,
            method: 'POST',
            data: formData,
        })
        dispatch({
            type: CREATE_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: CREATE_PRODUCT_CATEGORY_ERROR,
            error: errors.errors[0].message,
        })
    }
}


export const updateProductCategory = (formData: UpdateProductCategory) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: UPDATE_PRODUCT_CATEGORY_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/category`,
            method: 'PATCH',
            data: formData,
        })
        dispatch({
            type: UPDATE_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: UPDATE_PRODUCT_CATEGORY_ERROR,
            error: errors.errors[0].message,
        })
    }
}
export const deleteProductCategory = (id: number) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: DELETE_PRODUCT_CATEGORY_REQUEST
        })
        const {data} = await clientToken({
            url: `/product/category/${id}`,
            method: 'DELETE',
        })
        dispatch({
            type: DELETE_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: DELETE_PRODUCT_CATEGORY_ERROR,
            error: errors.errors[0].message,
        })
    }
}