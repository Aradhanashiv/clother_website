import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique:true,
        trim:true
    },
    productImage: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true,
        min:1
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: [{
      size:{ type: String, enum: ['S', 'M' , 'L', 'XL' , 'XXL'], default: 'M'},
      stock: {type:Number, default:0}
    }],
    material: {
        type: String,
        required: true
    },

}, {timestamps: true}     
)

const Product = mongoose.model('Product', productSchema)

export default Product