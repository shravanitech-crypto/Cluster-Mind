import mongoose from 'mongoose'

const appNotificationSchema = new mongoose.Schema(
  {
    type: String,
    title: { type: String, required: true },
    audience: String,
    scheduled: String,
    status: { type: String, default: 'Scheduled' },
    opened: String,
  },
  { timestamps: true }
)

export default mongoose.model('AppNotification', appNotificationSchema)
