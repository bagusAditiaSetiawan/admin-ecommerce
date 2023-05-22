import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { authReducer, listUserReducer } from './reducers/auth.reducer'
import { currentUserReducer } from './reducers/current-user.reducer';
import { 
    createProductCategoryReducer, 
    deleteProductCategoryReducer,
    detailProductCategoryReducer, 
    listProductCategoryReducer, 
    updateProductCategoryReducer
} from './reducers/product-category.reducer';
import { uploadFileReducer } from './reducers/files.reducer';
import { 
    createProductReducer, 
    detailProductReducer,
    deleteProductReducer, 
    listProductReducer, 
    updateProductReducer
} from './reducers/product.reducer';


export const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
        currentUser: currentUserReducer,
        listProductCategory: listProductCategoryReducer,
        detailProductCategory: detailProductCategoryReducer,
        createProductCategory: createProductCategoryReducer,
        updateProductCategory: updateProductCategoryReducer,
        deleteProductCategory: deleteProductCategoryReducer,
        listUser: listUserReducer,
        uploadFile: uploadFileReducer,
        listProduct: listProductReducer,
        detailProduct: detailProductReducer,
        createProduct: createProductReducer,
        deleteProduct: deleteProductReducer,
        updateProduct: updateProductReducer,
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector