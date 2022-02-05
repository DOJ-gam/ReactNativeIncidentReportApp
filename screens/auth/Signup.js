import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

const Signup = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <Text>Signup</Text>
      <Button title="Sigin" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
