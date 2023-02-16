import { deliveryConstants } from "../constants/deliveryConstants";

export const getDeliveryOptions = ()=>{
    return async dispatch=>{
        dispatch({type: deliveryConstants.GET_ALL_DELIVERY_REQUEST})
        try{
            axios.get('').then(result=>{
                if(result.status==200){
                    dispatch({type: deliveryConstants.GET_ALL_DELIVERY_SUCCESS, payload: result.data.deliveries})
                }
                else{
                    dispatch({type: deliveryConstants.GET_ALL_DELIVERY_FAILURE, error: result.data.error})
                }
            })
        }
        catch(e){
            dispatch({type: deliveryConstants.GET_ALL_DELIVERY_FAILURE, error: e})
        }
    }
}