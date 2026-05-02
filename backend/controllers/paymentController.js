// import { razorPayInstance } from "../config/razorpay.js";
// import Order from "../models/orderModel.js";

// export const placeOrder = async(req,res) => {
//    try { 
//     const {items, shippingAddress, paymentMethod, totalAmount} = req.body
//     if(!items || !items.length === 0){
//       return res.status(400).json({success: false, message: "No Items in the order"})  
//     }
//     const order = new Order.create({
//         user: req.user._id,
//    items,
//    shippingAddress,
//    paymentMethod,
//    paymentInfo,
//    totalAmount,
//     }) 
//    const createdorder = await order.save();
//    return res.status(201).json(createdorder)
//    }
//     catch (error) {
//     res.status(500).json({success: false, message: "Error in creating order "})
//    }
// }


// export const createOrder = async(req,res) => {
//    try {
//     const {amount} = req.body
//     const options = {
//         amount: amount* 100,
//         currency: "INR",
//         receipt: `receipt_${Date.now()}`
//     }

//     const order = await razorPayInstance.orders.create(options);
//     res.status(200).json({success: true, order})
//    } catch (error) {
//     res.status(500).json({success: false, message: "Error in creating order "})
//    }
// }

// export const verifyOrder = async(req,res) => {
//     try {
//         const {razor_payment_id, razor_order_id,} = req.body
//     } catch (error) {
        
//     }
// }