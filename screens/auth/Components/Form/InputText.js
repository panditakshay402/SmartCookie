import {View, Text, TextInput} from 'react-native'
import React from 'react'

const InputText = ({InputTextTitle}) => {
  return (
    <View>
      <Text>{InputTextTitle}</Text>
      <TextInput /> 
    </View>
  )
};

export default InputText;  
