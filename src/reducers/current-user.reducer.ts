import { USER_CURRENT_ERROR, USER_CURRENT_REQUEST, USER_CURRENT_SUCCESS, USER_CURRENT_CLEAR } from "../constants/user";

export type AuthAction = {
    type: string,
    payload?: User,
    error?: string,
}

export const getTokenStorage = (): string | null => {
  return window.localStorage.getItem('token');
}

export interface User {
    username?: string,
    email?: string
}

export type AuthState = Readonly<{
    profile ? : User ,
    error?: string,
    isLoading?: boolean,
  }>;
export const initialState = {

};

export const currentUserReducer = (state = initialState, action: AuthAction): AuthState=> {
    switch (action.type) {
        case USER_CURRENT_REQUEST:
          return {
            ...state,
            isLoading: true,
            error: action.error,
        };
        case USER_CURRENT_SUCCESS:
          return {
            ...state,
            profile: action.payload,
            isLoading: false,
            error: '',
        };
        case USER_CURRENT_ERROR:
          return {
            ...state,
            isLoading: false,
            error: action.error,
        };
        case USER_CURRENT_CLEAR: {
          return {...initialState}
        }
        default:
          return state;
      }
}