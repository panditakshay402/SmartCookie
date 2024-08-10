import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Slider from './Slider';

const Home = ({navigation}) => {
  const onLogout = () => {
    auth()
      .signOut()
      .then(() => {
        // Alert.alert('User signed out');
        navigation.navigate('Login');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View>
      <TouchableOpacity onPress={onLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <Slider />
    </View>
  );
};

export default Home;
