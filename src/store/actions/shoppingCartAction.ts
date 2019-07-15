import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import { Product } from '../../models/product';

export const addToCart = (product: Product) => {
  return {
    type: ADD_TO_CART,
    product: product
  }
}

export const removeFromCart = (product: Product) => {
  return {
    type: REMOVE_FROM_CART,
    product: product
  }
}