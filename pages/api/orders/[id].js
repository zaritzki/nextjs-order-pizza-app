import dbConnect from '../../../utils/mongodb'
import Order from '../../../models/Order'

const handler = async (req, res) => {
	const {
		method,
		query: { id },
		cookies,
	} = req

	const token = cookies.token

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
		if (!token || token !== process.env.TOKEN) {
			return res.statuc(401).json('Not Authenticated!');
		}
		try {
			const order = await Order.findByIdAndUpdate(id, req.body, {
				new: true
			})
			res.status(200).json(order)
		} catch (err) {
			res.status(500).json(err)
		}
	}
    if (method === 'DELETE') {
		if (!token || token !== process.env.TOKEN) {
			return res.statuc(401).json('Not Authenticated!');
		}
		try {
			await Order.findByIdAndDelete(id)
			res.status(201).json('The order has been deleted!')
		} catch (err) {
			res.status(500).json(err)
		}
	}
}

export default handler;
