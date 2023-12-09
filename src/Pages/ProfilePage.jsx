import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { editUserData } from '../Redux/Auth/action';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const ProfilePage = () => {


  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = useSelector((store) => store.authReducer.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (users) {
      setUsername(users.username || '');
      setAvatar(users.avatar || '');
      setEmail(users.email || '');
      setPassword(users.password || '');
    }
  }, [users]);




 console.log(users)

  const handleEdit = () => {
    const editedUser = {
      id: users.id,
      username: username,
      avatar: avatar,
      email: email,
      password: password,
      bmi:users.bmi
    };

    console.log(editedUser);



    dispatch(editUserData(editedUser,users.id)).then(()=>{
      toast({
        title: 'Account updated.',
        description: "User has been updated",
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    });
  };


  return (
    <Center h="100vh">
      <Box
        w={{ base: '80%', sm: '80%', md: '50%', lg: '75%' }}
        m={"auto"}
        mt={"70px"}
        p={5}
        borderRadius={10}
        boxShadow="lg"
      >
            <Image
             boxSize={{ base: "100px", md: "150px" }} 
             objectFit="cover"
             borderRadius="full" 
             mx="auto" 
             src={users.avatar}
             alt="logo"
             boxShadow="lg" 
             />
        <Heading mb={4} size="md">
          Edit Profile
        </Heading>
      
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
         
         
            <FormLabel>Avatar</FormLabel>
            <Input
              name="avatar"
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
         
          
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        
         
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          
          <Button
            type="submit"
            w="100%"
            backgroundColor="#7ED7C1"
            color="white"
            _hover={{ bg: '#5DAF9E' }}
            onClick={handleEdit}
          >
            Save Changes
          </Button>
        
      </Box>
    </Center>
  );
};

export default ProfilePage;
