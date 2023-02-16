import { userConstants } from "../constants/userCostants";
import axios from '../../helpers/axiosInstance'


export const registerUser = (user)=>{
    return async dispatch =>{
        dispatch({type: userConstants.REGISTER_USER_REQUEST})
        try{
            const result = await axios.post('/signUp', user)
            if(result.status==200){
                dispatch({type: userConstants.REGISTER_USER_SUCCESS, payload: result.data.user, 
                    token: result.data.token})
            }
            else{
                dispatch({type: userConstants.REGISTER_USER_FAILURE, error: result.data.error})
            }
        }
        catch(e){
            dispatch({type: userConstants.REGISTER_USER_FAILURE, error: e})
        }
    }
}

export const signIn = (user)=>{
    return async dispatch =>{
        dispatch({type: userConstants.SIGNIN_USER_REQUEST})
        try{
            const result = await axios.post('/signIn', user)
            if(result.status==200){
                dispatch({type: userConstants.SIGNIN_USER_SUCCESS, payload: result.data.user, 
                    token: result.data.token})
            }
            else{
                dispatch({type: userConstants.SIGNIN_USER_FAILURE, error: result.data.error})
            }
        }
        catch(e){
            dispatch({type: userConstants.SIGNIN_USER_FAILURE, error: e})
        }
    }
}

export const isUserActive = (token)=>{
    return async dispatch=>{
        dispatch({type: userConstants.ACTIVE_USER_REQUEST})
        try{
            const result = await axios.get(`/user-active/${token}`)
            console.log(result)
            if(result.status == 200){
                dispatch({type: userConstants.ACTIVE_USER_SUCCESS, payload: localStorage.getItem('user'), 
                    token})
            }
            else{
                dispatch({type: userConstants.ACTIVE_USER_FAILURE, error: result.data.error})
            }
        }
        catch(e){
            dispatch({type: userConstants.ACTIVE_USER_FAILURE, error: e})
        }
    }
}
