import { ADD_ORDER } from "../types/orders.types";
import Order from "../../models/order";
const initialState = {
  orders:[]
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:{
      const {items,amount} = action.payload;
      const order = new Order(new Date().toISOString(),items,amount,new Date());
      const newOrders  = [...state.orders,order];
      return {
        ...state,
        orders:newOrders,
      }
    }
    default:
      return state;
  }
  return state;
};

export default ordersReducer;
