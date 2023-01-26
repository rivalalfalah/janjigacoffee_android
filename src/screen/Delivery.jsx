import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ButtonOpacity from '../components/ButtonOpacity';
import {NativeBaseProvider, Radio} from 'native-base';
import styles from '../style/Delivery';
import {useDispatch, useSelector} from 'react-redux';
import authAction from '../redux/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/core';

function Delivery({navigation}) {
  // const navigation = useNavigation();

  const profile = useSelector(state => state.auth.profile);
  const product = useSelector(state => state.auth.product);
  const dispatch = useDispatch();

  const [value, setValue] = useState('1');

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
  }, []);

  const costing = price => {
    return (
      'IDR ' +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };

  const handleValue = () => {
    if (value === '1') return 5000;
    return 0;
  };

  const handleRedux = () => {
    dispatch(
      authAction.productThunk(
        {
          delivery: parseInt(value),
          total: product.total + handleValue(),
        },
        () => {
          navigation.replace('Payment');
        },
      ),
    );
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.content_all}>
          <View>
            <Text style={styles.Delivery_text}>Delivery</Text>
          </View>
          <View style={styles.address_container}>
            <Text style={styles.address_text_details}>Address details</Text>
            <Text
              style={styles.change_btn}
              onPress={() => navigation.navigate('ProfileEdit')}>
              change
            </Text>
          </View>
          <View style={styles.address_main_container}>
            <View style={styles.address_main_box}>
              <Text
                style={
                  styles.main_address_text
                }>{`Delivery : ${profile.displayname}`}</Text>
              <Text style={styles.detail_address_text}>{profile.address}</Text>
              <Text style={styles.number_text}>{profile.phone_number}</Text>
            </View>
          </View>
          <View style={styles.delivery_method_container}>
            <Text style={styles.delivery_method_text}>Delivery methods</Text>
          </View>
          <View style={styles.option_container}>
            <Radio.Group
              defaultValue="1"
              name="exampleGroup"
              accessibilityLabel="favorite colorscheme"
              onChange={nextValue => {
                setValue(nextValue);
              }}
              value={value}>
              <View style={styles.border_bottom}>
                <View style={styles.options}>
                  <Radio colorScheme={'amber'} value="1" my={1}>
                    Door delivery
                  </Radio>
                </View>
              </View>
              <View style={styles.border_bottom}>
                <View style={styles.options}>
                  <Radio colorScheme="amber" value="2" my={1}>
                    Pick up at store
                  </Radio>
                </View>
              </View>
              <View style={styles.margin_dine}>
                <View style={styles.options}>
                  <Radio colorScheme="amber" value="3" my={1}>
                    Dine in
                  </Radio>
                </View>
              </View>
            </Radio.Group>
          </View>
          <View style={styles.price_container}>
            <Text style={styles.total_text}>Delivery</Text>
            <Text style={styles.price_text}>
              {value === '1' ? costing(5000) : 0}
            </Text>
          </View>
          <View style={styles.price_container}>
            <Text style={styles.total_text}>Total</Text>
            <Text style={styles.price_text}>
              {costing(product.total + handleValue())}
            </Text>
          </View>
          <ButtonOpacity
            color={'#6A4029'}
            text="Proceed to payment"
            radius={20}
            colorText="white"
            height={60}
            width={`100%`}
            marginBottom={20}
            marginTop={20}
            onPressHandler={{
              onPress: handleRedux,
              onPressIn: () => console.log('Pressed In'),
              onPressOut: () => console.log('Pressed Out'),
            }}
          />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default Delivery;
