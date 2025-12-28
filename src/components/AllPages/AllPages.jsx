import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import { useState } from "react";

function AllPages() {
    const [noOfItems, setNoOfItems] = useState(0);
    const [cart, setCart] = useState({total: 0})
    return (
        <div>
            <Navbar noOfItems={noOfItems}/>
            <Outlet context={[noOfItems, setNoOfItems, cart, setCart]}/>
        </div>
    )
}

export default AllPages;