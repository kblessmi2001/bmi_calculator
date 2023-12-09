import { GET_DATA_FAILURE, GET_DATA_REQUEST, POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    error: null,
    data:[],
}


export const dataReducer = (state = initialState, {type,payload}) => {

    switch(type){ 
        case GET_DATA_REQUEST || POST_DATA_REQUEST:
            return {
              ...state,
                isLoading: true
            }
        case GET_DATA_FAILURE || POST_DATA_FAILURE:
            return{
                ...state,
                isLoading: false,
                error:true,
            }

        case POST_DATA_SUCCESS:
            return {
                ...state, isLoading:false, error:false
            }    
            
        default:
            return state;
    }

}