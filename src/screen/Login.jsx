import {
  View,
  Image,
  ScrollView,
  TextInput,
  Text,
  ToastAndroid,
  ActivityIndicator,
  // ToastAndroid,
} from 'react-native';
import styles from '../style/Login';
import React, {useState} from 'react';
import icon_login from '../assets/login/icon_login.png';
import icon_google from '../assets/login/icon_google.png';
import ButtonOpacity from '../components/ButtonOpacity';
// import axios from 'axios';
import { useDispatch} from 'react-redux';
import authActions from '../redux/actions/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginUser} from "../utils/axios"
// import { useNavigation } from '@react-navigation/native';

const Login = ({navigation}) => {

  const dispatch = useDispatch();
  // const navigation = useNavigation()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const valueEmail = e => {
    setEmail(e), console.log(e);
  };
  const valuePassword = e => {
    setPassword(e), console.log(e);
  };
  const handleLogin = () => {
    setLoading(true)
    LoginUser({email: email, passwords: password})
      .then(res => {
        setLoading(true);
        AsyncStorage.setItem('token', res.data.result.data.token);
        AsyncStorage.setItem('role', res.data.result.data.role);
        dispatch(
          authActions.userIDThunk(res.data.result.data.token, () => {
            ToastAndroid.showWithGravity(
              'Login Success',
              ToastAndroid.LONG,
              ToastAndroid.TOP,
            ),
              navigation.replace('Home');
          }),
        )
        setLoading(false)
      })
      .catch((err) => {
        setLoading(true);
        console.log(err)
        ToastAndroid.showWithGravity(
          err.response.data.msg.msg,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
        setLoading(false);
      });
  };


  return (
    <ScrollView>
      <View style={styles.content_all}>
        <View style={styles.content_login}>
          <Image source={icon_login} style={styles.icon_login} />
          <Text style={styles.text_login}>Login</Text>
        </View>
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
        <View style={styles.forgot_pass_box}>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate('Forgot_password')}>
            Forgot password?
          </Text>
        </View>
        {loading ? (
          <View style={{marginHorizontal:100, marginVertical:32}}>
            <ActivityIndicator
              style={styles.loading_style}
              size="large"
              color="#0000ff"
            />
          </View>
        ) : (
          <ButtonOpacity
            color={'#6a4029'}
            text="Login"
            radius={20}
            colorText="white"
            height={60}
            width={`90%`}
            marginBottom={20}
            marginTop={20}
            onPressHandler={{
              onPress: handleLogin,
              // onPressIn: () => console.log('Pressed In'),
              // onPressOut: () => console.log('Pressed Out'),
              // onLongPress: () => navigation.popToTop(),
            }}
          />
        )}
        <View>
          <View style={styles.content_line}>
            <View style={styles.line}></View>
            <Text style={styles.text_with}>or login in with</Text>
            <View style={styles.line}></View>
          </View>
        </View>
        <View style={styles.content_google}>
          <Image source={icon_google} style={styles.icon_google} />
          <ButtonOpacity
            color={'white'}
            text="Login with Google"
            radius={20}
            colorText="black"
            height={60}
            width={`90%`}
            marginBottom={20}
            marginTop={20}
            onPressHandler={{
              onPress: () => console.log('google'),
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;


