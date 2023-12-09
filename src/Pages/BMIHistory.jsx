import React from 'react';
import { useSelector } from 'react-redux';

const BMIHistory = () => {
  const userData = useSelector((store) => store.authReducer.users);

  console.log(userData);

  return (
    <div style={styles.container}>
      {userData.bmi.length > 0 &&
        userData.bmi.map((data, index) => (
          <div key={index} style={styles.bmiContainer}>
            <h1 style={styles.heading}>BMI {index + 1}</h1>
            <p style={styles.bmiValue}>{data.bmi}</p>
            <p style={styles.status}>{data.status}</p>
          </div>
        ))}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  bmiContainer: {
    border: '1px solid grey',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
  },
  heading: {
    fontSize: '1.5rem',
    color: 'navy',
  },
  bmiValue: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  status: {
    fontSize: '1rem',
    color: 'green', 
  },
};

export default BMIHistory;
