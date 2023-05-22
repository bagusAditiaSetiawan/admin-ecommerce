import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { LOGIN_CLEAR } from '../constants/auth';
import { USER_CURRENT_CLEAR, USER_CURRENT_ERROR, USER_CURRENT_REQUEST, USER_CURRENT_SUCCESS } from '../constants/user';
import { clientToken } from '../hooks/axios/client';
import { ErrorAxios } from '../hooks/axios/error';

export const getCurrentUser = () => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: USER_CURRENT_REQUEST,
        })
        const {data} = await clientToken({
            url: '/auth/current-user',
            method: 'GET',
        })
        dispatch({
            type: USER_CURRENT_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        window.localStorage.removeItem('token')
        dispatch({
            type: LOGIN_CLEAR,
        })
        dispatch({
            type: USER_CURRENT_ERROR,
            error: errors.errors[0].message,
        })
    }
}


export const userSignout = () => async (dispatch: Dispatch) => {
    window.localStorage.clear();
    dispatch({
        type: USER_CURRENT_CLEAR,
    })
}