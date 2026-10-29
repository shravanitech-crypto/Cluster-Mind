import { Router } from 'express'
import CustomerSegment from '../models/CustomerSegment.js'
import { verifyToken, requireRole } from '../middleware/auth.js'

const router = Router()

router.use(verifyToken, requireRole('admin', 'marketing'))

router.get('/', async (req, res) => {
  try {
    const segments = await CustomerSegment.find().lean()
    res.json({ segments })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const segment = await CustomerSegment.findById(req.params.id).lean()
    if (!segment) {
      return res.status(404).json({ message: 'Segment not found.' })
    }
    res.json({ segment })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { segmentName, criteria, customerIds } = req.body
    if (!segmentName) {
      return res.status(400).json({ message: 'Segment name is required.' })
    }
    const ids = customerIds || []
    const segment = await CustomerSegment.create({
      segmentName,
      criteria: criteria || 'ML generated cluster',
      customerIds: ids,
      size: ids.length,
    })
    res.status(201).json({ message: 'Segment created.', segment })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { segmentName, criteria, customerIds } = req.body
    const update = {}
    if (segmentName !== undefined) update.segmentName = segmentName
    if (criteria !== undefined) update.criteria = criteria
    if (customerIds !== undefined) {
      update.customerIds = customerIds
      update.size = customerIds.length
    }
    const segment = await CustomerSegment.findByIdAndUpdate(req.params.id, update, { new: true })
    if (!segment) {
      return res.status(404).json({ message: 'Segment not found.' })
    }
    res.json({ message: 'Segment updated.', segment })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const segment = await CustomerSegment.findByIdAndDelete(req.params.id)
    if (!segment) {
      return res.status(404).json({ message: 'Segment not found.' })
    }
    res.json({ message: 'Segment deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

export default router
