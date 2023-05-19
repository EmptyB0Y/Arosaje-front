import React from 'react';
import { View } from 'react-native';
import Signup from '../components/Signup';

const SignupScreen = ({ navigation }) => {
  const handleSignup = (username, password) => {
    // Handle signup logic (mock implementation)
    console.log('Signing up', username, password);
    // Navigate to the home page after successful signup
    navigation.navigate('Home');
  };

  return (
    <View>
      <Signup handleSignup={handleSignup} />
    </View>
  );
};

export default SignupScreen;
