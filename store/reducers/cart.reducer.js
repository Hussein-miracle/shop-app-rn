import PRODUCTS from '../../data/dummy-data';
import { ADD_TO_CART } from '../types/cart.types';
import CartItem from '../../models/cart-item';

const initialState = {
  items:{},
  count:0,
  totalAmount:0,
}

const cartReducer = (state = initialState ,action) => {
  switch(action.type){
    case ADD_TO_CART:
      let updatedItem;

      const product = action.payload;
      
      const productTitle = product.title;
      const productPrice = product.price;
      const pId = product.id;


      if(state.items[pId]){

        updatedItem = new CartItem(
          state.items[pId].quantity + 1,
          productTitle,
          productPrice,
          state.items[pId].sum + productPrice,
        )
        // return {
        //   ...state,
        //   items:{...state.items,[pId]:updatedItem},
        //   totalAmount: state.totalAmount + productPrice,
        // }
      }else{
        updatedItem = new CartItem(1,productTitle,productPrice,productPrice);
      }

      return {
        items:{...state.items, [pId]: updatedItem},
        totalAmount: state.totalAmount + productPrice,
      }

    default:
      return state;
  }
  return state;
}

export default cartReducer;