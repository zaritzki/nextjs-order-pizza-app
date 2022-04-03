import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import styles from '../../styles/Admin.module.css'

const Index = ({ products, orders }) => {
    const [productLists, setProductLists] = useState(products);
    const [orderLists, setOrderLists] = useState(orders);

    const status = ['Preparing', 'On the way', 'Delivered']

    const handleProductEdit = async (id) => {
        try {
            // const res = await axios.
        } catch(err) {
            console.log(err);
        }
    }

    const handleProductDelete = async (id) => {
        try {
            const res = await axios.delete('http://localhost:3000/api/products/' + id)
             setProductLists( productLists.filter((product) => product._id !== id ))
        } catch(err) {
            console.log(err);
        }
    }

    const handleNextStage = async (id) => {
        const item = orderLists.filter((order) => order._id ===id )[0];
        const currentStatus = item.status

        try {
            const res = await axios.put('http://localhost:3000/api/orders/' + id, {
                status: currentStatus + 1
            })
            setOrderLists([
                res.data,
                ...orderLists.filter((order) => order._id !== id)
            ])
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.table}>Products</h1>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTable}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productLists.map( (product) => (
                            <tr className={styles.tr} key={ product._id }>
                                <td>
                                    <Image
                                        src={ product.photo }
                                        width={50}
                                        height={50}
                                        objectFit='cover'
                                        alt=''
                                    />

                                </td>
                                <td>{ product._id.slice(0,8) }...</td>
                                <td>{ product.title }</td>
                                <td>&euro;{ product.prices[0] }</td>
                                <td>
                                    <button onClick={() => handleProductEdit(product._id)} className={styles.button}>Edit</button>
                                    <button onClick={() => handleProductDelete(product._id)} className={styles.button}>Delete</button>
                                </td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
            <div className={styles.item}>
            <h1 className={styles.table}>Orders</h1>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trTable}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderLists.map( (order) => (
                        <tr className={styles.tr} key={ order._id }>
                            <td>{ order._id.slice(0,8) }...</td>
                            <td>{ order.customer }</td>
                            <td>&euro;{ order.total }</td>
                            <td>{ order.method === 0 ? (<span>Cash</span>) : (<span>Paid</span>) }</td>
                            <td>{ status[order.status] }</td>
                            <td>
                                <button onClick={() => handleNextStage(order._id)} className={styles.button}>Next Stage</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    // to check if user is logged-in
    const myCookie = ctx.req?.cookies || ''
    if ( myCookie.token !== process.env.TOKEN ) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            }
        }
    }

    const propductRes = await axios.get('http://localhost:3000/api/products')
    const orderRes = await axios.get('http://localhost:3000/api/orders')

    return {
        props: {
            products: propductRes.data,
            orders: orderRes.data,
        }
    }
}

export default Index