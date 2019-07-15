import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";
import { Product } from "../../models/product";

const cartProducts = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    case REMOVE_FROM_CART:
      return state.filter((cartProduct: Product) => cartProduct.id !== action.product.id)
    default:
      return state;
  }
}

export default cartProducts
