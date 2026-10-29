import mongoose from 'mongoose'

const adminCustomerSchema = new mongoose.Schema(
  {
    customerId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: String,
    phone: String,
    city: String,
    segment: String,
    totalOrders: { type: Number, default: 0 },
    totalSpent: { type: Number, default: 0 },
    joined: String,
    status: { type: String, default: 'Active' },
    lastActive: String,
  },
  { timestamps: true }
)

export default mongoose.model('AdminCustomer', adminCustomerSchema)
