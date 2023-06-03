import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({})
	res.status(200).json(products)
})

// @desc    Fetch a singe product by it's id
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)

	if (product) {
		return res.status(200).json(product)
	}

	res.status(404).json({ message: 'Product not found.' })
})

export { getProductById, getProducts }
