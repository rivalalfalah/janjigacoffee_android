import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import ArrowRight from 'react-native-vector-icons/Feather';
import ArrowRightSec from 'react-native-vector-icons/AntDesign';
import styles from '../style/Cart';
import ButtonOpacity from '../components/ButtonOpacity';
import {useDispatch, useSelector} from 'react-redux';
import authAction from '../redux/actions/auth';
import {useNavigation} from '@react-navigation/native';
import image from '../assets/empty/noorder.png';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../helpers/Metrics';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.auth.product);
  const navigation = useNavigation();

  const costing = price => {
    return (
      'IDR ' +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };

  const min = () => {
    
    dispatch(
      authAction.productThunk({
        total: product.price * product.qty + (product.price * 10) / 100,
        qty: (product.qty === 1 ? 1 : product.qty - 1),
      }),
    );
  };

  const max = () => {
    dispatch(
      authAction.productThunk({
        total: product.price * product.qty + (product.price * 10) / 100,
        qty: product.qty + 1,
      }),
    );
  };

  const handleRedux = () => {
    dispatch(
      authAction.productThunk(
        {
          total: product.price * product.qty + (product.price * 10) / 100,
          qty: product.qty,
        },
        () => {
          navigation.navigate('Delivery');
        },
      ),
    );
  };

  const handleReduxCupon = () => {
    dispatch(
      authAction.productThunk(
        {
          qty: product.qty,
        },
        () => {
          navigation.navigate('Cupon');
        },
      ),
    );
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
    getProfile();
  }, []);
  

  if (product.id_product)
    return (
      <ScrollView>
        <View style={styles.content_all}>
          <View style={styles.content_product}>
            <View style={styles.content_img_product}>
              <Image
                source={{uri: product.image}}
                style={styles.icon_product}
              />
              <Text style={styles.price}>{costing(product.price)} </Text>
            </View>
            <View style={styles.content_veggie}>
              <Text style={styles.veggie}>{product.name_product}</Text>
              <View style={styles.content_counter}>
                <View
                  style={styles.content_down}
                  onStartShouldSetResponder={min}>
                  <Text style={styles.down}>—</Text>
                </View>

                <Text style={styles.number}>{product.qty}</Text>

                <View style={styles.content_up} onStartShouldSetResponder={max}>
                  <Text style={styles.up}>+</Text>
                </View>
              </View>
            </View>
          </View>
          {product.id_promo === null ? (
            <TouchableOpacity
              onPress={() => {
                handleReduxCupon();
              }}>
              <View style={styles.btn_navigateSec}>
                <Text style={styles.text_btn}>Apply Delivery Coupons</Text>
                <ArrowRightSec
                  color="#6A4029"
                  brand={'AntDesign'}
                  name="arrowright"
                  size={25}
                  type="material"
                />
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.cupon_container}>
              <Text style={styles.text_cupon}>you already use cupon</Text>
            </View>
          )}
          <View style={styles.content_line}>
            <View style={styles.line}></View>
          </View>
          <View style={styles.content_total}>
            <Text style={styles.total}>Item Total</Text>
            <Text style={styles.idr}>{costing(product.price * product.qty)}</Text>
          </View>
          <View style={styles.content_total}>
            <Text style={styles.total}>Tax</Text>
            <Text style={styles.idr}>10%</Text>
          </View>
          <View style={styles.content_total}>
            <Text style={styles.subtotal}>Total :</Text>
            <Text style={styles.sub_idr}>
              {costing(product.price * product.qty + (product.price * 10) / 100)}
            </Text>
          </View>
          <View
            style={styles.btn_navigate}
            onStartShouldSetResponder={handleRedux}>
            <Text style={styles.text_btn}>CHECKOUT</Text>
            <ArrowRight
              color="#6A4029"
              brand={'Feather'}
              name="chevron-right"
              size={25}
              type="material"
            />
          </View>
        </View>
      </ScrollView>
    );

  if (product.id_product === null)
    return (
      <ScrollView>
        <View style={styler.container}>
          <Image source={image} style={styler.image} />
          <Text style={styler.title}>No orders yet</Text>
          <Text style={styler.title_info}>
            Hit the orange button down below to Create an order
          </Text>
          <ButtonOpacity
            color={'#6a4029'}
            text="Start ordering"
            radius={20}
            colorText="white"
            height={70}
            width={`90%`}
            marginTop={verticalScale(200)}
            marginBottom={verticalScale(10)}
            onPressHandler={{
              onPress: () => navigation.navigate('MainScreen')
            }}
          />
        </View>
      </ScrollView>
    );
};

export default Cart;

const styler = StyleSheet.create({
  container: {
    alignItems: 'center',
    background: '#F5F5F8',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    marginBottom: 25,
    marginTop: verticalScale(200),
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
    width: horizontalScale(234),
  },
});
