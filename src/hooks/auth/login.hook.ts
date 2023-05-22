import React, { useState } from "react";

export interface UserLogin {
    email: string,
    password: string,
}

export const useLogin = () => {
    const [value, onChange] = useState<UserLogin>({
        email: '',
        password: '',
    });

    const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }   
    return {value, loginHandler};
}