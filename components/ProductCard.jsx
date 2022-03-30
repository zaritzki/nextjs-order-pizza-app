import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product }) => {
	return (
		<div className={styles.container}>
			<Link href={`/product/${product._id}`} passHref>
				<a>
					<Image
						className={styles.img}
						src={product.photo}
						alt=''
						width='500'
						height='500'
					/>
				</a>
			</Link>
			<Link href={`/product/${product._id}`} passHref>
				<a>
					<h1 className={styles.title}>{product.title}</h1>
				</a>
			</Link>
			<span className={styles.price}>${product.prices[0]}</span>
			<p className={styles.desc}>{product.description}</p>
		</div>
	)
}

export default ProductCard
