import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const users = useSelector((store)=> store.authReducer.users);
    console.log(users);
    const token = localStorage.getItem('token');
    const [flag, setFlag] = useState(false)
    console.log(token);

    const handleLogout = () => {
        localStorage.clear();
        setFlag(true);
        alert('Logged out Successfully');
      };


  useEffect(()=>{

  },[flag])    

  return (
<Box
  display={"flex"}
  h={12}
  alignItems="center"
  justifyContent="space-around"
  background="rgb(34,193,195)"
  background="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
>
        <Box   _hover={{color:"#090979"}} >
        <Link style={{textDecoration:"none"}} to={"/"}> <b>Home</b> </Link>
        </Box>
        <Box  _hover={{color:"#090979"}} >
        <Link to={"/history"} > <b>BMI History</b> </Link>
        </Box>
        
       
        {token ? (
         
        <>  
          <Box display={{base:'none'}}>
            <Link >Hello, {users.username}</Link>
          </Box>
          <Box >
          {/* <Link to="/profile">
              <Image
                src={users.avatar}
                alt={`Profile Image of ${users.username}`}
                borderRadius="full"
                boxSize="40px"
                objectFit="cover"
                mr={2}
              />
            </Link> */}
          </Box>
          <Box  _hover={{color:"#090979"}}>
          <Link to={"/profile"}> <b>Profile</b> </Link>
           </Box>
          <Box>
            <Link > <Button  m={4}  onClick={handleLogout}> <b>Logout</b> </Button> </Link>
          </Box>
        </>
          
      ) : (
        <>
          <Box  _hover={{color:"#090979"}}>
            <Link to="/login"><b>Login</b></Link>
          </Box>
          <Box  _hover={{color:"#090979"}}>
            <Link to="/register"><b>Register</b></Link>
          </Box>
        </>
      )}  
        
    </Box>
  )
}

export default Navbar