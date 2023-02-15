import { bucketConstants } from "../constants/bucketConstants";

export const addProductToBucket = (product)=>{
    return async dispatch=>{
        dispatch({type: bucketConstants.ADD_PRODUCT_TO_BUCKET, payload: product})
    }
}