import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import InputText from './Components/Form/InputText';
import SubmitButton from './Components/SubmitButton';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    // Validate email and password
    if (!email || !password) {
      Alert.alert('Please fill all the fields');
      setLoading(false);
      return;
    }

    // Firebase authentication
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setLoading(false);
        Alert.alert('User logged in');
        console.log('User data:', response);
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/user-not-found') {
          Alert.alert('User not found');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('Incorrect password');
        } else {
          Alert.alert('Login failed', error.message);
        }
        console.log(error);
      });
  };

  return (
    <View>
      <Text style={styles.title}>Login to your account.</Text>

      <Text style={styles.description}>Please sign in to your account</Text>
      <InputText
        InputTextTitle={'Email Address'}
        keyboardType={'email-address'}
        autoComplete={'email'}
        value={email}
        setValue={setEmail}
      />
      <InputText
        InputTextTitle={'Password'}
        secureTextEntry={true}
        autoComplete={'password'}
        value={password}
        setValue={setPassword}
      />

      <TouchableOpacity style={{alignItems: 'flex-end', margin: 10}}>
        <Text style={styles.textOC}>Forgot Password?</Text>
      </TouchableOpacity>
      <SubmitButton
        handleSubmit={handleSubmit}
        btnTitle={'Login'}
        loading={loading}
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
        <Text style={styles.text}>Don't have an account?</Text>
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
