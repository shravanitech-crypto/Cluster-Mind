import { Router } from 'express'
import Campaign from '../models/Campaign.js'
import { verifyToken, requireRole } from '../middleware/auth.js'

const router = Router()

router.use(verifyToken, requireRole('admin', 'marketing'))

router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find().sort({ createdAt: -1 }).lean()
    res.json({ campaigns })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id).lean()
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found.' })
    }
    res.json({ campaign })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, segmentId, audience, status, schedule } = req.body
    if (!name) {
      return res.status(400).json({ message: 'Campaign name is required.' })
    }
    const campaign = await Campaign.create({
      name,
      segmentId: segmentId || undefined,
      audience: Number(audience) || 0,
      status: status || 'draft',
      schedule: schedule || undefined,
    })
    res.status(201).json({ message: 'Campaign created.', campaign })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { name, segmentId, audience, status, schedule } = req.body
    const update = {}
    if (name !== undefined) update.name = name
    if (segmentId !== undefined) update.segmentId = segmentId
    if (audience !== undefined) update.audience = Number(audience)
    if (status !== undefined) update.status = status
    if (schedule !== undefined) update.schedule = schedule

    const campaign = await Campaign.findByIdAndUpdate(req.params.id, update, { new: true })
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found.' })
    }
    res.json({ message: 'Campaign updated.', campaign })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id)
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found.' })
    }
    res.json({ message: 'Campaign deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

export default router
