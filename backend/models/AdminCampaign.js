import mongoose from 'mongoose'

const adminCampaignSchema = new mongoose.Schema(
  {
    campaignId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    segment: String,
    channel: String,
    type: String,
    startDate: String,
    endDate: String,
    status: { type: String, default: 'Scheduled' },
    performance: { type: Number, default: 0 },
    budget: { type: Number, default: 0 },
    spent: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export default mongoose.model('AdminCampaign', adminCampaignSchema)
