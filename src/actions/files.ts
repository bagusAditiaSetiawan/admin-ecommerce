import { AxiosResponse } from 'axios';
import { clientToken } from '../hooks/axios/client';
import { DataFile } from '../utills/intefaces/files';

export const uploadFile = async (file: File) => {
    try{
        const formData = new FormData();
        formData.append('file', file);
        const res = await clientToken({
            url: `/file/upload`,
            method: 'POST',
            data: formData,
        })
        const data = res.data as DataFile;
        return data;
    }catch(error){
        return false;
    }
}
