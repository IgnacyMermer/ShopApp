import { basketConstants } from "../constants/basketConstants";


const initialState={
    products:[],
    price: 0.0,
    loading: false,
    error: null
}

const basketReducer = (state=initialState, action)=>{
    switch(action.type){
        case basketConstants.CLEAR_BASKET:
            state={
                products:[],
                price: 0.0,
                loading: false,
                error: null
            }
            break;
        case basketConstants.ADD_PRODUCT_TO_BASKET:
            let isInBucket = false
            state.products.forEach(product=>{
                if(product._id == action.payload._id){
                    product.quantity = product.quantity + 1
                    isInBucket = true
                }
            })
            const product = {
                _id: action.payload._id,
                name: action.payload.name,
                price: action.payload.price,
                category: action.payload.category,
                quantity: 1
            }
            if(!isInBucket){
                state={
                    ...state,
                    products: [...state.products, product],
                    price: state.price+action.payload.price
                }
            }
            else{
                state={
                    ...state,
                    price: state.price+action.payload.price
                }
            }
            break;
        case basketConstants.REMOVE_PRODUCT_FROM_BASKET:
            state={
                ...state,
                products: state.products.filter(product=>product!=action.payload),
                price: state.price-action.payload.price
            }
            break;
        case basketConstants.LOAD_BASKET_REQUEST:
            state={
                ...state,
                loading: true, 
                error: null
            }
            break;
        case basketConstants.LOAD_BASKET_SUCCESS:
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
        case basketConstants.LOAD_BASKET_FAILURE:
            state={
                ...state,
                loading: false,
                error: action.error
            }
            break;
        case basketConstants.CHANGE_PRODUCT_QUANTITY:
            state.products.forEach(product=>{
                if(product._id == action.product._id){
                    product.quantity = action.payload
                }
            })
            break;
    }
    return state
}

export default basketReducer
