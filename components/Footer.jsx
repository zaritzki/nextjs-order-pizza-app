import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<Image src='/img/bg.png' alt='' layout='fill' />
			</div>
			<div className={styles.item}>
				<div className={styles.card}>
					<h2 className={styles.motto}>
						Oh yes, we did. The Lama Pizza, Well baked slice of pizza.
					</h2>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>Find our Restaurant</h1>
					<p className={styles.text}>
						1654 R. McCarthy Road #304.
						<br /> Cork city, C22 CT23
						<br /> (012) 234-5678
					</p>
					<p className={styles.text}>
						194 W. Cummins St #185.
						<br /> Cork city, C22 CT23
						<br /> (012) 234-5678
					</p>
					<p className={styles.text}>
						1654 C. Butler Road #129.
						<br /> Cork city, C22 CT23
						<br /> (012) 234-5678
					</p>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>Working Hours</h1>
					<p className={styles.text}>
						MONDAY - FRIDAY
						<br /> 9:00 - 11:00
					</p>
					<p className={styles.text}>
						SATURDAY - SUNDAY
						<br /> 12:00 - 24:00
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
