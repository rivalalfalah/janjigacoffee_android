import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from '../style/CardProduct';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CardProduct = props => {
  const navigate = useNavigation();

  const profile = useSelector((state) => state.auth.profile)

  const costing = price => {
    return (
      'IDR ' +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };


  return (
    <TouchableOpacity
      onPress={() => {
        navigate.navigate(profile.role === 'user' ? 'ProductDetail' : 'Edit_Product', {
          id_product: props.id,
        });
      }}>
      <View style={styles.gap_product}>
        <View style={styles.Content_product}>
          <View style={styles.background_card}>
            <Image
              source={{uri: props.image_product}}
              style={styles.image_product}
            />
          </View>
          <View>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.size}>{props.size}</Text>
            <Text style={styles.price}>{costing(props.price)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardProduct;
