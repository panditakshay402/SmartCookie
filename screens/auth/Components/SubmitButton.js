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
    backgroundColor: '#FC6600',
    color: '#fff',
    padding: 10,
    height: 40,
    width: 280,
    // alignItems: 'center',
    marginHorizontal: "15%",
    marginTop: 20,
    borderRadius: 35,
    // justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default SubmitButton;
