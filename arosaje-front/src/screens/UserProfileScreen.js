import React from 'react';
import { View } from 'react-native';
import UserProfile from '../components/UserProfile';

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
