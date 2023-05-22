import { GET_PRODUCT_CATEGORY_REQUEST, GET_PRODUCT_CATEGORY_SUCCESS, GET_PRODUCT_CATEGORY_ERROR, CREATE_PRODUCT_CATEGORY_REQUEST, CREATE_PRODUCT_CATEGORY_SUCCESS, CREATE_PRODUCT_CATEGORY_ERROR, CREATE_PRODUCT_CATEGORY_CLEAR, DETAIL_PRODUCT_CATEGORY_CLEAR, DETAIL_PRODUCT_CATEGORY_SUCCESS, DETAIL_PRODUCT_CATEGORY_ERROR, DETAIL_PRODUCT_CATEGORY_REQUEST, UPDATE_PRODUCT_CATEGORY_REQUEST, UPDATE_PRODUCT_CATEGORY_SUCCESS, UPDATE_PRODUCT_CATEGORY_ERROR, UPDATE_PRODUCT_CATEGORY_CLEAR, DELETE_PRODUCT_CATEGORY_REQUEST, DELETE_PRODUCT_CATEGORY_SUCCESS, DELETE_PRODUCT_CATEGORY_ERROR, DELETE_PRODUCT_CATEGORY_CLEAR } from "../constants/product-category";
import { DataProductCategory } from "../utills/intefaces/product-category";

export type AuthAction = {
    type: string,
    payload: {
      data: DataProductCategory[],
      total: number,
    }
    error?: string,
}

export type ListProductCategoryState = Readonly<{
    list: {
      data: DataProductCategory[],
      total: number,
    },
    error?: string,
    isLoading?: boolean,
  }>;
export const initialState = {
  list: {
    data: [] as DataProductCategory[],
    total: 0,
  },
};

export const listProductCategoryReducer = (state = initialState, action: AuthAction): ListProductCategoryState=> {
    switch (action.type) {
        case GET_PRODUCT_CATEGORY_REQUEST:
          return {
            ...state,
            isLoading: true,
            error: action.error,
        };
        case GET_PRODUCT_CATEGORY_SUCCESS:
          return {
            ...state,
            list: action.payload,
            isLoading: false,
            error: '',
        };
        case GET_PRODUCT_CATEGORY_ERROR:
          return {
            ...state,
            isLoading: false,
            error: action.error,
        };
        default:
          return state;
      }
}

export type CreateProductCategoryAction = {
  type: string,
  payload: DataProductCategory,
  error?: string,
}


export type CreateProductCategoryState = {
  error?: string,
  isLoading: boolean,
  created?: DataProductCategory
}

const initStateProductCategory: CreateProductCategoryState = {
  isLoading: false,
}

export const createProductCategoryReducer = (state = initStateProductCategory, action: CreateProductCategoryAction): CreateProductCategoryState => {
  switch (action.type) {
      case CREATE_PRODUCT_CATEGORY_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: action.error,
      };
      case CREATE_PRODUCT_CATEGORY_SUCCESS:
        return {
          ...state,
          created: action.payload,
          isLoading: false,
          error: '',
      };
      case CREATE_PRODUCT_CATEGORY_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
      };
      case CREATE_PRODUCT_CATEGORY_CLEAR:
        return {
          isLoading: false,
          error: '',
          created: undefined,
      };
      default:
        return state;
    }
}


export type UpdateProductCategoryState = {
  error?: string,
  isLoading: boolean,
  updated?: DataProductCategory
}


const initUpdateStateProductCategory: UpdateProductCategoryState = {
  isLoading: false,
}
export const updateProductCategoryReducer = (state = initUpdateStateProductCategory, action: CreateProductCategoryAction): UpdateProductCategoryState => {
  switch (action.type) {
      case UPDATE_PRODUCT_CATEGORY_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: action.error,
      };
      case UPDATE_PRODUCT_CATEGORY_SUCCESS:
        return {
          ...state,
          updated: action.payload,
          isLoading: false,
          error: '',
      };
      case UPDATE_PRODUCT_CATEGORY_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
      };
      case UPDATE_PRODUCT_CATEGORY_CLEAR:
        return {
          isLoading: false,
          error: '',
          updated: undefined,
      };
      default:
        return state;
    }
}

export type DetailProductCategoryState = {
  error?: string,
  isLoading: boolean,
  detail?: DataProductCategory
}

const detailProductCategoryState: DetailProductCategoryState = {
  isLoading: false,
}


export const detailProductCategoryReducer = (state = detailProductCategoryState, action: CreateProductCategoryAction): DetailProductCategoryState => {
  switch (action.type) {
      case DETAIL_PRODUCT_CATEGORY_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: action.error,
      };
      case DETAIL_PRODUCT_CATEGORY_SUCCESS:
        return {
          ...state,
          detail: action.payload,
          isLoading: false,
          error: '',
      };
      case DETAIL_PRODUCT_CATEGORY_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
      };
      case DETAIL_PRODUCT_CATEGORY_CLEAR:
        return {
          isLoading: false,
          error: '',
          detail: undefined,
      };
      default:
        return state;
    }
}
export type DeleteProductCategory = {
  error?: string,
  isLoading: boolean,
  detail?: DataProductCategory
}

const deleteProductCategoryState: DeleteProductCategory = {
  isLoading: false,
}


export const deleteProductCategoryReducer = (state = deleteProductCategoryState, action: CreateProductCategoryAction): DeleteProductCategory => {
  switch (action.type) {
      case DELETE_PRODUCT_CATEGORY_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: action.error,
      };
      case DELETE_PRODUCT_CATEGORY_SUCCESS:
        return {
          ...state,
          detail: action.payload,
          isLoading: false,
          error: '',
      };
      case DELETE_PRODUCT_CATEGORY_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
      };
      case DELETE_PRODUCT_CATEGORY_CLEAR:
        return {
          isLoading: false,
          error: '',
          detail: undefined,
      };
      default:
        return state;
    }
}