import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <View style={{display: 'flex', width: '100%'}}>
      <Text style={{fontWeight: '900', fontSize: 20}}>A-rosa'je</Text>

      <NavigationContainer flexDirection='column'>
        <Stack.Navigator initialRouteName="Login" style={{ width : 100}}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;
