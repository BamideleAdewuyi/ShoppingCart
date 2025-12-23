import { Link, useOutletContext } from "react-router";

function Shop() {
    const [noOfItems, setNoOfItems, items, setItems] = useOutletContext();

    return (
        <div>
            <h1>ITEMS</h1>
            
        </div>
    )
}

export default Shop;