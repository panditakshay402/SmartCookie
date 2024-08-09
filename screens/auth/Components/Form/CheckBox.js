import {View,Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';

const CheckBoxComp = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={{ marginRight: 2 }}
      />
      <Text>I Agree with
      <TouchableOpacity/>  Terms and Conditions <Text>and</Text> Privacy Policy

      </Text>
    </View>
  );
};

export default CheckBoxComp;