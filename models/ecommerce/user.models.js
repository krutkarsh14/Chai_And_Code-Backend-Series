import mongoose from 'mongoose';


 const usherSchema = new mongoose.Schema({
   username: {
     type: String,
     required: true,
     lowercase: true,
     unique: true,
   },
   password: {
     type: String,
     required: true,
     unique: true,
     lowercase: true,
   }
 }, {timestamps:true})

export const User = mongoose.model('User',usherSchema )