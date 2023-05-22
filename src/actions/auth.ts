import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { UserLogin } from '../hooks/auth/login.hook';
import { client } from '../hooks/axios/client';
import { ErrorAxios } from '../hooks/axios/error';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './../constants/auth';

export const loginAction = ({email, password}: UserLogin) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: LOGIN_REQUEST
        })
        const {data} = await client({
            url: '/auth/signin',
            method: 'POST',
            data: {
                email, password
            }
        })
        window.localStorage.setItem("token", data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.token
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type:LOGIN_ERROR,
            payload: errors.errors[0].message,
        })
    }
}