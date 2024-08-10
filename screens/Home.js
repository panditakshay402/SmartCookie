import {View, Text, TouchableOpacity, Alert,StyleSheet,ImageBackground,} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Slider from './Slider';
import three from './three.jpg';

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
    <ImageBackground
      source={three} // Replace with your image path
      style={styles.background}>
    <View>
      <TouchableOpacity onPress={onLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <Slider />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' if you want to stretch the image to fit the screen
  },
});

export default Home;
