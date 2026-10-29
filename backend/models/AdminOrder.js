import mongoose from 'mongoose'

const adminOrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true, unique: true },
    customer: String,
    items: { type: Number, default: 1 },
    total: { type: Number, default: 0 },
    date: String,
    status: { type: String, default: 'Pending' },
    payment: String,
  },
  { timestamps: true }
)

export default mongoose.model('AdminOrder', adminOrderSchema)
