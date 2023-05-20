import React from 'react';
import { View, TextInput, Button } from 'react-native';

const Signup = ({ handleSignup }) => {
  const [email, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Button title="Signup" onPress={() => handleSignup(email, password)} />
    </View>
  );
};

export default Signup;
