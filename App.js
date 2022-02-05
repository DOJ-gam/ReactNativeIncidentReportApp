import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Main from './navigation/Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <Main /> */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>hhhh</Text>
    // </View>
  );
};

export default App;
