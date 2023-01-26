import {
  View,
  Text,
  Image,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../style/Payment';
import Card from 'react-native-vector-icons/FontAwesome';
import Bank from 'react-native-vector-icons/FontAwesome';
import Deleivery from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonOpacity from '../components/ButtonOpacity';
import {NativeBaseProvider, Radio} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authAction from '../redux/actions/auth';
import {transactions} from '../utils/axios';
// import {useNavigation} from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';

const Payment = ({navigation}) => {
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
    getProfile()
  
  }, [])

  const product = useSelector(state => state.auth.product);
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  const [value, setValue] = useState('Card');
  const [statusPaid, setStatusPaid] = useState('paid');
  const [loading, setLoading] = useState(false);

  const handleShowNotification = (name, image) => {
    PushNotification.localNotification({
      channelId: 'local-notification',
      title: 'create payment',
      message: `your order ${name} is on process`,
      smallIcon: 'ic_notification',
      picture: image,
    });
  };

  const costing = price => {
    return (
      'IDR ' +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };

  const handleRemoveRedux = () => {
    dispatch(
      authAction.productThunk({
        id_product: null,
        price: 0,
        name_product: null,
        status: null,
        delivery: null,
        total: 0,
        image: null,
        qty: 0,
        payment_method: null,
        size: null,
        id_promo: null,
      }),
    );
  };

  const handleTransactions = async () => {
    try {
      // if (value === 'Bank' || value === 'Card') {
      //   setStatusPaid('paid')
      // } if (value === 'Cash on Delivery') {
      //   setStatusPaid('pending')
      // }
      if (value === 'Bank') setStatusPaid('paid');
      if (value === 'Card') setStatusPaid('paid');
      if (value === 'Cash on Delivery') setStatusPaid('pending');
      setLoading(true);
      const getToken = await AsyncStorage.getItem('token');
      console.log(statusPaid);
      const result = await transactions(getToken, {
        product_id: product.id_product,
        promo_id: product.id_promo,
        delivery_id: product.delivery,
        method_payment: value,
        qty: product.qty,
        tax: 10,
        total: product.total,
        status: statusPaid,
      });
      // console.log(result.data.result.data.name)
      await handleShowNotification(
        result.data.result.data.name,
        result.data.result.data.image,
      );
      // console.log()
      handleRemoveRedux();
      setLoading(false);
      navigation.replace('Home');
    } catch (err) {
      ToastAndroid.showWithGravity(
        err.response.data.msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      setLoading(false);
    }
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <View>
          <View style={styles.content_all}>
            <Text style={styles.products}>Products</Text>
            <View style={styles.content_product}>
              <View style={styles.content_img}>
                <View style={styles.content_warp}>
                  <Image
                    source={{uri: product.image}}
                    style={styles.image_payment}
                  />
                  <View style={styles.content_hazzelnut}>
                    <Text style={styles.text_hazzel}>
                      {product.name_product}
                    </Text>
                    <Text style={styles.text_hazzel}>x {product.qty}</Text>
                    <Text style={styles.text_hazzel}>
                      {product.size === 'M' || product.size === 'm'
                        ? 'Medium'
                        : product.size === 'L' || product.size === 'l'
                        ? 'Large'
                        : 'Extra Large'}
                    </Text>
                  </View>
                </View>
                <Text style={styles.Idr}>{costing(product.price)}</Text>
              </View>
            </View>
            <Text style={styles.text_payment}>Payment method</Text>
            <View style={styles.content_card}>
              <View style={styles.content_warp}>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value}
                  onChange={nextValue => {
                    setValue(nextValue);
                  }}>
                  <Radio value={'Card'} my={1} colorScheme="amber">
                    <View style={styles.content_sec}>
                      <View style={styles.content_payment}>
                        <Card
                          color="#FFF"
                          brand={'FontAwesome'}
                          name="credit-card"
                          size={25}
                          type="material"
                        />
                      </View>
                      <Text style={styles.text_card}> Card</Text>
                    </View>
                  </Radio>
                  <Radio value={'Bank'} my={1} colorScheme="amber">
                    <View style={styles.content_sec}>
                      <View style={styles.content_payment}>
                        <Bank
                          color="#FFF"
                          brand={'FontAwesome'}
                          name="bank"
                          size={25}
                          type="material"
                        />
                      </View>
                      <Text style={styles.text_card}> Bank account</Text>
                    </View>
                  </Radio>
                  <Radio value={'Cash on Delivery'} my={1} colorScheme="amber">
                    <View style={styles.content_tree}>
                      <View style={styles.content_payment}>
                        <Deleivery
                          color="#000"
                          brand={'MaterialCommunityIcons'}
                          name="truck-delivery"
                          size={25}
                          type="material"
                        />
                      </View>
                      <Text style={styles.text_card}> Cash on delivery</Text>
                    </View>
                  </Radio>
                </Radio.Group>
              </View>
            </View>
            <View style={styles.total}>
              <Text style={styles.text_total}>Tax & Fees</Text>
              <Text style={styles.text_price}>10%</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.text_total}>Shipping</Text>
              <Text style={styles.text_price}>
                {product.delivery === 1 ? costing(5000) : 0}
              </Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.text_total}>Total</Text>
              <Text style={styles.text_price}>{costing(product.total)}</Text>
            </View>
            {loading ? (
              <View style={{marginVertical: 20}}>
                <ActivityIndicator
                  style={styles.loading_style}
                  size="large"
                  color="#0000ff"
                />
              </View>
            ) : (
              <ButtonOpacity
                color={'#6A4029'}
                text="Proceed payment"
                radius={20}
                colorText="white"
                height={60}
                width={`100%`}
                marginBottom={20}
                marginTop={20}
                onPressHandler={{
                  onPress: handleTransactions,
                  onPressIn: () => console.log('Pressed In'),
                  onPressOut: () => console.log('Pressed Out'),
                }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Payment;
