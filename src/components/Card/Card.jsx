import styles from './Card.module.css'

function Card({title, price, image}) {
    return (
        <div className={styles.card}>
            <form action="">
                <img src={image} alt={title} />
                <h2 className={styles.itemName}>{title}</h2>
                <h3 className={styles.price}>£{price}</h3>
                <div className={styles.quantity}>
                    <button type="button">-</button>
                    <input type="number" placeholder="0"/>
                    <button type="button">+</button>
                </div>
                <button>Add to Cart</button>
            </form>
        </div>
    )
};

export default Card;