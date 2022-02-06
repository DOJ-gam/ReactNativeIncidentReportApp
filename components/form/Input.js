import {StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const Input = ({placeholder}) => {
  const [text, setText] = useState('');
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={newText => setText(newText)}
      defaultValue={text}
      keyboardType="default"
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: '100%',
    color: '#222',
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});
