import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';

const CheckBoxComp = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={{marginRight: 2}}
      />
      <Text style={styles.text}>I Agree with</Text>
      <TouchableOpacity>
        <Text style={styles.textOC}>  Terms and Conditions</Text>
      </TouchableOpacity>
      <Text style={styles.text}> and</Text>
      <TouchableOpacity>
        <Text style={styles.textOC}>  Privacy Policy</Text> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 15,
  },
  textOC: {
    color: '#F9A602',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: 'bold',

  },
});

export default CheckBoxComp;
