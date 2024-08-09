import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const SubmitButton = ({handleSubmit, btnTitle, loading}) => {
  return (
    <TouchableOpacity
      style={styles.submitBtn}
      onPress={handleSubmit}
      disabled={loading}>
      <Text style={styles.btnText}>{loading ? 'please wait' : btnTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    height: 40,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 35,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default SubmitButton;
