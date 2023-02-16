import { productConstants } from "../constants/productContants";


const initialState = {
    products: [],
    productsInCategory: [],
    loading: false,
    error: null
}

const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case productConstants.PRODUCTS_GET_ALL_REQUEST:
            state={
                ...state,
                loading: true
            }
            break;
        case productConstants.PRODUCTS_GET_ALL_SUCCESS:
            state={
                ...state,
                loading: false,
                products: action.payload
            }
            break;
        case productConstants.PRODUCTS_GET_ALL_FAILURE:
            state={
                ...state,
                products: [],
                loading: false,
                error: action.error
            }
            break;
        case productConstants.PRODUCTS_GET_IN_CATEGORY_REQUEST:
            state={
                ...state,
                loading: true,
                error: null
            }
            break;
        case productConstants.PRODUCTS_GET_IN_CATEGORY_SUCCESS:
            state={
                ...state,
                loading: false,
                productsInCategory: action.payload,
            }
            break;
        case productConstants.PRODUCTS_GET_IN_CATEGORY_FAILURE:
            state={
                ...state,
                loading: false,
                error: action.error
            }
            break;
    }

    return state

}


export default productReducer