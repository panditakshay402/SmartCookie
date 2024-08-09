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
      <View style={{alignItems: 'center',margin:5}}>
        <Text style={styles.text}>..........   Or Sign in with   ..........</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={require('../../assets/images/google.png')}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.text}>Have an account?</Text>
        <TouchableOpacity style={styles.textOC}>
          <Text style={styles.textOC}> Sign in</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15,
    marginTop: "15%",
    color: '#000',
  },
  description: {
    fontSize: 18,
    marginBottom: 28,
    marginLeft: 15,
    color: '#000',
  },

  image: {
    width: 40,
    height: 40,
    marginBottom: 10,
    justifyContent: 'center',
  },

text: {
  color: '#000',
},
  textOC: {
    color: '#F9A602',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default Register;
