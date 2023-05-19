import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('UserProfile')} />
    </View>
  );
};

export default HomePage;
