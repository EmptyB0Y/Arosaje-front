import React from 'react';
import { View, TextInput, Button } from 'react-native';

const Signup = ({ handleSignup }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Button title="Signup" onPress={() => handleSignup(username, password)} />
    </View>
  );
};

export default Signup;
