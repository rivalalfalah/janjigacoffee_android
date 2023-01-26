import {View, Text, Image, ScrollView} from 'react-native';
import styles from "../style/Get_Start";
import React from 'react';
import icon_girl from '../assets/get_start/icon_girl.png';
import ButtonOpacity from '../components/ButtonOpacity';

const Get_Start = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.content_all}>
        <Text style={styles.title_welcome}>Welcome!</Text>
        <Text style={styles.title_user}>
          Get a cup of coffee for free only for new user
        </Text>
        <Image source={icon_girl} style={styles.image} />
        {/* <Button onPress={() => navigation.navigate('Splash')} title="Splash" /> */}
        <ButtonOpacity
          color={'#6a4029'}
          text="Create New Account"
          radius={20}
          colorText="white"
          height={70}
          width={`90%`}
          marginBottom={20}
          marginTop={20}
          onPressHandler={{
            onPress: () => navigation.navigate('Register'),
            onPressIn: () => console.log('Pressed In'),
            onPressOut: () => console.log('Pressed Out'),
          }}
        />
        <ButtonOpacity
          color={'#FFBA33'}
          text="Login"
          radius={20}
          colorText="black"
          height={70}
          width={`90%`}
          marginBottom={10}
          onPressHandler={{
            onPress: () => navigation.navigate('Login'),
            onPressIn: () => console.log('Pressed In'),
            onPressOut: () => console.log('Pressed Out'),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Get_Start;

