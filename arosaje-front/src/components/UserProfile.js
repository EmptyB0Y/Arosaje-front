import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const UserProfile = ({ navigation }) => {
  const handleProfilePicturePress = () => {
    // Handle profile picture change (mock implementation)
    console.log('Change profile picture');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleProfilePicturePress}>
        <Image source={require('../../assets/images/defaultProfilePicture.png')} />
      </TouchableOpacity>
      <Text>User Profile</Text>
    </View>
  );
};

export default UserProfile;
