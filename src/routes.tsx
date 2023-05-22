import { createBrowserRouter } from 'react-router-dom';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import DefaultLayout from './layout/DefaultLayout';
import ECommerce from './pages/Dashboard/ECommerce';
import { ProductPage } from './pages/Product';
import { ProductPageAdd } from './pages/Product/add';
import { ProductPageUpdate } from './pages/Product/update';
import { ProductCategoryPage } from './pages/Product/category';
import { ProductCategoryPageAdd } from './pages/Product/category/add';
import { ProductCategoryPageEdit } from './pages/Product/category/edit';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/app",
      element: <DefaultLayout />,
      children: [
        {
          path: "dashboard",
          element: <ECommerce />
        },
        {
          path: "product",
          element: <ProductPage />,
          children: [
            {
              path: "add",
              element: <ProductPageAdd />
            },
            {
              path: "edit/:id",
              element: <ProductPageUpdate />
            }
          ]
        },
        {
          path: "product/category",
          element: <ProductCategoryPage />,
        },
        {
          path: "product/category/add",
          element: <ProductCategoryPageAdd />
        },                  
        {
          path: "product/category/:id",
          element: <ProductCategoryPageEdit />
        }
      ]
    }
]);