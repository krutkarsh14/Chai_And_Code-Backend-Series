import mongoose from 'mongoose'
const medical_reportSchema = new mongoose.Schema({
  
}, {})

export  const medicalReport = mongoose.model('medicalReoprt' , medical_reportSchema)