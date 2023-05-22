import { Fragment } from "react"
import { ProductTable } from "./components/table";
import { Outlet } from "react-router-dom";
import { LinkButtonPrimary } from "../../components/buttons/link.button";

export const ProductPage = () => {
    return (
        <Fragment>
            <div className="drop-shadow-md rounded-sm bg-white my-4">
                <div className="flex justify-between py-4 px-4">
                    <h2 className="text-lg">List Product</h2>
                    <LinkButtonPrimary label="add" link="/app/product/add"  />
                </div>
                <div className="px-4 py-2">
                    <ProductTable />
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}


