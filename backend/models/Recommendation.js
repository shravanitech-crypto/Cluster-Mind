import mongoose from 'mongoose'

const recommendationSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    score: { type: Number, default: 0 },
    reason: String,
  },
  { timestamps: true }
)

export default mongoose.model('Recommendation', recommendationSchema)
