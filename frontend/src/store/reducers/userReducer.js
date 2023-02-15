import { userConstants } from "../constants/userCostants";


const initialState={
    user: null,
    loggedIn: false,
    loading: false,
    error: null,
    token: null
}


const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case userConstants.REGISTER_USER_REQUEST:
            state={
                ...state,
                loading: true,
                error: null
            }
            break;
        case userConstants.REGISTER_USER_SUCCESS:
            state={
                ...state,
                user: action.payload,
                loggedIn: true,
                loading: false,
                error: null,
                token: action.token
            }
            break;
        case userConstants.REGISTER_USER_FAILURE:
            state={
                ...state,
                loading: false,
                error: action.error
            }
            break;
        case userConstants.SIGNIN_USER_REQUEST:
            state={
                ...state,
                loading: true,
                error: null
            }
            break;
        case userConstants.SIGNIN_USER_SUCCESS:
            state={
                ...state,
                user: action.payload,
                loggedIn: true,
                loading: false,
                error: null,
                token: action.token
            }
            break;
        case userConstants.SIGNIN_USER_FAILURE:
            state={
                ...state,
                error: action.error,
                loading: false
            }
            break;
    }
    return state
}


export default userReducer
