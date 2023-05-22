import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { clientToken } from '../hooks/axios/client';
import { ErrorAxios } from '../hooks/axios/error';
import { GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS } from '../constants/auth';

type GetMasterUser = {
    page: number,
    limit: number,
}

export const getUser = ({page = 1, limit = 10}: GetMasterUser) => async (dispatch: Dispatch) => {
    try{
        dispatch({
            type: GET_USER_REQUEST
        })
        const {data} = await clientToken({
            url: `/auth/user?page=${page}&limit=${limit}`,
            method: 'GET',
        })
        dispatch({
            type: GET_USER_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error as AxiosError;
        const errors = err.response?.data as ErrorAxios;
        dispatch({
            type: GET_USER_ERROR,
            error: errors.errors[0].message,
        })
    }
}
