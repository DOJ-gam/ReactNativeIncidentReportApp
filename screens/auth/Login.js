import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/form/Button';
import FormContainer from '../../components/form/FormContainer';
import Input from '../../components/form/Input';
// import {useNavigation} from '@react-navigation/native';
const BgImage = require('../../assets/images/dojbg.png');

const Login = ({navigation}) => {
  // const navigation = useNavigation();
  const [title, setTitle] = useState('Hi!');

  return (
    <View style={styles.container}>
      <FormContainer title={title} BgImage={BgImage}>
        <Input placeholder="Email" />
        <Button text={'Continue'} bg={'tomato'} color={'#fff'} />
        <Text
          style={{
            marginBottom: 15,
            fontSize: 16,
            color: '#fff',
            textAlign: 'center',
          }}>
          or
        </Text>
        <Button text="Continue with Facebook" bg="#E2F3EE" color="#333" />
        <Button text="Continue with Google" bg="#E2F3EE" color="#333" />
        <Button text="Continue with Apple" bg="#E2F3EE" color="#333" />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 15,
          }}>
          <Text style={{fontSize: 17, color: '#fff'}}>
            Dont have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{fontSize: 17, color: 'tomato'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{fontSize: 17, color: 'tomato'}}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </FormContainer>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
