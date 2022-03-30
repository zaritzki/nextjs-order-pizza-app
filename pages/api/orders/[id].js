import dbConnect from '../../../utils/mongodb'
import Order from '../../../models/Order'

const handler = async (req, res) => {
	const {
		method,
		query: { id },
	} = req


	dbConnect()

	if (method === 'GET') {
		try {
			const orders = await Order.findById(id)
			res.status(200).json(orders)
		} catch (err) {
			res.status(500).json(err)
		}
	}
	if (method === 'PUT') {
		try {
			// const order = await Order.create(req.body)
			// res.status(201).json(order)
		} catch (err) {
			res.status(500).json(err)
		}
	}
    if (method === 'DELETE') {
		try {
			// const proorderduct = await Order.findById(id)
			// res.status(201).json(order)
		} catch (err) {
			res.status(500).json(err)
		}
	}
}

export default handler;
