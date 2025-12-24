import { Link, useOutletContext } from "react-router";
import { useEffect, useState } from "react";

function Shop() {
    const [noOfItems, setNoOfItems, basket, setBasket] = useOutletContext();
    const [items, setItems] = useState({});

    async function getItems() {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const json = await res.json();
            setItems(json);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();
    }, [])
    
    return (
        <div>
            <h1>ITEMS</h1>
            
        </div>
    )
}

export default Shop;