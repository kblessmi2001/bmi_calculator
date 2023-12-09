import { EDIT_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionType";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
    users: [],
    token: null
}


export const authReducer = (state = initialState, {type,payload}) => {

    switch(type){
         
        case LOGIN_USER_REQUEST || REGISTER_USER_REQUEST:
            return {
              ...state,
                isLoading: true
            }

        
        case REGISTER_USER_FAILURE || LOGIN_USER_FAILURE:
            return{
                ...state,
                isLoading: false,
                error:true,
            }
            
       case REGISTER_USER_SUCCESS:
        return {
            ...state,
            isLoading: false,
            error:false,
        }

       case LOGIN_USER_SUCCESS:
        return {
         ...state,
            isLoading: false,
            error:false,
            isAuthenticated: true,
            token: payload.token,
            users: payload.users
        }

        case EDIT_USER_SUCCESS:
            return {
                ...state, isLoading: false, error:false,  users: payload
            }

        default:
            return state;
    }

}