import { Router } from 'express'
import Cart from '../models/Cart.js'
import Product from '../models/Product.js'
import { verifyToken } from '../middleware/auth.js'

const router = Router()

router.use(verifyToken)

async function getCartFor(customerId) {
  let cart = await Cart.findOne({ customerId }).lean()
  if (!cart) {
    cart = await Cart.create({ customerId, items: [] })
  }
  return cart
}

async function withProducts(cart) {
  const ids = cart.items.map((i) => i.productId)
  const products = await Product.find({ _id: { $in: ids } }).lean()
  const map = new Map(products.map((p) => [String(p._id), p]))
  return {
    ...cart,
    items: cart.items.map((i) => {
      const product = map.get(String(i.productId))
      return { ...i, product: product || null }
    }),
  }
}

router.get('/', async (req, res) => {
  try {
    const cart = await getCartFor(req.user.id)
    const enriched = await withProducts(cart)
    res.json({ cart: enriched })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.post('/items', async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body
    if (!productId) {
      return res.status(400).json({ message: 'productId is required.' })
    }
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' })
    }

    let cart = await Cart.findOne({ customerId: req.user.id })
    if (!cart) {
      cart = await Cart.create({ customerId: req.user.id, items: [] })
    }

    const qty = Math.max(1, Number(quantity) || 1)
    const existing = cart.items.find((i) => String(i.productId) === String(productId))
    if (existing) {
      existing.quantity += qty
    } else {
      cart.items.push({ productId, quantity: qty })
    }
    await cart.save()

    res.status(201).json({ message: 'Added to cart.', cart: await withProducts(cart.toObject()) })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.put('/items/:productId', async (req, res) => {
  try {
    const { quantity } = req.body
    const cart = await Cart.findOne({ customerId: req.user.id })
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found.' })
    }

    const item = cart.items.find((i) => String(i.productId) === String(req.params.productId))
    if (!item) {
      return res.status(404).json({ message: 'Item not in cart.' })
    }

    const qty = Math.max(1, Number(quantity) || 1)
    item.quantity = qty
    await cart.save()

    res.json({ message: 'Cart updated.', cart: await withProducts(cart.toObject()) })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.delete('/items/:productId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ customerId: req.user.id })
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found.' })
    }
    cart.items = cart.items.filter((i) => String(i.productId) !== String(req.params.productId))
    await cart.save()
    res.json({ message: 'Item removed.', cart: await withProducts(cart.toObject()) })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

router.delete('/', async (req, res) => {
  try {
    const cart = await Cart.findOne({ customerId: req.user.id })
    if (cart) {
      cart.items = []
      await cart.save()
    }
    res.json({ message: 'Cart cleared.', cart: cart ? await withProducts(cart.toObject()) : { items: [] } })
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message })
  }
})

export default router
