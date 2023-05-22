import { FILE_UPLOAD_ERROR, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS } from "../constants/file";
import { DataFile } from "../utills/intefaces/files";

export type AuthAction = {
    type: string,
    payload: DataFile,
    error?: string,
}

export type UploadFileState = Readonly<{
    upload?: DataFile,
    error?: string,
    isLoading?: boolean,
}>;

export const initialState = {};

export const uploadFileReducer = (state = initialState, action: AuthAction): UploadFileState=> {
    switch (action.type) {
        case FILE_UPLOAD_REQUEST:
          return {
            ...state,
            isLoading: true,
            error: action.error,
        };
        case FILE_UPLOAD_SUCCESS:
          return {
            ...state,
            upload: action.payload,
            isLoading: false,
            error: '',
        };
        case FILE_UPLOAD_ERROR:
          return {
            ...state,
            isLoading: false,
            error: action.error,
        };
        default:
          return state;
      }
}
