import React from 'react';
import { View } from 'react-native';
import Login from '../components/Login';
import { login } from '../services/authenticationService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation, route }) => {

  const { errorB } = route.params || {};
  
  const handleLogin = (email, password) => {
  
    // Navigate to the home page after successful login
    login(email, password).then((res) => {
      if(res.ok) {
        res.json().then((body) => {
          AsyncStorage.setItem('token', body.token);
          navigation.navigate('Home');
        });
      }
      else{
        //navigation.navigate('Signup');
        navigation.navigate('Login', {errorB : true});

      }
    });
  };

  const handleSignup = () => {
    // Navigate to the signup page
    navigation.navigate('Signup');
  }; 

  return (
    <View>
      <Login handleLogin={handleLogin} handleSignup={handleSignup} errorB={errorB}/>
    </View>
  );
};

export default LoginScreen;
