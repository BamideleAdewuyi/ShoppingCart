import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import { useState } from "react";

function AllPages() {
    const [noOfItems, setNoOfItems] = useState(0);
    const [items, setItems] = useState({})
    return (
        <div>
            <Navbar noOfItems={noOfItems}/>
            <Outlet context={[noOfItems, setNoOfItems, items, setItems]}/>
        </div>
    )
}

export default AllPages;