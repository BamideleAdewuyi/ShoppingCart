import styles from './ShopCard.module.css'
import { useState } from 'react';

function ShopCard({title, price, image, updateCart, amount, id}) {
    const [quantity, setQuantity] = useState(amount)

    function increment() {
        setQuantity(quantity + 1)
    };

    function decrement() {
        if (quantity != 0) setQuantity(quantity - 1);
    };

    function handleChange(newValue) {
        setQuantity(Number(newValue.target.value))
    };

    return (
        <div className={styles.card}>
            <form action="">
                <img src={image} alt={title} />
                <h2 className={styles.itemName}>{title}</h2>
                <h3 className={styles.price}>£{price}</h3>
                <div className={styles.quantity}>
                    <button type="button" onClick={decrement}>-</button>
                    <input type="number" value={quantity} onChange={handleChange}/>
                    <button type="button" onClick={increment}>+</button>
                </div>
                <button type='button' onClick={() => updateCart(title, quantity, price, image, id)}>Add to Cart</button>
            </form>
        </div>
    )
};

export default ShopCard;