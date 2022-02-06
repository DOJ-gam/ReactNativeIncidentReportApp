import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({text, bg, color, icon}) => {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: bg}]}>
      {/* {icon  &&} */}
      <Text style={{color: color, fontSize: 20, fontWeight: 'bold'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
    borderRadius: 10,
    elevation: 90,
  },
});
