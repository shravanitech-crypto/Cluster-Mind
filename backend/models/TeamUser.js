import mongoose from 'mongoose'

const teamUserSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true },
    name: { type: String, required: true },
    email: String,
    role: { type: String, default: 'Viewer' },
    status: { type: String, default: 'Active' },
    lastLogin: String,
  },
  { timestamps: true }
)

export default mongoose.model('TeamUser', teamUserSchema)
