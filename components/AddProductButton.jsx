import styles from '../styles/AddProduct.module.css'

const AddProductButton = ({ setCloseModal }) => {
	return <div  onClick={()=>setCloseModal(false)} className={styles.mainAddButton}>Add New Pizza</div>
}

export default AddProductButton
