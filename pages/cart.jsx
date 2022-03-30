import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const Cart = () => {
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.cart);

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<table className={styles.table}>
					<thead>
						<tr className={styles.trTitle}>
							<th>Product</th>
							<th align='left'>Name</th>
							<th align='left'>Extras</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{cart.products.map((product) => (
							<tr className={styles.tr} key={product._id}>
								<td>
									<div className={styles.imgContainer}>
										<Image
											src={product.photo}
											alt=''
											layout='fill'
											objectFit='cover'
										/>
									</div>
								</td>
								<td>
									<span className={styles.name}>{product.title}</span>
								</td>
								<td>
									<span className={styles.extras}>
										{product.extras.map((extra) => (
											<span key={extra._id}>{extra.text}, </span>
										))}
									</span>
								</td>
								<td align='center'>
									<span className={styles.price}>{product.price}</span>
								</td>
								<td align='center'>
									<span className={styles.quantity}>{product.quantity}</span>
								</td>
								<td align='center'>
									<span className={styles.total}>{product.price * product.quantity}</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<div className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Subtotal:</strong>
						<span className={styles.totalTextValue}>${cart.total}</span>
					</div>
					<div className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Delivery:</strong>
						<span className={styles.totalTextValue}>${cart.delivery}</span>
					</div>
					<div className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Discount:</strong>
						<span className={styles.totalTextValue}>$0.00</span>
					</div>
					<h4 className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Total:</strong>
						<span className={styles.totalTextValue}>${cart.total + cart.delivery}</span>
					</h4>
					<button className={styles.button}>Checkout Now</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
