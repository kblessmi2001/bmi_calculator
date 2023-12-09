import React, { useState } from 'react';
import {
    FormLabel,
    Input,
    Button,
    Heading,
    Box,
    Image,
  } from '@chakra-ui/react';
  import axios from 'axios';
  import { useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { postUserData } from '../Redux/Auth/action';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [bmi,setBMI] = useState([]);

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const toast = useToast()

    const handleSubmit = () => {
      const newUser = {
        username: username,
        avatar: avatar,
        email: email,
        password: password,
        bmi:bmi
      }

      console.log(newUser);

      dispatch(postUserData(newUser)).then(()=>{
        toast({
          title: 'Signup Success',
          description: "New user added successfully",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
       
      })

      navigate("/login")

       setUsername("")
       setAvatar("")
       setEmail("")
       setPassword("")
       setBMI([])
     


      
    //   axios.post(`https://bmi-calculator-backend.onrender.com/users`, newUser)
    //   .then((res) => console.log(res.data)) 
    //   .catch((err) => console.log(err));
    }  


 



  return (
    
       <Box w={{base:"80%",sm:"80%", md:"50%", lg:"35%" }} m={"auto"} mt={"8"} border='1px' borderColor='gray.400'
       p={5} borderRadius={10} >
          <Image w={"30%"} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/botkxkgeprx40g5rnrku.png"
         alt="logo" />
       <Heading mb={2} size={"md"}> Register with us, </Heading>
       <FormLabel> Username</FormLabel>
       <Input name='username' type='text' value={username} w={"90%"}  onChange={(e)=>{setUsername(e.target.value)}}/> 
       <FormLabel> Avatar</FormLabel>
       <Input name='avatr' type='text' value={avatar} w={"90%"}  onChange={(e)=>{setAvatar(e.target.value)}}/> 
       <FormLabel> Email</FormLabel>
       <Input name='email' type='email' value={email} w={"90%"} onChange={(e)=>{setEmail(e.target.value)}}/>
       <FormLabel> Password</FormLabel>
       <Input name='password' type='password' value={password} w={"90%"}  onChange={(e)=>{setPassword(e.target.value)}}/>
       <br />
       <Button w={"90%"} backgroundColor={"#7ED7C1"} textColor={"white"}
        mt={4} onClick={handleSubmit}  background="rgb(34,193,195)" _hover={{color:"black"}}
        background="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"> Submit </Button>
       </Box>
  )
}

export default Signup