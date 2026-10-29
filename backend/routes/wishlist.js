import { Router } from 'express'
import Wishlist from '../models/Wishlist.js'
import Product from '../models/Product.js'
import { verifyToken } from '../middleware/auth.js'

const router = Router()

router.use(verifyToken)

async function getWishlistFor(customerId) {
  let wishlist = await Wishlist.findOne({ customerId }).lean()
  if (!wishlist) {
    wishlist = await Wishlist.create({ customerId, productIds: [] })
  }
  return wishlist
}

async function withProducts(wishlist) {
  const ids = wishlist.productIds || []
  const products = await Product.find({ _id: { $in: ids } }).lean()
  return { ...wishlist, products }
}

router.get('/', async (req, res) => {
  try {
    const wishlist = await getWishlistFor(req.user.id)
    res.json({ wishlist: await withProducts(wishlist) })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.post('/items', async (req, res) => {
  try {
    const { productId } = req.body
    if (!productId) {
      return res.status(400).json({ message: 'productId is required.' })
    }
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' })
    }

    let wishlist = await Wishlist.findOne({ customerId: req.user.id })
    if (!wishlist) {
      wishlist = await Wishlist.create({ customerId: req.user.id, productIds: [] })
    }
    if (!wishlist.productIds.some((id) => String(id) === String(productId))) {
      wishlist.productIds.push(productId)
      await wishlist.save()
    }

    res.status(201).json({ message: 'Added to wishlist.', wishlist: await withProducts(wishlist.toObject()) })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.delete('/items/:productId', async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ customerId: req.user.id })
    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found.' })
    }
    wishlist.productIds = wishlist.productIds.filter(
      (id) => String(id) !== String(req.params.productId)
    )
    await wishlist.save()
    res.json({ message: 'Removed from wishlist.', wishlist: await withProducts(wishlist.toObject()) })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

export default router
