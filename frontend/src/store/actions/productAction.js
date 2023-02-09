import { productConstants } from "../constants/productContants";
import axios from "axios";


export const getAllProducts = ()=>{
    return async dispatch => {
        dispatch({type: productConstants.PRODUCTS_GET_ALL_REQUEST});

        try{
            axios.get('http://localhost:3000/products/all').then(result=>{
                if(result.status==200){
                    dispatch({type: productConstants.PRODUCTS_GET_ALL_SUCCESS, payload: result.data.products})
                }
                else{
                    dispatch({type: productConstants.PRODUCTS_GET_ALL_FAILURE, error: result.data.error})
                }
            })
            
        }
        catch(e){
            dispatch({type: productConstants.PRODUCTS_GET_ALL_FAILURE, error: e})
        }
    }
}
