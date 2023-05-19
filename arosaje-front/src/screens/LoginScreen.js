import React from 'react';
import { View } from 'react-native';
import Login from '../components/Login';

const LoginScreen = ({ navigation }) => {
  const handleLogin = (username, password) => {
    // Handle login authentication (mock implementation)
    console.log('Logging in', username, password);
    // Navigate to the home page after successful login
    navigation.navigate('Home');
  };

  const handleSignup = () => {
    // Navigate to the signup page
    navigation.navigate('Signup');
  };

  return (
    <View>
      <Login handleLogin={handleLogin} handleSignup={handleSignup} />
    </View>
  );
};

export default LoginScreen;
