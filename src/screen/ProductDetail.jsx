import {View, Text, ScrollView, Image, ToastAndroid, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonOpacity from '../components/ButtonOpacity';
import styles from '../style/ProductDetail';
import axios from 'axios';
import authAction from '../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {URLBE} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetail = ({route}) => {
  const {id_product} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const profile = useSelector(state => state.auth.profile);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProfile = async () => {
    try {
      // const removeToken = await AsyncStorage.removeItem('token');
      const getToken = await AsyncStorage.getItem('token');
      dispatch(authAction.userIDThunk(getToken));
    } catch (error) {
      console.log(error);
      navigation.replace('Get_Start');
    }
  };

  const getProductByid = () => {
    setLoading(true);
    getProfile()
    axios
      .get(`${URLBE}/product/${id_product}`)
      .then(res => {
        setProduct(res.data.result.data[0]);
        setLoading(false);
        // console.log(res.data.result.data[0])
      })

      .catch(err => {
        console.log(err.response.data.msg);
        ToastAndroid.showWithGravity(
          err.response.data.msg,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    getProductByid();
  }, [id_product]);

  const costing = price => {
    return (
      'IDR ' +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };

  const handleRedux = () => {
    if (profile.displayname === null)
      return (
        ToastAndroid.showWithGravity(
          'You must input displayname first to order',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        ),
        navigation.navigate('Profile')
      );
    if (profile.address === null)
      return (
        ToastAndroid.showWithGravity(
          'You must input address first to order',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        ),
        navigation.navigate('Profile')
      );

    dispatch(
      authAction.productThunk(
        {
          id_product: id_product,
          price: product.price,
          name_product: product.name,
          status: null,
          delivery: null,
          total: 0,
          image: product.image,
          qty: 1,
          payment_method: null,
          size: product.size,
          id_promo: null,
        },
        () => {
          navigation.navigate('Cart');
        },
      ),
    );
  };

  return (
    <ScrollView>
      {loading ? (
        <View style={{marginVertical:120}}>
          <ActivityIndicator
          style={styles.loading_style}
          size="large"
          color="#0000ff"
        />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.img_bar}>
            <Image style={styles.img_product} source={{uri: product.image}} />
          </View>
          <Text style={styles.name_product}>{product.name}</Text>
          <Text style={styles.price}>{costing(product.price)}</Text>
          <View style={styles.text_bar}>
            <Text style={styles.title_info}>Delivery info</Text>
            <Text style={styles.deliver_desc}>
              Delivered only on monday until friday from 1 pm to 7 pm
            </Text>
          </View>
          <View style={styles.text_bar}>
            <Text style={styles.title_info}>Description</Text>
            <Text style={styles.desc_text}>{product.description}</Text>
          </View>
          <ButtonOpacity
            color={'#6a4029'}
            text="Add to cart"
            radius={20}
            colorText="white"
            height={70}
            width={`90%`}
            marginBottom={10}
            marginTop={70}
            onPressHandler={{
              onPress: handleRedux,
              onPressIn: () => console.log('Pressed In'),
              onPressOut: () => console.log('Pressed Out'),
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default ProductDetail;
