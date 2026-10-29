import mongoose from 'mongoose'

const feedbackEntrySchema = new mongoose.Schema(
  {
    type: String,
    customer: String,
    product: String,
    content: String,
    rating: { type: Number, default: 0 },
    date: String,
    status: { type: String, default: 'Open' },
  },
  { timestamps: true }
)

export default mongoose.model('FeedbackEntry', feedbackEntrySchema)
