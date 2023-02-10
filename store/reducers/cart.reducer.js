import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/cart.types";
import CartItem from "../../models/cart-item";

const initialState = {
  items: {},
  count: 0,
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedItem;
      const product = action.payload;
      //console.log(product,'product');
      const productTitle = product.title;
      const productPrice = product.price;
      const pId = product.id;

      if (state.items[pId]) {
        updatedItem = new CartItem(
          state.items[pId].quantity + 1,
          productPrice,
          productTitle,
          state.items[pId].sum + productPrice
        );
      } else {
        updatedItem = new CartItem(1, productPrice, productTitle, productPrice);
      }
      //console.log(updatedItem, 'updatedITem');
      return {
        items: { ...state.items, [pId]: updatedItem },
        totalAmount: state.totalAmount + productPrice,
      };

    case REMOVE_FROM_CART:
      const productId = action.payload;
      const currQuantity = state.items[productId].quantity;
      if (currQuantity > 1) {
        const Items = { ...state.items };
        const item = Items[productId];
        const formerAmount = state.totalAmount;
        const newAmount = formerAmount - Items[productId].productPrice;
        const updatedItem = new CartItem(
          currQuantity - 1,
          item.productPrice,
          item.productTitle,
          item.sum - item.productPrice
        );
        Items[productId] = updatedItem;

        return {
          ...state,
          items: Items,
          totalAmount: newAmount,
        };
      } else {
        const updatedItems = { ...state.items };

        const formerAmount = state.totalAmount;

        const newAmount = formerAmount - updatedItems[productId].productPrice;

        delete updatedItems[productId];

        return {
          ...state,
          totalAmount: newAmount,
          items: updatedItems,
        };
      }

    default:
      return state;
  }
  //return state;
};

export default cartReducer;
