import Image from 'next/image'
import styles from '../styles/ProductCard.module.css'

const ProductCard = () => {
	return (
		<div className={styles.container}>
			<Image src='/img/pizza.png' alt='' width='500' height='500' />
			<h1 className={styles.price}>FIORI DI ZUCCA</h1>
			<span className={styles.price}>$19.90</span>
			<p className={styles.desc}>
				Fusce sit amet condimentum dui, non cursus nibh. Nullam ac nulla sed
				magna vehicula interdum.
			</p>
		</div>
	)
}

export default ProductCard
