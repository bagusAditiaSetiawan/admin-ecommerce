import { 
  GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, 
  GET_PRODUCT_ERROR, CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_CLEAR, DETAIL_PRODUCT_CLEAR,
  DETAIL_PRODUCT_SUCCESS, DETAIL_PRODUCT_ERROR,
  DETAIL_PRODUCT_REQUEST, UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_CLEAR, DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_CLEAR } from "../constants/product";
import { DataProduct } from "../utills/intefaces/product";

export type AuthAction = {
    type: string,
    payload: {
      data: DataProduct[],
      total: number,
    }
    error?: string,
}

export type ListProductState = Readonly<{
    list: {
      data: DataProduct[],
      total: number,
    },
    error?: string,
    isLoading?: boolean,
  }>;
export const initialState = {
  list: {
    data: [] as DataProduct[],
    total: 0,
  },
};

export const listProductReducer = (state = initialState, action: AuthAction): ListProductState=> {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
          return {
            ...state,
            isLoading: true,
            error: action.error,
        };
        case GET_PRODUCT_SUCCESS:
          return {
            ...state,
            list: action.payload,
            isLoading: false,
            error: '',
        };
        case GET_PRODUCT_ERROR:
          return {
            ...state,
            isLoading: false,
            error: action.error,
        };
        default:
          return state;
      }
}

export type CreateProductAction = {
  type: string,
  payload: DataProduct,
  error?: string,
}


export type CreateProductState = {
  error?: string,
  isLoading: boolean,
  created?: DataProduct
}

const initStateProduct: CreateProductState = {
  isLoading: false,
}

export const createProductReducer = (state = initStateProduct, action: CreateProductAction): CreateProductState => {
  switch (action.type) {
      case CREATE_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: action.error,
      };
      case CREATE_PRODUCT_SUCCESS:
        return {
          ...state,
          created: action.payload,
          isLoading: false,
          error: '',
      };
      case CREATE_PRODUCT_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
      };
      case CREATE_PRODUCT_CLEAR:
        return {
          isLoading: false,
          error: '',
          created: undefined,
      };
      default:
        return state;
    }
}


export type UpdateProductState = {
  error?: string,
  isLoading: boolean,
  updated?: DataProduct
}


const initUpdateStateProduct: UpdateProductState = {
  isLoading: false,
}
export const updateProductReducer = (state = initUpdateStateProduct, action: CreateProductAction): UpdateProductState => {
  switch (action.type) {
      case UPDATE_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: action.error,
      };
      case UPDATE_PRODUCT_SUCCESS:
        return {
          ...state,
          updated: action.payload,
          isLoading: false,
          error: '',
      };
      case UPDATE_PRODUCT_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
      };
      case UPDATE_PRODUCT_CLEAR:
        return {
          isLoading: false,
          error: '',
          updated: undefined,
      };
      default:
        return state;
    }
}

export type DetailProductState = {
  error?: string,
  isLoading: boolean,
  detail?: DataProduct
}

const detailProductState: DetailProductState = {
  isLoading: false,
}


export const detailProductReducer = (state = detailProductState, action: CreateProductAction): DetailProductState => {
  switch (action.type) {
      case DETAIL_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: action.error,
      };
      case DETAIL_PRODUCT_SUCCESS:
        return {
          ...state,
          detail: action.payload,
          isLoading: false,
          error: '',
      };
      case DETAIL_PRODUCT_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
      };
      case DETAIL_PRODUCT_CLEAR:
        return {
          isLoading: false,
          error: '',
          detail: undefined,
      };
      default:
        return state;
    }
}
export type DeleteProduct = {
  error?: string,
  isLoading: boolean,
  detail?: DataProduct
}

const deleteProductState: DeleteProduct = {
  isLoading: false,
}


export const deleteProductReducer = (state = deleteProductState, action: CreateProductAction): DeleteProduct => {
  switch (action.type) {
      case DELETE_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: action.error,
      };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          detail: action.payload,
          isLoading: false,
          error: '',
      };
      case DELETE_PRODUCT_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
      };
      case DELETE_PRODUCT_CLEAR:
        return {
          isLoading: false,
          error: '',
          detail: undefined,
      };
      default:
        return state;
    }
}