import { bucketConstants } from "../constants/bucketConstants";


const initialState={
    products:[],
    price: 0.0,
    loading: false,
    error: null
}

const bucketReducer = (state=initialState, action)=>{
    switch(action.type){
        case bucketConstants.CLEAR_BUCKET:
            state={
                products:[],
                price: 0.0,
                loading: false,
                error: null
            }
            break;
        case bucketConstants.ADD_PRODUCT_TO_BUCKET:
            state={
                ...state,
                products: [...state.products, action.payload],
                price: state.price+action.payload.price
            }
            break;
        case bucketConstants.REMOVE_PRODUCT_FROM_BUCKET:
            state={
                ...state,
                products: state.products.filter(product=>product!=action.payload),
                price: state.price-action.payload.price
            }
            break;
        case bucketConstants.LOAD_BUCKET_REQUEST:
            state={
                ...state,
                loading: true, 
                error: null
            }
            break;
        case bucketConstants.LOAD_BUCKET_SUCCESS:
            let totalPrice = 0.0
            for (const product in action.payload){
                totalPrice+=product.price
            }
            state={
                ...state,
                products: action.payload,
                price: totalPrice,
                loading: false,
                error: null
            }
            break;
        case bucketConstants.LOAD_BUCKET_FAILURE:
            state={
                ...state,
                loading: false,
                error: action.error
            }
            break;
    }
    return state
}

export default bucketReducer
