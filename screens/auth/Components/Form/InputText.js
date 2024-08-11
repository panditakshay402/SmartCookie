import {View, Text, TextInput, StyleSheet} from 'react-native';
import React,{setValue} from 'react';

const InputText = ({
  InputTextTitle,
  keyboardType,
  autoComplete,
  secureTextEntry = false,
  value,
  setValue,
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{InputTextTitle}</Text>
    <TextInput
      style={styles.textinput}
      autoCorrect={false}
      keyboardType={keyboardType}
      autoComplete={autoComplete}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={text => setValue(text)}
      placeholder={InputTextTitle}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },

  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    color: 'black',
  },
});

export default InputText;
