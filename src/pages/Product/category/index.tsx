import { Fragment } from "react"
import { ProductCategoryTable } from "./components/table";
import { Link, Outlet } from "react-router-dom";
import { LinkButtonPrimary } from "../../../components/buttons/link.button";

export const ProductCategoryPage = () => {
    return (
        <Fragment>
            <div className="drop-shadow-md rounded-sm bg-white my-4">
                <div className="flex justify-between py-4 px-4">
                    <h2 className="text-lg">List Product</h2>
                    <LinkButtonPrimary label="add" link="/app/product/category/add"/>
                </div>
                <div className="px-4 py-2">
                    <ProductCategoryTable />
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}


