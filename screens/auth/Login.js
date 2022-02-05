import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

const Login = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
