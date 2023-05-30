import React from 'react';
import { View } from 'react-native';
import HomePage from '../components/HomePage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {

  if(AsyncStorage.getItem('token')){
    return (
      <View>
        <HomePage navigation={navigation} />
      </View>
    );
  }

  navigation.navigate('Login'); 
};

export default HomeScreen;
