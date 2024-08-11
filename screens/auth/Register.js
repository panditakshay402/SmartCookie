import {View, Text, Image, TouchableOpacity, Alert, Modal, ScrollView} from 'react-native';
import React, {useState} from 'react';
import InputText from './Components/Form/InputText';
import CheckBoxComp from './Components/Form/CheckBox';
import SubmitButton from './Components/SubmitButton';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleRegister = () => {
    if (!email || !password || !name) {
      Alert.alert('Error', 'All details are required');
      return;
    } else if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    } else if (
      !email.includes('@') ||
      !email.includes('.') ||
      !email.includes('com')
    ) {
      Alert.alert('Error', 'Email is not valid');
      return;
    } else if (!isSelected) {
      Alert.alert('Error', 'Please agree to the terms and conditions');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        Alert.alert('User account created');
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else {
          console.log('Error', error.message);
        }
      });
  };

  const showModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  return (
    <View>
      <Text style={styles.title}>Create your new account.</Text>

      <Text style={styles.description}>
        Create an account to start looking for the food you like
      </Text>

      <InputText
        InputTextTitle={'Email Address'}
        value={email}
        setValue={setEmail}
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <InputText InputTextTitle={'User Name'} value={name} setValue={setName} />
      <InputText
        InputTextTitle={'Password'}
        value={password}
        setValue={setPassword}
        autoCompleteType="password"
        secureTextEntry={true}
      />
      <CheckBoxComp isSelected={isSelected} setSelection={setSelection} showModal={showModal} />
      <SubmitButton
        handleSubmit={handleRegister}
        btnTitle={'Register'}
        loading={false}
        style={styles.button}
      />
      <View style={{alignItems: 'center', margin: 5}}>
        <Text style={styles.text}>.......... Or Sign in with ..........</Text>
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
          <Text
            style={styles.textOC}
            onPress={() => navigation.navigate('Login')}>
            {' '}
            Sign in
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <ScrollView style={styles.modalScroll}>
            <Text style={styles.modalText}>{modalContent}</Text>
          </ScrollView>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    marginTop: '10%',
    color: '#000',
  },
  description: {
    fontSize: 18,
    marginBottom: 22,
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
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalScroll: {
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    color: '#000',
  },
  modalCloseButton: {
    backgroundColor: '#F9A602',
    padding: 10,
    borderRadius: 10,
  },
  modalCloseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Register;
