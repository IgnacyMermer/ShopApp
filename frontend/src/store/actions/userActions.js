import { userConstants } from "../constants/userCostants";
import axios from "axios";


export const registerUser = (user)=>{
    return async dispatch =>{
        dispatch({type: userConstants.REGISTER_USER_REQUEST})
        try{
            console.log(user)
            const result = await axios.post('http://localhost:3000/signUp', user)
            if(result.status==200){
                dispatch({type: userConstants.REGISTER_USER_SUCCESS, payload: result.data.user})
            }
            else{
                dispatch({type: userConstants.REGISTER_USER_FAILURE, error: result.data.error})
            }
        }
        catch(e){
            console.log('allala')
            dispatch({type: userConstants.REGISTER_USER_FAILURE, error: e})
        }
    }
}