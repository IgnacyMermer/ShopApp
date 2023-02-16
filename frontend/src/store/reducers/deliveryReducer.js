import { deliveryConstants } from "../constants/deliveryConstants";


const initialState={
    deliveryOptions: [],
    loading: false,
    error: null
}

const deliveryReducer=(state=initialState, action)=>{
    switch(action.type){
        case deliveryConstants.GET_ALL_DELIVERY_REQUEST:
            state={
                ...state,
                loading: true,
                error: null
            }
            break;
        case deliveryConstants.GET_ALL_DELIVERY_SUCCESS:
            state={
                ...state,
                deliveryOptions: action.payload,
                loading: false,
                error: null
            }
            break;
        case deliveryConstants.GET_ALL_DELIVERY_FAILURE:
            state={
                ...state,
                loading: false,
                error: action.error
            }
            break;
    }
    return state
}

export default deliveryReducer
