import PRODUCTS from '../../data/dummy-data';

const initialState = {
  userProducts:PRODUCTS,
  availableProducts:PRODUCTS.filter((p) => p.ownerId === 'u1'),
}

const productsReducer = (state = initialState ,action) => {
  // switch(action.type){
  //   default:
  //     return state;
  // }
  return state;
}

export default productsReducer;