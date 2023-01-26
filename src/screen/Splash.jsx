import {Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import image from '../assets/splash/get_started.png';
import styles from '../style/Splash';
import {useDispatch} from 'react-redux';

import authActions from '../redux/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  const getProfile = async () => {
    try {
      // const removeToken = await AsyncStorage.removeItem('token');
      const getToken = await AsyncStorage.getItem('token');
      dispatch(
        authActions.userIDThunk(
          getToken,
          () => {
            navigation.replace('Home');
          },
          () => {
            navigation.replace('Get_Start');
          },
        ),
      );
    } catch (error) {
      console.log(error);
      navigation.replace('Get_Start');
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title_center}>Coffee for Everyone</Text>
        <Image source={image} style={styles.image} />
      </View>
    </ScrollView>
  );
};

export default Splash;
