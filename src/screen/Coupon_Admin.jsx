import {
  View,
  Text,
  TextInput,
  Image,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, { useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../style/Cupon';
import icon_search from '../assets/cupon/icon_search.png';
import CardCupon from '../components/CardCouponAdmin';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import {URLBE} from '@env';
import authAction from '../redux/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

const Cupon_Admin = ({navigation}) => {
  const dispatch = useDispatch()
  const [promo, setPromo] = useState([]);
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

  useFocusEffect(
    React.useCallback(() => {
      getProfile();
        setLoading(true);
        axios
          .get(`${URLBE}/promo/Getpromo`)
          .then(res => {
            setPromo(res.data.result);
            // console.log(res.data.result)
            setLoading(false);
            console.log("selesai")
          })
          .catch(err => {
            console.log(err)
            ToastAndroid.showWithGravity(
              err.response.data.msg,
              ToastAndroid.LONG,
              ToastAndroid.TOP,
            );
            setLoading(false);
          });

      return () => {setPromo([]),console.log("clear")};
    }, [])
  );

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
        <Text style={styles.text_claim}>Click to edit promo</Text>
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
            {promo ? (
              promo.map((e, index) => (
                <CardCupon
                  key={e.id}
                  id={promo[index].id}
                  image_product={promo[index].image}
                  promo={promo[index].id}
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

export default Cupon_Admin;
