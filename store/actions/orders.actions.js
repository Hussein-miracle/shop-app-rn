import { ADD_ORDER } from "../types/orders.types"

export const addOrder = (cartItems,totalAmount) => {
  return {
    type:ADD_ORDER,
    payload:{
      items:cartItems,
      amount:totalAmount
    },
  }
}