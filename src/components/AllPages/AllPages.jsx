import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import { useState } from "react";

function AllPages() {
    const [noOfItems, setNoOfItems] = useState(0);
    const [basket, setBasket] = useState({})
    return (
        <div>
            <Navbar noOfItems={noOfItems}/>
            <Outlet context={[noOfItems, setNoOfItems, basket, setBasket]}/>
        </div>
    )
}

export default AllPages;