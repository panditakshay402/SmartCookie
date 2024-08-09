import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import InputText from './Components/Form/InputText';
import CheckBoxComp from './Components/Form/CheckBox';
import SubmitButton from './Components/SubmitButton';

const Login = () => {
  return (
    <View>
      <Text style={styles.title}>Login to your account.</Text>

      <Text style={styles.description}>Please sign in to your account </Text>
      <InputText InputTextTitle={'Email Address'} />
      <InputText InputTextTitle={'Password'} />

      <TouchableOpacity style={{alignItems: 'flex-end', margin: 10}}>
        <Text style={styles.textOC}>Forgot Password?</Text>
      </TouchableOpacity>
      <SubmitButton
        handleSubmit={() => {}}
        btnTitle={'Login'}
        loading={false}
      />
      <View style={{alignItems: 'center', margin: 10}}>
        <Text style={styles.text}>.......... Or Sign in with ..........</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={require('../../assets/images/google.png')}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.text}> Don't have an account?</Text>
        <TouchableOpacity style={styles.textOC}>
          <Text style={styles.textOC}> Register</Text>
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
    fontSize: 41,
    fontWeight: 'bold',
    marginBottom: 2,
    marginLeft: 15,
    marginTop: '15%',
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
    fontWeight: 'bold',
  },
});

export default Login;
