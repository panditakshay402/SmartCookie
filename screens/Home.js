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
        navigation.navigate('Login');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <ImageBackground
      source={three}
      style={styles.background}>
    <View>
      <TouchableOpacity onPress={onLogout} style={styles.onLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <Slider />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  onLogout: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'orange',
    position: 'absolute',
    borderRadius: 15,
    padding: 3,
    width: 80,
    justifyContent: 'center',
    margin: 10,
    marginLeft: "75%",
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
   

  },
});

export default Home;
