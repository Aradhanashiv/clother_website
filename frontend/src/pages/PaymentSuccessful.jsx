import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccessful = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 max-w-lg w-full text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-5xl text-green-600">✓</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mt-6">
          Payment Successful
        </h1>

        {/* Description */}
        <p className="text-gray-500 mt-4 leading-relaxed">
          Thank you for your purchase. Your payment has been verified
          successfully and your order has been placed.
        </p>

        {/* Order Info */}
        <div className="bg-gray-50 rounded-2xl p-5 mt-8 text-left space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Order Status</span>
            <span className="font-semibold text-green-600">
              Confirmed
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Payment Status</span>
            <span className="font-semibold text-green-600">
              Paid
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Estimated Delivery</span>
            <span className="font-semibold text-gray-800">
              3-5 Days
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link
            to="/"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/my-orders"
            className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold transition"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;