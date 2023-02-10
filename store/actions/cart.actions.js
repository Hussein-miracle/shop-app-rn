import { ADD_TO_CART } from "../types/cart.types";
export const addToCart = (productId) => {
  return {
    type:ADD_TO_CART,
    payload: productId,
  };
};
