import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import axios from 'axios'

import { addProduct } from '../../redux/cartSlice'

import styles from '../../styles/Product.module.css'

const Product = ({ product }) => {
	const [price, setPrice] = useState(product.prices[0])
	const [size, setSize] = useState(0)
	const [extras, setExtras] = useState([])
	const [quantity, setQuantity] = useState(1)
	const dispatch = useDispatch()

	const changePrice = (number) => {
		setPrice(price + number)
	}

	const handleSize = (sizeIndex) => {
		const priceDiff = product.prices[sizeIndex] - product.prices[size]
		setSize(sizeIndex)
		changePrice(priceDiff)
	}

	const handleIngredient = (e, option) => {
		const checked = e.target.checked

		if (checked) {
			changePrice(option.price)
			setExtras((prev) => [...prev, option])
		} else {
			changePrice(-option.price)
			setExtras(extras.filter((extra) => extra._id !== option._id))
		}
	}

	const handleAddCart = () => {
		dispatch(addProduct({ ...product, extras, price, quantity }))
	}

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.imgContainer}>
					<Image
						src={product.photo}
						alt={product.title}
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</div>
			<div className={styles.right}>
				<h1 className={styles.title}>{product.title}</h1>
				<h3 className={styles.price}>&euro;{price}</h3>
				<p className={styles.desc}>{product.description}</p>

				<h3 className={styles.choose}>Choose the size</h3>
				<div className={styles.sizes}>
					<div className={styles.size} onClick={() => handleSize(0)}>
						<Image src='/img/size.png' alt='' layout='fill' />
						<span className={styles.number}>Small</span>
					</div>
					<div className={styles.size} onClick={() => handleSize(1)}>
						<Image src='/img/size.png' alt='' layout='fill' />
						<span className={styles.number}>Medium</span>
					</div>
					<div className={styles.size} onClick={() => handleSize(2)}>
						<Image src='/img/size.png' alt='' layout='fill' />
						<span className={styles.number}>Large</span>
					</div>
				</div>

				<h3 className={styles.choose}>Choose additional ingredients</h3>
				<div className={styles.ingredients}>
					{product.extraOptions.map((option) => (
						<div className={styles.option} key={option._id}>
							<input
								type='checkbox'
								id={option.text}
								name={option.text}
								className={styles.checkbox}
								onChange={(e) => handleIngredient(e, option)}
							/>
							<label htmlFor={option.text}>{option.text}</label>
						</div>
					))}
				</div>

				<div className={styles.add}>
					<input
						type='number'
						defaultValue={1}
						className={styles.quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
					<button onClick={handleAddCart} className={styles.button}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}

export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)

	return {
		props: { product: res.data },
	}
}

export default Product
