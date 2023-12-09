import { POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionType";
import axios from "axios";


export const postBmidata= (newUser,id)=> (dispatch)=>{
    return new Promise((resolve,reject)=>{
    dispatch({type:POST_DATA_REQUEST})
    axios.patch(`https://bmi-calculator-backend.onrender.com/users/${id}`, newUser)
    .then((res)=> {
     console.log(res.data);
     dispatch({type:POST_DATA_SUCCESS, payload:res.data})})
     resolve(true)
    .catch((err)=> dispatch({type:POST_DATA_FAILURE, payload:err.data}))
 })
 }