import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TimelineElement = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TimelineElement;
