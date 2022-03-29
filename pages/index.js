import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import ProductLists from '../components/ProductLists'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Pizza Restaurant in Cork City</title>
				<meta name='description' content='Best pizza shop in  in Cork City' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Banner />
			<ProductLists />
		</div>
	)
}
