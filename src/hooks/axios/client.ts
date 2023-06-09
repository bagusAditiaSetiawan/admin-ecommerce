import axios from 'axios';
export const baseApi =  import.meta.env.VITE_BASE_URL;

interface axiosConfig {
    url: string,
    method: string,
    data?: object | FormData,
}


export const client = ({
    url,
    method,
    data
}: axiosConfig) => {
    return axios({
        baseURL: baseApi,
        url,
        method,
        data
    })
}

export const clientToken = ({url, method, data}: axiosConfig) => {
    return axios({
        baseURL: baseApi,
        headers: {
            authorization: `Bearer ${window.localStorage.getItem('token')}`
        },
        url,
        method,
        data
    });
}