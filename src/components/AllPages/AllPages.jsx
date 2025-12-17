import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import { useState } from "react";

function AllPages() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default AllPages;