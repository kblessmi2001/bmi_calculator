import axios from "axios"
import { POST_DATA_REQUEST } from "../Data/actionType"
import { EDIT_USER_FAILURE, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionType"
import { useNavigate } from "react-router-dom"




export const postUserData= (newUser)=> (dispatch)=>{

   return new Promise((resolve,reject)=>{

  
   dispatch({type:REGISTER_USER_REQUEST})
   axios.post(`https://bmi-calculator-backend.onrender.com/users`, newUser)
   .then((res)=> {
    console.log(res.data);
    dispatch({type:REGISTER_USER_SUCCESS, payload:res.data})})
    resolve(true)
   .catch((err)=> dispatch({type:REGISTER_USER_FAILURE, payload:err.data}))
})
}

export const loginUserData= (newUser)=> (dispatch)=>{
   return new Promise((resolve,reject)=>{

    dispatch({type:LOGIN_USER_REQUEST})
    axios.get(`https://bmi-calculator-backend.onrender.com/users`, 
    {params:{email:newUser.email, password:newUser.password}})
    .then((res)=> {
     console.log(res.data[0]);
     if(res.data[0]){
      localStorage.setItem("token",Math.random())
      dispatch({type:LOGIN_USER_SUCCESS,payload:{users:res.data[0], token:localStorage.getItem("token")}});
      resolve(true)
     }
     else{
      reject(true)
     }
     
     })
    .catch((err)=> {
     
      dispatch({type:LOGIN_USER_FAILURE, payload:err.data})
    })
   })
 }

 export const logoutUser=()=> (dispatch)=>{
    localStorage.removeItem("token")
    dispatch({type:LOGIN_USER_SUCCESS, payload:{users:[], token:null}})
 }

 export const editUserData= (editedUser,id)=> (dispatch)=>{
   return new Promise((resolve,reject)=>{
   dispatch({type:EDIT_USER_REQUEST})
   axios.patch(`https://bmi-calculator-backend.onrender.com/users/${id}`,editedUser )
   .then((res)=> {
    console.log(res.data);
    dispatch({type:EDIT_USER_SUCCESS, payload:editedUser});
    resolve(true)
    })
   .catch((err)=> dispatch({type:EDIT_USER_FAILURE, payload:err.data}))
    })
}


 
 
