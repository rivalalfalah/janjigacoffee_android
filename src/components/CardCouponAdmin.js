import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CardCupon = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Edit_Promo_Admin', {id_promo: props.id})
      }>
      <View
        style={{
          marginTop: 20,
          paddingVertical: 10,
          paddingLeft: 20,
          width: '100%',
          height: 110,
          borderRadius: 20,
          backgroundColor: props.hex_color,
        }}>
        <View style={styles.card_cupon}>
          <Image
            source={{uri: props.image_product}}
            style={styles.image_coupon_style}
          />
          <View style={styles.cupon_text}>
            <Text style={styles.text_cupon}>{props.name_product}</Text>
            <Text style={styles.text_code}>{props.code}</Text>
            <Text
              style={styles.text_date}>{`Discount : ${props.discount} %`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardCupon;

const styles = StyleSheet.create({
  card_cupon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text_cupon: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 22,
    letterSpacing: 2,
    color: '#000',
    width: '100%',
    paddingTop: 10,
    textTransform: `uppercase`,
  },
  text_date: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    color: '#000',
    width: '100%',
  },
  text_code: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    color: '#000',
    width: '100%',
    paddingVertical: 3,
  },
  cupon_text: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    paddingLeft: 10,
  },
  image_coupon_style: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginTop: 10,
  },
});
