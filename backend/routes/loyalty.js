import { Router } from 'express'
import Loyalty from '../models/Loyalty.js'
import { verifyToken, requireRole } from '../middleware/auth.js'

const router = Router()

router.get('/', verifyToken, async (req, res) => {
  try {
    const filter =
      ['admin', 'marketing'].includes(req.user.role) && req.query.all === 'true'
        ? {}
        : { customerId: req.user.id }
    const loyalties = await Loyalty.find(filter).lean()
    res.json({ loyalties })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.get('/me', verifyToken, async (req, res) => {
  try {
    let loyalty = await Loyalty.findOne({ customerId: req.user.id }).lean()
    if (!loyalty) {
      loyalty = await Loyalty.create({ customerId: req.user.id, points: 0, tier: 'bronze', rewards: [] })
    }
    res.json({ loyalty })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.post('/points', verifyToken, requireRole('admin', 'marketing'), async (req, res) => {
  try {
    const { customerId, points } = req.body
    if (!customerId || !points) {
      return res.status(400).json({ message: 'customerId and points are required.' })
    }
    let loyalty = await Loyalty.findOne({ customerId })
    if (!loyalty) {
      loyalty = await Loyalty.create({ customerId, points: 0, tier: 'bronze', rewards: [] })
    }
    loyalty.points += Number(points)
    if (loyalty.points >= 10000) loyalty.tier = 'platinum'
    else if (loyalty.points >= 5000) loyalty.tier = 'gold'
    else if (loyalty.points >= 2000) loyalty.tier = 'silver'
    await loyalty.save()
    res.json({ message: 'Loyalty points updated.', loyalty })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

export default router
