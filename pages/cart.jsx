import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const Cart = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<table className={styles.table}>
					<tr className={styles.trTitle}>
						<th>Product</th>
						<th align='left'>Name</th>
						<th align='left'>Extras</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
					<tr className={styles.tr}>
						<td>
							<div className={styles.imgContainer}>
								<Image
									src='/img/pizza.png'
									alt=''
									layout='fill'
									objectFit='cover'
								/>
							</div>
						</td>
						<td>
							<span className={styles.name}>CORALZO</span>
						</td>
						<td>
							<span className={styles.extras}>
								Double ingredients, spicy sauce
							</span>
						</td>
						<td align='center'>
							<span className={styles.price}>$19.90</span>
						</td>
						<td align='center'>
							<span className={styles.quantity}>2</span>
						</td>
						<td align='center'>
							<span className={styles.total}>$39.80</span>
						</td>
					</tr>
					<tr className={styles.tr}>
						<td>
							<div className={styles.imgContainer}>
								<Image
									src='/img/pizza.png'
									alt=''
									layout='fill'
									objectFit='cover'
								/>
							</div>
						</td>
						<td>
							<span className={styles.name}>PEPPERONI</span>
						</td>
						<td>
							<span className={styles.extras}>
								Double ingredients, spicy sauce
							</span>
						</td>
						<td align='center'>
							<span className={styles.price}>$19.90</span>
						</td>
						<td align='center'>
							<span className={styles.quantity}>1</span>
						</td>
						<td align='center'>
							<span className={styles.total}>$39.80</span>
						</td>
					</tr>
				</table>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<div className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Subtotal:</strong>
						<span className={styles.totalTextValue}>$79.60</span>
					</div>
					<div className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Delivery:</strong>
						<span className={styles.totalTextValue}>$2.50</span>
					</div>
					<div className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Discount:</strong>
						<span className={styles.totalTextValue}>$0.00</span>
					</div>
					<h4 className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Total:</strong>
						<span className={styles.totalTextValue}>$82.10</span>
					</h4>
					<button className={styles.button}>Checkout Now</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
