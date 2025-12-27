import styles from './Card.module.css'
import { useState } from 'react';

function Card({title, price, image}) {
    const [quantity, setQuantity] = useState(0)

    function increment() {
        setQuantity(quantity + 1)
    };

    function decrement() {
        if (quantity != 0) setQuantity(quantity - 1);
    };

    return (
        <div className={styles.card}>
            <form action="">
                <img src={image} alt={title} />
                <h2 className={styles.itemName}>{title}</h2>
                <h3 className={styles.price}>£{price}</h3>
                <div className={styles.quantity}>
                    <button type="button" onClick={decrement}>-</button>
                    <input type="number" value={quantity}/>
                    <button type="button" onClick={increment}>+</button>
                </div>
                <button>Add to Cart</button>
            </form>
        </div>
    )
};

export default Card;