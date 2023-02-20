import { productConstants } from "../constants/productContants";
import axios from '../../helpers/axiosInstance'


export const getAllProducts = ()=>{
    return async dispatch => {
        dispatch({type: productConstants.PRODUCTS_GET_ALL_REQUEST});

        try{
            axios.get('/products/all').then(result=>{
                if(result.status==200){
                    console.log(result)
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

export const getProductDetails = (id)=>{
    return async dispatch=>{
        dispatch({type: productConstants.PRODUCTS_GET_DETAILS_ALL_REQUEST})

        try{
            axios.get(`/products/product-details/${id}`).then(result=>{
                if(result.status==200){
                    dispatch({type: productConstants.PRODUCTS_GET_DETAILS_ALL_SUCCESS, payload: result.data.product})
                }
                else{
                    dispatch({type: productConstants.PRODUCTS_GET_DETAILS_ALL_FAILURE, error: result.data.error})
                }
            })
        }
        catch(e){
            dispatch({type: productConstants.PRODUCTS_GET_DETAILS_ALL_FAILURE, error: e})
        }
    }
}

export const getProductsInCategory = (categoryId)=>{
    return async dispatch=>{
        dispatch({type: productConstants.PRODUCTS_GET_IN_CATEGORY_REQUEST})
        try{
            axios.get(`/products/category/${categoryId}`).then(result=>{
                if(result.status==200){
                    dispatch({type: productConstants.PRODUCTS_GET_IN_CATEGORY_SUCCESS, payload: result.data.products})
                }
                else{
                    dispatch({type: productConstants.PRODUCTS_GET_IN_CATEGORY_FAILURE, error: result.data.error})
                }
            })
        }
        catch(e){
            dispatch({type: productConstants.PRODUCTS_GET_IN_CATEGORY_FAILURE, error: e})
        }
    }
}
