import React, {Fragment} from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {  
    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    )
}