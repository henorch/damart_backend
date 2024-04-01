import mongoose from "mongoose";

const DeliveryInfoSchema = new mongoose.Schema({
    address: String,
    telephone: String,
    recievername: String,
    orderInfo: String
})

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    password:String,
    email: email,
    delivery: DeliveryInfoSchema
})

module.exports = mongoose.model('User', userSchema)