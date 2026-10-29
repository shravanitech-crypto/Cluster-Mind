import mongoose from 'mongoose'

const activityLogSchema = new mongoose.Schema(
  {
    user: String,
    action: String,
    timestamp: String,
    ip: String,
  },
  { timestamps: true }
)

export default mongoose.model('ActivityLog', activityLogSchema)
