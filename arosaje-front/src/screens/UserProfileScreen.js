import React from 'react';
import { View } from 'react-native';
import UserProfile from '../components/UserProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfileScreen = () => {
  if(AsyncStorage.getItem('token')){
    return (
      <View>
        <UserProfile />
      </View>
    );
  }

  navigation.navigate('Login');
};

export default UserProfileScreen;
