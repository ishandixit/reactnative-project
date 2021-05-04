import React from 'react';
import { View, Text,TextInput,Button } from 'react-native';

const PDP = () => {
  return (
    <View>
      <Text>PDP Screen</Text>
      <TextInput >Username</TextInput>
      <TextInput >Password</TextInput>
      <Button>Login</Button>
    </View>
  );
}

export default PDP;
