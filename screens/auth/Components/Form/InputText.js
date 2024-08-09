import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const InputText = ({InputTextTitle}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{InputTextTitle}</Text>
    <TextInput style={styles.textinput} placeholder= {InputTextTitle}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 12,
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
    marginTop: 9,
  },
});

export default InputText;
