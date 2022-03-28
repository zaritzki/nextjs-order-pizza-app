import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Pizza Restaurant in Cork City</title>
				<meta name='description' content='Best pizza shop in town' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>Homepage</h1>
		</div>
	)
}
