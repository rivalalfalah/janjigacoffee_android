import {
  View,
  Text,
  TextInput,
  Image,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../style/Cupon';
import icon_search from '../assets/cupon/icon_search.png';
import CardCupon from '../components/CardCupon';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {URLBE} from '@env';
// import {useNavigation} from '@react-navigation/core';
import authAction from '../redux/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cupon = ({navigation}) => {
  // const navigation = useNavigation();
  const product = useSelector(state => state.auth.product);
  const dispatch = useDispatch();

  const [promo, setPromo] = useState([]);
  const [loading, setLoading] = useState(true);

  // const backActionHandler = () => {
  //   navigation.navigate('Cart');
  //   return true;
  // };

  // useEffect(() => {
  //   // Add event listener for hardware back button press on Android
  //   BackHandler.addEventListener('hardwareBackPress', backActionHandler);

  //   return () =>
  //     // clear/remove event listener
  //     BackHandler.removeEventListener('hardwareBackPress', backActionHandler);
  // }, []);

  const handleGetPromo = () => {
    setLoading(true);
    axios
      .get(
        `${URLBE}/promo/?product_id=${product.id_product}`,
      )
      .then(res => {
        setPromo(res.data.result)
        console.log(res.data.result)
        ,setLoading(false);
      })
      .catch(err => {
        ToastAndroid.showWithGravity(
          err.response.data.msg,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
        setLoading(false);
      });
  };

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

  useEffect(() => {
    getProfile(),
    handleGetPromo();
  }, []);

  return (
    <ScrollView>
      <View style={styles.content_all}>
        <View style={styles.content_cupon}>
          <View style={styles.search}>
            <Image source={icon_search} style={styles.icon_search} />
            <TextInput
              style={styles.input}
              placeholder="Browse coupons"
              keyboardType="text"
            />
          </View>
        </View>
        <Text style={styles.text_claim}>Claim coupons by clicking it</Text>
        {loading ? (
          <View style={{marginVertical: 120}}>
            <ActivityIndicator
              style={styles.loading_style}
              size="large"
              color="#0000ff"
            />
          </View>
        ) : (
          <View style={styles.content_card}>
            {promo[0] ? (
              promo.map((e, index) => (
                <CardCupon
                  key={e.id}
                  promo={promo[index].id}
                  image_product={promo[index].image}
                  name_product={promo[index].name}
                  code={promo[index].code}
                  hex_color={promo[index].hex_color}
                  discount={promo[index].discount}
                />
              ))
            ) : (
              <View style={styles.no_cupon_container}>
                <Text style={styles.no_cupon}>You have no coupons left</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Cupon;
