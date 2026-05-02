import mongoose from "mongoose";

const orderSchema = new  mongoose.Schema({
    user: { type: mongoose.Schema.Types.objectId, ref: "User" },
   items: [{
    product: {type: mongoose.Schema.Types.objectId, ref: "product", required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
   }],
   shippingAddress: {
    address: {type: String, required: true},
    city: {type: String, required: true},
    postalCode: {type: String, required: true},
    country: {type: String, required: true}
   },
   paymentMethod: {
    type: String,
    enum: ["cod", 'online'],
    required: true
   },
   totalAmount: {type: Number, required: true},

   orderStatus: {
    type: String,
    enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
    default: "pending"
   },   
   paidAt: Date,
   razorpayOrderId: String,
   razorpayPaymentId: String,
}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema)

export default Order