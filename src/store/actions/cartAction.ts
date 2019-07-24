import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_QTY } from './actionTypes';
import { Product } from '../../models/product';
import { findInArrayOfObjects } from '../../shared/utils/helperFunctions';


export const addToCartOrUpdate = (product: Product) => {
  return (dispatch, getState) => {
    // Busca o state do carrinho no store
    const cart = getState().cart;

    // Verifica existencia do produto no carrinho
    findInArrayOfObjects<Product>(cart, product)
      // se existir envia pro reducer atualizar a quantidade desse produto no carrinho
      ? dispatch(updateProductQty(product))
      // senão existir envia pro reducer adicionar um novo
      : dispatch(addToCart(product))
  }
}

export const addToCart = (product: Product) => {
  return {
    type: ADD_TO_CART,
    product: product
  }
}

export const updateProductQty = (product: Product) => {
  return {
    type: UPDATE_PRODUCT_QTY,
    product: product
  }
}

export const removeFromCart = (product: Product) => {
  return {
    type: REMOVE_FROM_CART,
    product: product
  }
}