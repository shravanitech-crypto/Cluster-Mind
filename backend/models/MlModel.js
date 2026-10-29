import mongoose from 'mongoose'

const mlModelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, default: 'Available' },
    lastTrained: String,
    accuracy: { type: Number, default: 0 },
    clusters: { type: Number, default: 0 },
    type: String,
    description: String,
  },
  { timestamps: true }
)

export default mongoose.model('MlModel', mlModelSchema)
