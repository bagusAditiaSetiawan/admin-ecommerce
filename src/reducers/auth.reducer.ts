import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_CLEAR, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR } from "../constants/auth";

export type AuthAction = {
    type: string,
    payload: string,
    error: string,
}

export const getTokenStorage = (): string | null => {
  return window.localStorage.getItem('token');
}

export interface User {
    username?: string,
    email?: string
}

export type AuthState = Readonly<{
    token: string | null;
    isLogged: boolean,
    error?: string,
    isLoading?: boolean,
  }>;
export const initialState: AuthState = {
    token: getTokenStorage(),
    isLogged: getTokenStorage() !== null,
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case LOGIN_REQUEST:
          return {
            ...state,
            isLoading: true,
            error: action.error,
        };
        case LOGIN_SUCCESS:
          return {
            ...state,
            token: action.payload,
            isLoading: false,
            isLogged: true,
            error: '',
        };
        case LOGIN_ERROR:
          return {
            ...state,
            isLoading: false,
            error: action.payload,
        };
        case LOGIN_CLEAR: 
          return {
            token: null,
            isLogged: false, 
            error: '',
          }
        default:
          return state;
      }
}

export interface UserList extends User {
  id: number,
}

export type UserGet = {
  data: UserList[],
  total: number,
}

export type UserState = Readonly<{
  list?: UserGet,
  error?: string,
  isLoading?: boolean,
}>


export type UserAction = {
  type: string,
  payload: UserGet,
  error: string,
}

export const listUserReducer = (state = {}, action: UserAction): UserState=> {
  switch (action.type) {
      case GET_USER_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: action.error,
      };
      case GET_USER_SUCCESS:
        return {
          ...state,
          list: action.payload,
          isLoading: false,
          error: '',
      };
      case GET_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.error,
      };
      default:
        return state;
    }
}