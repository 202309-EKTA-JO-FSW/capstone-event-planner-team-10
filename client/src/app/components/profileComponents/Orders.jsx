"use client";
import React from "react";
import axios from "axios";
import { BASE_URL } from "@/app/utls/constants";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const Orders = ({ orders }) => {
  const cancelOrder = async (orderId) => {
    try {
      const token = getCookie("token");
      const response = await axios.post(
        `${BASE_URL}/user/cancel-order`,
        { orderId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Order canceled successfully");
        window.location.reload();
      } else {
        throw new Error("Failed to cancel order");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-bold">{order.eventTitle}</h3>
              <p className="text-gray-600">
                Ticket: {order.ticketTitle} - {order.ticketDescription}
              </p>
              <p className="text-gray-600">Quantity: {order.quantity}</p>
              <p className="text-gray-600">
                Total Price: ${order.totalPrice.toFixed(2)}
              </p>
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 duration-300"
                onClick={() => cancelOrder(order._id)}
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
