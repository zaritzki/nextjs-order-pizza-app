import Image from 'next/image'
import styles from '../styles/ProductLists.module.css'
import ProductCard from './ProductCard'

const ProductLists = ({ productLists }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>The Best pizza in Cork City</h1>
			<p className={styles.desc}>
				Vestibulum maximus consequat ornare. Integer egestas scelerisque sem,
				egestas tristique elit varius sed. Mauris pellentesque volutpat
				accumsan. Sed nunc leo, tincidunt sit amet nisi ut, vestibulum eleifend
				ex.
			</p>
			<div className={styles.wrapper}>
				{productLists.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	)
}

export default ProductLists
