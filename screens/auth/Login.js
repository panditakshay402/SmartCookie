import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputText from './Components/Form/InputText';
import SubmitButton from './Components/SubmitButton';
import auth from '@react-native-firebase/auth';
import Home from '../Home';
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import {WEBCLIENTID} from '../../Constant/constant';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [userInfo, setUserInfo] = useState(null);

  console.log('user:-', user);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEBCLIENTID,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info :-', userInfo);
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };

  const resetPassword = async () => {
    if (email) {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert('Password reset email sent!');
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log('Error:', errorMessage);
        });
    } else {
      Alert.alert('Please enter email address');
    }
  };

  const onAuthStateSave = user => {
    setUser(user);
    if (user) {
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateSave);
    return subscriber;
  }, []);

  const handleSubmit = () => {
    setLoading(true);

    if (!email || !password) {
      Alert.alert('Please fill all the fields');
      setLoading(false);
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setLoading(false);
        console.log('User data:', response);
        navigation.navigate('Home');
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/user-not-found') {
          Alert.alert('User not found');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('Incorrect password');
        } else {
          console.log('Login failed', error.message);
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

      <TouchableOpacity
        style={{alignItems: 'flex-end', margin: 10}}
        onPress={resetPassword}>
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
        <TouchableOpacity onPress={signIn}>
          <Image
            style={styles.image}
            source={require('../../assets/images/google.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity style={styles.textOC}>
          <Text
            style={styles.textOC}
            onPress={() => navigation.navigate('Register')}>
             Register
          </Text>
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
