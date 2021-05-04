import React from 'react';
import { View, Text,TextInput,Button } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TextInput >Username</TextInput>
      <TextInput >Password</TextInput>
      <Button title="Login"/>
    </View>
  );
}

export default Home;
