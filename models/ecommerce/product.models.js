import mongoose from 'mongoose'
import { category } from './category.models';

const productSchema = new mongoose.Schema({
  description:{
    required:true,
    type: String,
  },
  name:{
    required:true,
    type: String,
  },
  productImage: {
    type: String
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: Number,
    default: 0,
  },
  category: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
}, {timestamps:true});


export const product = mongoose.model('Product',  productSchema)