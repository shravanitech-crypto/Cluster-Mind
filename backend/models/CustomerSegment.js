import mongoose from 'mongoose'

const customerSegmentSchema = new mongoose.Schema(
  {
    segmentName: { type: String, required: true },
    criteria: { type: String, default: 'ML generated cluster' },
    customerIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    size: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export default mongoose.model('CustomerSegment', customerSegmentSchema)
