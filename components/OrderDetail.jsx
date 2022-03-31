    import { useState } from 'react'
    import styles from '../styles/OrderDetail.module.css'

    const OrderDetail = ({cart, createOrder}) => {
        const [customer, setCustomer] = useState('');
        const [address, setAddress] = useState('');
        const [mobile, setMobile] = useState('');

        const totalVal = cart.subtotal + cart.delivery;

        const handleOrder = () => {
            const data = {
                customer, 
                mobile, 
                address, 
                subtotal: cart.total,
                delivery: cart.delivery,
                discount: cart.discount,
                total: totalVal,
                method: 0
            }

            createOrder(data)
        }

        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>You will pay <strong>&euro;{totalVal}</strong> after delivery</h1>
                    <div className={styles.item}>
                        <label className={styles.label}>Name</label>
                        <input 
                            type='text' 
                            placeholder='John Doe'
                            className={styles.input} 
                            onChange={(e) => setCustomer(e.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Mobile</label>
                        <input 
                            type='text' 
                            placeholder='+353 88 888 8888'
                            className={styles.input} 
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Address</label>
                        <textarea 
                            placeholder='123 McCarthy Hill, Cork city'
                            className={styles.input} 
                            onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                    </div>
                    <button onClick={handleOrder} className={styles.button}>Order</button>
                </div>
            </div>
        )
    }

    export default OrderDetail