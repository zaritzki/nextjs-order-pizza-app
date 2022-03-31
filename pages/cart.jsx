import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'

import { reset } from "../redux/cartSlice"

// Paypal
import {
	PayPalScriptProvider,
	PayPalButtons,
	usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import OrderDetail from '../components/OrderDetail'
import styles from '../styles/Cart.module.css'

const Cart = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const cart = useSelector((state) => state.cart)

	const [open, setOpen] = useState(false)
	const [cash, setCash] = useState(false)

	const totalVal = cart.subtotal + cart.delivery;

	// Paypal - this values are the props in the UI
	const amount = totalVal;
	const currency = "EUR";
	const style = {"layout":"vertical"};

	const createOrder = async (data) => {
		try {
			const res = await axios.post("http://localhost:3000/api/orders", data)
			res.status === 201 && router.push("/orders/" + res.data._id)
			dispatch(reset())
		} catch(err) {
			console.log(err)
		}
	}
	
	// Custom component to wrap the PayPalButtons and handle currency changes
	const ButtonWrapper = ({ currency, showSpinner }) => {
		// usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
		// This is the main reason to wrap the PayPalButtons in a new component
		const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

		useEffect(() => {
			dispatch({
				type: "resetOptions",
				value: {
					...options,
					currency: currency,
				},
			});
		}, [currency, showSpinner]);


		return (<>
				{ (showSpinner && isPending) && <div className="spinner" /> }
				<PayPalButtons
					style={style}
					disabled={false}
					forceReRender={[amount, currency, style]}
					fundingSource={undefined}
					createOrder={(data, actions) => {
						return actions.order
							.create({
								purchase_units: [
									{
										amount: {
											currency_code: currency,
											value: amount,
										},
									},
								],
							})
							.then((orderId) => {
								// Your code here after create the order
								return orderId;
							});
					}}
					onApprove={function (data, actions) {
						return actions.order.capture().then(function (details) {
							// console.log(details);
							const shipping = details.purchase_units[0].shipping;

							createOrder({
								customer: shipping.name.full_name,
								address: shipping.address.address_line_1,
								subtotal: cart.total,
								delivery: cart.delivery,
								discount: cart.discount,
								total: totalVal,
								method: 1, 
							});

						});
					}}
				/>
			</>
		);
	}

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
									<span className={styles.price}>&euro;{product.price}</span>
								</td>
								<td align='center'>
									<span className={styles.quantity}>&euro;{product.quantity}</span>
								</td>
								<td align='center'>
									<span className={styles.total}>&euro;{ product.price * product.quantity }</span>
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
						<span className={styles.totalTextValue}>&euro;{cart.subtotal}</span>
					</div>
					<div className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Delivery:</strong>
						<span className={styles.totalTextValue}>&euro;{cart.delivery}</span>
					</div>
					<div className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Discount:</strong>
						<span className={styles.totalTextValue}>&euro;0.00</span>
					</div>
					<h4 className={styles.totalText}>
						<strong className={styles.totalTextTitle}>Total:</strong>
						<span className={styles.totalTextValue}>&euro;{totalVal}</span>
					</h4>
					{open ? (
						<div className={styles.paymentMethods}>
							<button onClick={() => setCash(true)} className={styles.payButton}>Cash on Delivery</button>
							<PayPalScriptProvider
								options={{
									"client-id": "AYW1df-J1PWRzlpSORfn8FPtkeEPxRe5xrLCgNPMa0JiUfQ8F5hsuGJurtR4BkJHnBZZCq7-YUITl2QQ",
									components: "buttons",
									currency: "EUR",
									"disable-funding":"credit,card,p24"
								}}
							>
								<ButtonWrapper
									currency={currency}
									showSpinner={false} 
								/>
							</PayPalScriptProvider>
						</div>
					) : (
						<button onClick={() => setOpen(true)} className={styles.button}>Checkout Now</button>
					)}
				</div>
			</div>
			{ cash && <OrderDetail cart={cart} createOrder={createOrder} />}
		</div>
	)
}

export default Cart
