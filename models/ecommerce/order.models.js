import mongoose from 'mongoose'
import { product } from './product.models'

const orderItemsSchema = new mongoose.Schema({
  productId: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  }
})
const orderSchema = new mongoose.Schema({
  orderprice: {
    type: Number,
    required: true,
  },
  costomer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  orderItems: {
    type: [orderItemsSchema]
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'CENCELLED', 'DELIVERED'],
    default: 'PENDING'
  }
} , {})

export const order = mongoose.model('order' , orderSchema)