import Image from 'next/image'
import styles from '../../styles/Order.module.css'

const Order = () => {
	const status = 0
	const statusClass = (index) => {
		if (index - status < 1) return styles.done
		if (index - status === 1) return styles.inProgress
		if (index - status > 1) return styles.undone
	}
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.row}>
					<table className={styles.table}>
						<tr className={styles.trTitle}>
							<th>Order #</th>
							<th>Customer</th>
							<th>Address</th>
							<th>Total</th>
						</tr>
						<tr className={styles.tr}>
							<td>
								<span className={styles.id}>12213232</span>
							</td>
							<td>
								<span className={styles.name}>John Doe</span>
							</td>
							<td>
								<span className={styles.address}>
									McCarthy St. 122 Cork city
								</span>
							</td>
							<td>
								<span className={styles.total}>$39.80</span>
							</td>
						</tr>
					</table>
				</div>
				<div className={styles.row}>
					<div className={statusClass(0)}>
						<Image src='/img/paid.png' width={30} height={30} alt='' />
						<span>Payment</span>
						<div className={styles.checkedIcon}>
							<Image
								className={styles.checkedIcon}
								src='/img/checked.png'
								width={20}
								height={20}
								alt=''
							/>
						</div>
					</div>
					<div className={statusClass(1)}>
						<Image src='/img/bake.png' width={30} height={30} alt='' />
						<span>Preparing</span>
						<div className={styles.checkedIcon}>
							<Image
								className={styles.checkedIcon}
								src='/img/checked.png'
								width={20}
								height={20}
								alt=''
							/>
						</div>
					</div>
					<div className={statusClass(2)}>
						<Image src='/img/bike.png' width={30} height={30} alt='' />
						<span>On the way</span>
						<div className={styles.checkedIcon}>
							<Image
								className={styles.checkedIcon}
								src='/img/checked.png'
								width={20}
								height={20}
								alt=''
							/>
						</div>
					</div>
					<div className={statusClass(3)}>
						<Image src='/img/delivered.png' width={30} height={30} alt='' />
						<span>Delivered</span>
						<div className={styles.checkedIcon}>
							<Image
								className={styles.checkedIcon}
								src='/img/checked.png'
								width={20}
								height={20}
								alt=''
							/>
						</div>
					</div>
				</div>
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
					<button className={styles.button} disabled>
						PAID
					</button>
				</div>
			</div>
		</div>
	)
}

export default Order
