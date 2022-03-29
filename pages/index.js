import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import Banner from '../components/Banner'
import ProductLists from '../components/ProductLists'

export default function Home({ productLists }) {
	return (
		<div>
			<Head>
				<title>Pizza Restaurant in Cork City</title>
				<meta name='description' content='Best pizza shop in  in Cork City' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Banner />
			<ProductLists productLists={productLists} />
		</div>
	)
}

export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/products')
	return {
		props: {
			productLists: res.data,
		},
	}
}
