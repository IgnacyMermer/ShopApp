import { basketConstants } from "../constants/basketConstants";

export const addProductToBasket = (product)=>{
    return async dispatch=>{
        dispatch({type: basketConstants.ADD_PRODUCT_TO_BASKET, payload: product})
    }
}

export const clearBasket = (product)=>{
    return async dispatch=>{
        dispatch({type: basketConstants.CLEAR_BASKET})
    }
}

export const removeProductFromBasket = (product)=>{
    return async dispatch=>{
        dispatch({type: basketConstants.REMOVE_PRODUCT_FROM_BASKET, payload: product})
    }
}

export const changeProductQuantity = (product, newQuantity)=>{
    return async dispatch=>{
        dispatch({type: basketConstants.CHANGE_PRODUCT_QUANTITY, payload: newQuantity, 
            product})
    }
}
