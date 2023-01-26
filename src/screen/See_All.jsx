import React, {useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ToastAndroid,
  FlatList,
} from 'react-native';

import axios from 'axios';

import CardProduct from '../components/CardSeeAll';
import {Box, Center, CheckIcon, Select} from 'native-base';
import styles from '../style/See_All';
import {useFocusEffect} from '@react-navigation/core';
import {URLBE} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authAction from '../redux/actions/auth';
import { useDispatch } from 'react-redux';

function See_All({route,navigation}) {
  const dispatch = useDispatch()
  const {category, sort} = route.params;

  const [product, setProduct] = useState([]);
  const [sorting, setSorting] = useState('');
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(true);

  const handleNext = () => {
    if (next === null) return setLoading(false);
    if(next !== null) handleaxios(next)
  };

  const handleaxios = URLBE => {
    setLoading(true);
    setTimeout(() => {
      axios
      .get(URLBE)
      .then(res => {
        setProduct([...product, ...res.data.result.data]), console.log(product);
        setNext(res.data.result.next);
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
        ToastAndroid.showWithGravity(
          err.response.data.msg,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
        setLoading(false);
      });
    }, 1000);
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <CardProduct
          key={item.id}
          id={item.id}
          name={item.name}
          image_product={item.image}
          price={item.price}
          size={item.size}
        />
      </View>
    );
  };

  const renderLoader = () => {
    return loading ? (
      <View >
        <ActivityIndicator  size="large" color="#aaa" />
      </View>
    ) : (
      <View>
        <Text style={{color:'black'}}>data sudah habis</Text>
      </View>
    )
  };

  const headerList = () => {
    return <View style={{paddingVertical: 20}}></View>;
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

  useFocusEffect(
    React.useCallback(() => {
     getProfile()
      return () => {
        setProduct([]);
      };
    }, []),
  );
  useFocusEffect(
    React.useCallback(() => {
      setProduct([]);
        handleaxios(
          `${URLBE}/product?category=${
            category === 'favorite' ? '' : `${category}`
          }&sorting=${sorting}&page=1&limit=4`,
        );      
      return () => {
        setProduct([]);
      };
    }, [category, sorting]),
  );

  return (
    // <ScrollView>
    <View style={styles.all_content}>
      <View style={styles.text_container}>
        <Text style={styles.text}>{category}</Text>
      </View>
      {/* sorting */}
      {sort === 'favorite' ? (
        ''
      ) : (
        <View style={{paddingTop:20}}>
          <Center>
            <Box maxW="300">
              <Select
                selectedValue={sorting}
                minWidth="200"
                accessibilityLabel="Sort Product"
                placeholder="Sort Product"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => {
                  setSorting(itemValue);
                }}>
                <Select.Item label="cheapest" value="cheapest" />
                <Select.Item label="expensive" value="expensive" />
                <Select.Item label="newest" value="newest" />
                <Select.Item label="lates" value="lates" />
              </Select>
            </Box>
          </Center>
        </View>
      )}
      {/* end sorting */}

      <View style={styles.content_card_product}>
        <View style={styles.content_list_product}>
          <View
            style={{
              flexDirection: `row`,
              justifyContent: `space-between`,
              paddingBottom: 20,
            }}>
            <FlatList
              data={product}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListHeaderComponent={headerList}
              onEndReachedThreshold={4}
              onEndReached={handleNext}
              ListFooterComponent={renderLoader}
            />
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
}

export default See_All;
