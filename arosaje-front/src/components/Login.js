import React from 'react';
import { View, TextInput, Button } from 'react-native';

const Login = ({ handleLogin, handleSignup }) => {
  const [email, setUsername] = React.useState('');
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
        placeholder="Email"
        value={email}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Button title="Login" onPress={() => handleLogin(email, password)} />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default Login;
