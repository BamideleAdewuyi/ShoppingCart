import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import { useState } from "react";

function AllPages() {
    const [cart, setCart] = useState({})
    return (
        <div>
            <Navbar cart={cart}/>
            <Outlet context={[cart, setCart]}/>
        </div>
    )
}

export default AllPages;