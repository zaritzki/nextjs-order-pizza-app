import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
	{
		customer: {
			type: String,
			required: true,
			maxlength: 60,
		},
		address: {
			type: String,
			required: true,
			maxlength: 200,
		},
		mobile: {
			type: String,
			maxlength: 25,
			required: false,
		},
		subtotal: {
			type: Number,
			required: true,
		},
		delivery: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
		status: {
			type: Number,
			default: 0,
		},
		method: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
)

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)
