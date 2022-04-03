import  { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import Banner from '../components/Banner'
import AddProductButton from '../components/AddProductButton'
import AddProductModal from '../components/AddProductModal'
import ProductLists from '../components/ProductLists'

export default function Home({ productLists, admin }) {
	const [closeModal, setCloseModal] = useState(true)
	return (
		<div>
			<Head>
				<title>Pizza Restaurant in Cork City</title>
				<meta name='description' content='Best pizza shop in  in Cork City' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Banner />
			{ admin && <AddProductButton setCloseModal={setCloseModal} /> }
			<ProductLists productLists={productLists} />
			{!closeModal && <AddProductModal setCloseModal={setCloseModal} /> }
		</div>
	)
}

export const getServerSideProps = async (ctx) => {
	// to check if user is logged-in
    const myCookie = ctx.req?.cookies || ''
	let admin = false;
    if ( myCookie.token === process.env.TOKEN ) {
		admin = true;
    }

	const res = await axios.get('http://localhost:3000/api/products')
	return {
		props: {
			productLists: res.data,
			admin
		},
	}
}
