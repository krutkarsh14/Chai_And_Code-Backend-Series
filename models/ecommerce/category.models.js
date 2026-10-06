import mongoose from 'mongoose';

const Usercategory = new mongoose.Schema({}, {})

export const category = mongoose.model('category' , Usercategory)