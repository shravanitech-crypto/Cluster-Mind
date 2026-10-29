import mongoose from 'mongoose'

const predictionLogSchema = new mongoose.Schema(
  {
    model: String,
    input: String,
    prediction: String,
    confidence: String,
    timestamp: String,
  },
  { timestamps: true }
)

export default mongoose.model('PredictionLog', predictionLogSchema)
