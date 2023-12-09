import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import BMICalculator from '../Pages/BMICalculator'
import ProfilePage from '../Pages/ProfilePage';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import BMIHistory from '../Pages/BMIHistory'

const AllRoutes = () => {


    
  return (
    <Routes>
        <Route path='/' element={<BMICalculator />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/history'  element={<BMIHistory/>}/>
       <Route path='/*' element={
         <Alert status='error'>
        <AlertIcon />
        <AlertTitle>404 error No Page Found!</AlertTitle>
        <AlertDescription>Check url once</AlertDescription>
         </Alert>
        } />

    </Routes>
  )
}

export default AllRoutes