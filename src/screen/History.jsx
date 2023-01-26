import {
  Text,
  View,
  ScrollView,
  Image,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import ButtonOpacity from '../components/ButtonOpacity';
import image from '../assets/empty/nohistory.png';
import SwipeHand from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/History';
import CardHistory from '../components/CardHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  // horizontalScale,
  // moderateScale,
  verticalScale,
} from '../helpers/Metrics';

import {
  getHistoryAll,
  deleteHistoryId,
  getHistoryAdmin,
  changePaymentStatus,
} from '../utils/axios';
import {NativeBaseProvider, Button, Modal, Center} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import authAction from '../redux/actions/auth';

const History = ({navigation}) => {
  const dispatch = useDispatch()

  const [history, setHistory] = useState([]);
  const [historyAdmin, setHistoryAdmin] = useState([]);
  const [paymentId, setPaymentId] = useState();
  const [notfound, setNotfound] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [historyId, setHistoryId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deps, setDeps] = useState(0);

  const profile = useSelector(state => state.auth.profile);

  const getDataHistory = async () => {
    try {
      setLoading(true);
      const getToken = await AsyncStorage.getItem('token');
      const response = await getHistoryAll(getToken);
      // console.log(response.data.result.data);
      setHistory(response.data.result.data);
      // setDeps(response.data.result.data.length)
      // setDeps(response.data.result.data.length);
      // console.log(response.data.result.data.length);
      setLoading(false);
    } catch (error) {
      // console.log(error.response.data.msg)
      setNotfound(error.response.data.msg);
      setLoading(false);
    }
  };

  // history admin
  const getAdmin = async () => {
    try {
      setLoading(true);
      const getToken = await AsyncStorage.getItem('token');
      const res = await getHistoryAdmin(getToken);
      setHistoryAdmin(res.data.result);
      console.log(res.data.result)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setNotfound(error.response.data.msg);
    }
  };
  // useEffect(() => {
  //   if (profile.role === 'user') {
  //     getDataHistory();
  //   }
  //   if (profile.role === 'admin') {
  //     getAdmin();
  //   }
  // }, [deps]);

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
      if (profile.role === 'user') {
        getProfile()
        getDataHistory();
      }
      if (profile.role === 'admin') {
        getProfile()
        getAdmin();
      }
      return () => {
        if (profile.role === 'user') {
          setHistory([]);
        }
        if (profile.role === 'admin') {
          setHistoryAdmin([]);
        }
      };
    }, [deps]),
  );

  const deleteHistory = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      await deleteHistoryId(getToken, historyId);
      // console.log(response.data.result.data);
      ToastAndroid.showWithGravity(
        'Delete history success',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      ),
        setDeps(Math.floor(Math.random() * 100000));
      setShowModal(false);
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravity(
        error.response.data.msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      ),
        setNotfound(error.response.data.msg);
    }
  };
  const changeStatus = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      changePaymentStatus(getToken, {status: 'success'}, paymentId);
      console.log('success');
      ToastAndroid.showWithGravity(
        'Status has been change',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      ),
        setDeps(Math.floor(Math.random() * 100000));
      setShowModal(false);
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravity(
        error.response.data.msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      ),
        setNotfound(error.response.data.msg);
    }
  };

  return (
    <ScrollView>
      {/* conditional render not found */}
      {notfound === 'History Not Found' ? (
        <View style={styles.container_notfound}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>No history yet</Text>
          <Text style={styles.title_info}>
            Hit the orange button down below to Create an order
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
              onPress: () => navigation.push('Home'),
              onPressIn: () => console.log('Pressed In'),
              onPressOut: () => console.log('Pressed Out'),
              onLongPress: () => navigation.popToTop(),
            }}
          />
        </View>
      ) : (
        <NativeBaseProvider>
          {profile.role === 'admin' ? (
            <Center>
              <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                _backdrop={{
                  _dark: {
                    bg: 'coolGray.800',
                  },
                  bg: 'warmGray.50',
                }}>
                <Modal.Content maxWidth="350" maxH="212">
                  <Modal.CloseButton />
                  <Modal.Header>Change Status</Modal.Header>
                  <Modal.Body>
                    Do you want to change the payment status?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        colorScheme="success"
                        width={20}
                        onPress={() => {
                          changeStatus(), setShowModal(false);
                        }}>
                        Ok
                      </Button>
                      <Button
                        variant="solid"
                        width={20}
                        colorScheme="danger"
                        onPress={() => {
                          setShowModal(false);
                        }}>
                        Cancel
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
          ) : (
            <Center>
              <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                _backdrop={{
                  _dark: {
                    bg: 'coolGray.800',
                  },
                  bg: 'warmGray.50',
                }}>
                <Modal.Content maxWidth="350" maxH="212">
                  <Modal.CloseButton />
                  <Modal.Header>Delete History</Modal.Header>
                  <Modal.Body>
                    are you sure you want to delete this history.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        colorScheme="success"
                        width={20}
                        onPress={() => {
                          deleteHistory(), setShowModal(false);
                        }}>
                        Ok
                      </Button>
                      <Button
                        variant="solid"
                        width={20}
                        colorScheme="danger"
                        onPress={() => {
                          setShowModal(false);
                        }}>
                        Cancel
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
          )}
          <View style={styles.container}>
            <View style={styles.title_bar}>
              {profile.role === 'admin' ? null : (
                <Text style={styles.title_order}>Order History</Text>
              )}
              <Text style={styles.swipeHand}>
                <SwipeHand
                  color="#000"
                  brand={'MaterialCommunityIcons'}
                  name="gesture-swipe-horizontal"
                  size={25}
                  type="material"
                />
                swipe on an item to confirm order
              </Text>
              {loading ? (
                <View style={{marginHorizontal: 180, marginVertical: 26.5}}>
                  <ActivityIndicator
                    style={styles.loading_style}
                    size="large"
                    color="#0000ff"
                  />
                </View>
              ) : profile.role === 'admin' ? (
                historyAdmin.length === 0 ? (
                  (
                    <View style={styles.container_notfound}>
                      <Image source={image} style={styles.image} />
                      <Text style={styles.title}>No order</Text>
                    </View>
                  ) 
                ) : (
                  historyAdmin.map(e => (
                    <CardHistory
                      key={e.id}
                      name_product={e.name}
                      price={e.total}
                      qty={e.qty}
                      name={e.displayname}
                      image={{uri: e.image}}
                      status={e.status}
                      handler={() => {
                        setPaymentId(e.id), setShowModal(true);
                        // setShowModal(true);
                        // console.log(e.id);
                      }}
                    />
                  ))
                )
              ) : (
                history.map(e => (
                  <CardHistory
                    key={e.id}
                    name_product={e.name}
                    price={e.total}
                    image={{uri: e.image}}
                    status={e.status}
                    handler={() => {
                      setHistoryId(e.id), setShowModal(true);
                      // setShowModal(true);
                      // console.log('click');
                    }}
                  />
                ))
              )}
            </View>
          </View>
        </NativeBaseProvider>
      )}
    </ScrollView>
  );
};

export default History;
