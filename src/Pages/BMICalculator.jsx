import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { postBmidata } from '../Redux/Data/action';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userData = useSelector((store)=> store.authReducer.users);
  const dispatch = useDispatch()

  console.log(userData);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height to meters
    const bmi = weightInKg / (heightInM * heightInM);

    // const newBMI = {
    //   id: Math.random().toString(),
    //   bmi: bmi.toFixed(2),
    //   status:
    //     bmi < 18.5
    //       ? 'Underweight'
    //       : bmi < 24.9
    //       ? 'Healthy weight'
    //       : 'Overweight',
    // };


    // const newData = {
    //   id: userData.id,

    //   bmi: [...userData.bmi, newBMI],
    // };

    // console.log(newData);


    //  dispatch(postBmidata(newData, userData.id));


    setBmiResult(bmi.toFixed(2));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return ( 
    <Box w={{base:"80%", sm:"80%", lg:"50%"}} h={{base:"330px", sm:"300px",  lg:"300px"}} 
     m={"auto"} p={10} textAlign={"center"} border={"1px"} mt={10} borderColor={"grey"} borderRadius={"20px"}>
      <Heading mb={4} textAlign="center" color={"navy"}>
        BMI Calculator
      </Heading>

      <Box mb={4}>
        <Input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </Box>

      <Box mb={4}>
        <Input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </Box>

      <Button backgroundColor={"#7ED7C1"} onClick={calculateBMI} mb={4} width="70%">
        Calculate BMI
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>BMI Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {bmiResult && (
              <Text color={bmiResult < 18.5 ? 'orange' : bmiResult < 24.9 ? 'green' : 'red'}>
                Your BMI is {bmiResult}.{' '}
                {bmiResult < 18.5
                  ? 'You are underweight.'
                  : bmiResult < 24.9
                  ? 'You have a healthy weight.'
                  : 'You are overweight.'}
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button backgroundColor={"#7ED7C1"} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BMICalculator;
