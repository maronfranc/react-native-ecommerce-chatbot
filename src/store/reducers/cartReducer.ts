import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_QTY } from "../actions/actionTypes";
import { Product } from "../../models/product";

const initialState: Array<Product> = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    case UPDATE_PRODUCT_QTY:
      // Retorna uma cópia do carrinho com um produto atualizado
      return state.map((item) => {
        // encontra o produto que já existe e atualiza ele
        if (item.id === action.product.id) {
          return { ...item, qty: action.product.qty }
        }
        // retorna todos os outros produtos sem mudar
        return item;
      });
    case REMOVE_FROM_CART:
      return state.filter((cartProduct: Product) => cartProduct.id !== action.product.id)
    default:
      return state;
  }
}

export default cartReducer
