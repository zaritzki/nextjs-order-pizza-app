import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product }) => {
	return (
		<div href={`/product/${product._id}`} className={styles.container}>
			<Link href={`/product/${product._id}`}>
				<Image
					className={styles.img}
					src={product.photo}
					alt=''
					width='500'
					height='500'
				/>
			</Link>
			<Link href={`/product/${product._id}`}>
				<h1 className={styles.price}>{product.title}</h1>
			</Link>

			<span className={styles.price}>${product.prices[0]}</span>
			<p className={styles.desc}>{product.description}</p>
		</div>
	)
}

export default ProductCard
