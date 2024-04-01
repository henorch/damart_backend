import mongoose from "mongoose"; 
import { Schema } from "mongoose";

const productSchema =  new Schema({
        productCode: String,
        name: String,
        price: Number,
        image: String,
        description: String,
        make: String,
        isDiscounted: Boolean,
})

module.exports = mongoose.model('Products', productSchema)