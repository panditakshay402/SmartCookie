import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import InputText from './Components/Form/InputText';
import CheckBoxComp from './Components/Form/CheckBox';
import SubmitButton from './Components/SubmitButton';
import {StyleSheet} from 'react-native';

const Register = () => {
  return (
    <View>
      <Text style={styles.title}>Create your new account.</Text>

      <Text style={styles.description}>
        Create an account to start looking for the food you like{' '}
      </Text>
      <InputText InputTextTitle={'Email Address'} />
      <InputText InputTextTitle={'User Name'} />
      <InputText InputTextTitle={'Password'} />
      <CheckBoxComp />
      <SubmitButton
        handleSubmit={() => {}}
        btnTitle={'Register'}
        loading={false}
      />
      <Text style={styles.description}>
        .......... or Sign in with ..........
      </Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/google.png')}
      />
      <Text>Have an account?<TouchableOpacity/> Sign in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default Register;
