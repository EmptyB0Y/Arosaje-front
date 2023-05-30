import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button color='#4c9950' title="Go to Profile" onPress={() => navigation.navigate('UserProfile')} />
    </View>
  );
};

export default HomePage;
