import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import styles from '../style/Forgot_password';
import React from 'react';
import icon_girl from '../assets/forgotpass/boy-cat.png';
import ButtonOpacity from '../components/ButtonOpacity';

const Forgot_password = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.content_all}>
        <Text style={styles.title_welcome}>Don`t Worry</Text>
        <Text style={styles.title_user}>
          We’ve just sent a link to your email to request a new password
        </Text>
        <Image source={icon_girl} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={'#9A9A9D'}
        />
        <Text style={styles.bottom_text}>Haven`t received any link?</Text>
        <ButtonOpacity
          color={'#6A4029'}
          text="Resend link"
          radius={20}
          colorText="white"
          height={60}
          width={`90%`}
          marginBottom={10}
          marginTop={50}
          onPressHandler={{
            onPress: () => navigation.navigate('Forgot_password2'),
            onPressIn: () => console.log('Pressed In'),
            onPressOut: () => console.log('Pressed Out'),
            onLongPress: () => navigation.popToTop(),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Forgot_password;
