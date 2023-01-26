import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import ButtonOpacity from '../components/ButtonOpacity';
import image from '../assets/empty/nointernet.png';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../helpers/Metrics';
const NoHistory = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>No internet Connection</Text>
        <Text style={styles.title_info}>
          Your internet connection is currently not available please check or
          try again.
        </Text>
        <ButtonOpacity
          color={'#6a4029'}
          text="Start odering"
          radius={20}
          colorText="white"
          height={70}
          width={`90%`}
          marginTop={verticalScale(200)}
          marginBottom={verticalScale(10)}
          onPressHandler={{
            onPress: () => navigation.navigate('Register'),
            onPressIn: () => console.log('Pressed In'),
            onPressOut: () => console.log('Pressed Out'),
            onLongPress: () => navigation.popToTop(),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default NoHistory;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    background: '#F5F5F8',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    marginBottom: 25,
    marginTop: verticalScale(150),
  },
  title: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: moderateScale(30),
    fontWeight: '900',
    lineHeight: 42,
    marginBottom: 8,
  },
  title_info: {
    fontFamily: 'Poppins',
    fontSize: moderateScale(17),
    lineHeight: 26,
    opacity: 0.6,
    textAlign: 'center',
    width: horizontalScale(335),
  },
});
