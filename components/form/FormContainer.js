import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
// import {BlurView} from '@react-native-community/blur';

const {height, width} = Dimensions.get('window');
const FormContainer = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={props.BgImage}
        resizeMode="cover"
        style={styles.Bg}>
        <Text style={styles.title}>{props.title}</Text>
      </ImageBackground>

      <ImageBackground
        source={props.BgImage}
        resizeMode="cover"
        style={styles.bottom}
        blurRadius={99}>
        <ScrollView>
          <View style={styles.formContent}>{props.children}</View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    //   #050807 #F08981 #EA867D #225738 #E2F3EE #038E47 #886C5F #9CABA8
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#050807',
    padding: 10,
  },
  title: {
    color: '#E2F3EE',
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  Bg: {
    width: '100%',
    height: height / 1.9,
    justifyContent: 'center',
    position: 'absolute',
  },
  formContent: {
    // position: 'absolute',
    // top: '55%',
    // width: width,
    // flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    elevation: 100,
    justifyContent: 'center',
    padding: 20,
    // marginBottom: 100,
    bottom: 30,
    paddingTop: 45,
  },
  inner: {
    // flex: 1,
  },
  bottom: {
    // flex: 1,
    // marginTop: 250,
    // bottom: 0,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    marginTop: '55%',
  },
});
