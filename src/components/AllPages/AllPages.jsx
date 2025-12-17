import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

function AllPages() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default AllPages;