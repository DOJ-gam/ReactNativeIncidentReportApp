import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Input from '../../components/form/Input';
// import {useNavigation} from '@react-navigation/native';

const Signup = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <Text>Signup</Text>
      <Button title="Sigin" onPress={() => navigation.navigate('Login')} />
      <Input placeholder="hii" />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
