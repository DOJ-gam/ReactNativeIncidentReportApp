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

const Signup = ({navigation}) => {
  // const navigation = useNavigation();
  const [title, setTitle] = useState('SignUp!');

  return (
    <View style={styles.container}>
      <FormContainer title={title} BgImage={BgImage}>
        <Text style={{fontSize: 15, color: '#fff'}}>
          Looks like you dont have an account.
        </Text>
        <Text style={{fontSize: 15, color: '#fff'}}>
          Lets Create a new account for
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          urname@gmail.com
        </Text>
        <Input placeholder="Name" />
        <Input placeholder="Password" />

        <Text style={{color: 'white'}}>
          By selecting Agree and continue below,
        </Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 15,
          }}>
          <Text style={{color: 'white', marginRight: 4}}>I agree to</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{fontSize: 17, color: 'tomato'}}>
              Terms of Service and Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>

        <Button text={'Agree and continue'} bg={'tomato'} color={'#fff'} />
      </FormContainer>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
