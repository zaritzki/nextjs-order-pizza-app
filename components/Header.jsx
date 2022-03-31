import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity)

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.btnCall}>
					<Image src='/img/telephone.png' alt='' width='32px' height='32px' />
				</div>
				<div className={styles.txtCall}>
					<div className={styles.text}>Order Now</div>
					<div className={styles.text}>012 3456 789</div>
				</div>
			</div>
			<div className={styles.item}>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<Link href='/' passHref>
							<a>Homepage</a>
						</Link>
					</li>
					<li className={styles.listItem}>Products</li>
					<li className={styles.listItem}>Menu</li>
					<Link href='/' passHref>
						<a>
							<Image src='/img/logo.png' alt='' width='160px' height='69px' />
						</a>
					</Link>
					<li className={styles.listItem}>Events</li>
					<li className={styles.listItem}>Blog</li>
					<li className={styles.listItem}>Contact</li>
				</ul>
			</div>
			<Link href='/cart' passHref>
				<a>
				<div className={styles.item}>
					<div className={styles.cart}>
						<Image src='/img/cart.png' alt='' width='30px' height='30px' />
						<div className={styles.counter}>{quantity}</div>
					</div>
				</div>
				</a>
			</Link>
		</div>
	)
}

export default Navbar
