import { View, Text, Image, ScrollView} from 'react-native';
import styles from "../style/Forgot_password2";
import React from 'react';
import icon_girl from '../assets/forgotpass/boy-cat.png';
import ButtonOpacity from '../components/ButtonOpacity';

const Forgot_password2 = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.content_all}>
        <Text style={styles.title_welcome}>Don`t Worry</Text>
        <Text style={styles.title_user}>
          We’ve just sent a link to your email to request a new password
        </Text>
        <Image source={icon_girl} style={styles.image} />
        <Text style={styles.bottom_text}>Haven`t received any link?</Text>
        <ButtonOpacity
          color={'#6A4029'}
          text="Resend link"
          radius={20}
          colorText="white"
          height={60}
          width={`90%`}
          marginBottom={20}
          marginTop={50}
          onPressHandler={{
            onPress: () => navigation.navigate('Forgot_password'),
            onPressIn: () => console.log('Pressed In'),
            onPressOut: () => console.log('Pressed Out'),
            onLongPress: () => navigation.popToTop(),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Forgot_password2;

