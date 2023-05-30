import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Login = ({ handleLogin, handleSignup, errorB }) => {
  const [email, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(<></>);
  const [change, setChange] = React.useState(false);
  const handleUsernameChange = (text) => {
    setUsername(text);
  };  

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  if(errorB && !change){
    console.log("change");
    setError(<Text style={{width: 100, height: 20,backgroundColor:'red', color: 'white', borderRadius: 5, textAlign: 'center'}}>Login failed</Text>);
    setChange(true);
  }
  console.log("test : "+ errorB);

  return (
    <View>
      <View style={{marginLeft: '2%'}}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={handleUsernameChange}
          style={{backgroundColor: 'white', width:'50%', padding: '5px'}}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
          style={{backgroundColor: 'white', width: '50%', borderColor:'black', padding: '5px'}}
        />
        <View style={{ width: 200, height: 90, justifyContent: 'center'}}>{error}</View>
      </View>
      <Button color='#4c9950' title="Login" onPress={() => handleLogin(email, password)} />
      <Button color='#4c9950' title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default Login;
