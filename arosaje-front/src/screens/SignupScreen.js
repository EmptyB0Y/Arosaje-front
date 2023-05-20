import React from 'react';
import { View } from 'react-native';
import Signup from '../components/Signup';
import { signup } from '../services/authenticationService';

const SignupScreen = ({ navigation }) => {
  const handleSignup = (email, password) => {

    // Navigate to the home page after successful signup
    login(email, password).then((res) => {
      if(res.ok) {
        res.json().then((body) => {
          navigation.navigate('Login');
        });
      }
    });
  };

  return (
    <View>
      <Signup handleSignup={handleSignup} />
    </View>
  );
};

export default SignupScreen;
