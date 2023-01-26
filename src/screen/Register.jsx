import {
  StyleSheet,
  View,
  ToastAndroid,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import icon_girl from '../assets/register/icon-register.png';
import ButtonOpacity from '../components/ButtonOpacity';
import axios from 'axios';
import {URLBE} from '@env';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const valueEmail = e => {
    setEmail(e), console.log(e);
  };
  const valuePassword = e => {
    setPassword(e), console.log(e);
  };
  const valuePhone = e => {
    setPhone(e), console.log(e);
  };

  const handleRegister = () => {
    return axios
      .post(`${URLBE}/users`, {
        email: email,
        passwords: password,
        phone_number: phone,
      })
      .then(() => {
        ToastAndroid.showWithGravity(
          'Register Success',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        ),
          navigation.push('Login');
      })
      .catch(err => {
        ToastAndroid.showWithGravity(
          err.response.data.msg,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      });
  };

  return (
    <ScrollView>
      <View style={styles.content_all}>
        <Image source={icon_girl} style={styles.image} />
        {/* <Button onPress={() => navigation.navigate('Splash')} title="Splash" /> */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email adress"
          keyboardType="text"
          onChangeText={valueEmail}
          placeholderTextColor="#9F9F9F"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          keyboardType="password"
          onChangeText={valuePassword}
          placeholderTextColor="#9F9F9F"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="numeric"
          onChangeText={valuePhone}
          placeholderTextColor="#9F9F9F"
        />
        <ButtonOpacity
          color={'#6a4029'}
          text="Create New Account"
          radius={20}
          colorText="white"
          height={60}
          width={`90%`}
          marginBottom={20}
          marginTop={20}
          // onPress={postRegister}
          onPressHandler={{
            onPress: handleRegister,
            // onPressIn: () => console.log('Pressed In'),
            // onPressOut: () => console.log('Pressed Out'),
            // onLongPress: () => navigation.popToTop(),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  content_all: {
    alignItems: 'center',
    // flex: 1,
    // paddingHorizontal: 40,
    justifyContent: 'center',
    paddingTop: 50,
  },
  image: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderWidth: 0,
    fontFamily: 'Poppins',
    fontSize: 14,
    height: 40,
    margin: 12,
    outlineWidth: 4,
    padding: 10,
    width: `90%`,
    color: "black"
  },
});
