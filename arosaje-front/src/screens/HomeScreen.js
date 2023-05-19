import React from 'react';
import { View } from 'react-native';
import HomePage from '../components/HomePage';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <HomePage navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
