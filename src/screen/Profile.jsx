import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import ButtonOpacity from '../components/ButtonOpacity';
import styles from '../style/Profile';

// import Pencil from 'react-native-vector-icons/Octicons';
import ArrowRight from 'react-native-vector-icons/Feather';

import {useDispatch, useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {getHistory, Resetpassword} from '../utils/axios';
import {Button, Modal, Center} from 'native-base';
import {TextInput} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import authAction from '../redux/actions/auth';

const Profile = ({navigation}) => {
  const dispatch = useDispatch()
  // const navigation = useNavigation();

  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [history, setHistory] = useState([]);
  const [notfound, setNotfound] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deps, setDeps] = useState(0);

  const data_profile = useSelector(state => state.auth.profile);

  const valueOldPassword = e => {
    setOldpass(e), console.log(e);
  };
  const valueNewPassword = e => {
    setNewpass(e), console.log(e);
  };

  const getDataHistory = async () => {
    try {
      setLoading(true);
      const getToken = await AsyncStorage.getItem('token');
      const response = await getHistory(getToken);
      // console.log(response.data.result.data)
      setDeps(response.data.result.data.length);
      setHistory(response.data.result.data);
      setLoading(false);
    } catch (error) {
      // console.log(error.response.data.msg)
      setNotfound(error.response.data.msg);
      setLoading(false);
    }
  };

  const resetPWD = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      const response = await Resetpassword(getToken, {
        old_password: oldpass,
        new_password: newpass,
      });
      // console.log(response.data.result.msg)
      ToastAndroid.showWithGravity(
        response.data.result.msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      setShowModal(false);
      // setHistory(response.data.result.data);
    } catch (error) {
      // console.log(error.response.data.msg.msg)
      ToastAndroid.showWithGravity(
        error.response.data.msg.msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
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

  const Logout = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      console.log(getToken);
      dispatch(authAction.logoutThunk(getToken));
      ToastAndroid.showWithGravity(
        'Logout Success',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      ),
        navigation.replace('Get_Start');
      //   navigation.closeDrawer();
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(React.useCallback(() => {
    getProfile()
    getDataHistory()
  },[deps]) )
  // useEffect(() => {
  //   getDataHistory();
  //   console.log(history);
  // }, [deps]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content_profile}>
          <View style={styles.img_bar}>
            <Image source={{uri: data_profile.image}} style={styles.img} />
            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfileEdit');
              }}>
              <View style={styles.pencil_bar}>
                <Pencil
                  style={styles.pencil}
                  color="#fff"
                  brand={'Octicons'}
                  name="pencil"
                  size={25}
                  type="material"
                />
              </View>
            </TouchableOpacity> */}
          </View>
          <View style={styles.content_profile_text}>
            <Text style={styles.name}>
              {data_profile.displayname === null
                ? 'username'
                : data_profile.displayname}
            </Text>
            <View style={styles.content_profile_text}>
              <Text style={styles.text_profile}>{data_profile.email}</Text>
              <Text style={styles.text_profile}>
                {data_profile.phone_number}
              </Text>
              <Text style={styles.text_profile}>
                {data_profile.address === null
                  ? "' input address first '"
                  : data_profile.address}
              </Text>
            </View>
          </View>
        </View>
        {/* History */}
        <View style={styles.history_bar}>
          <View style={styles.order}>
            <Text style={styles.text_order}>Order History</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('History');
              }}>
              <View>
                <Text style={styles.seemore}> see more</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} overScrollMode={'auto'}>
            {loading ? (
              <View style={{marginHorizontal:180, marginVertical:26.5}}>
                <ActivityIndicator
                  style={styles.loading_style}
                  size="large"
                  color="#0000ff"
                />
              </View>
            ) : (
              <View style={styles.order_product}>
                {notfound === 'History Not Found' ? (
                  <Text style={{color:'black'}}>Please order product to add history in here</Text>
                ) : (
                  history.map((e, index) => (
                    <View key={index}>
                      <Image
                        style={styles.img_order}
                        source={{uri: history[index].image}}
                      />
                    </View>
                  ))
                )}
              </View>
            )}
          </ScrollView>
        </View>
        {/* button */}
        <View style={styles.btn_navigate_bar}>
        <View style={styles.content_button_link}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfileEdit');
              }}>
              <View style={styles.btn_navigate}>
                <Text style={styles.text_btn}>Edit Profile</Text>
                <ArrowRight
                  color="#6A4029"
                  brand={'Feather'}
                  name="chevron-right"
                  size={25}
                  type="material"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content_button_link}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
              }}>
              <View style={styles.btn_navigate}>
                <Text style={styles.text_btn}>Edit Password</Text>
                <ArrowRight
                  color="#6A4029"
                  brand={'Feather'}
                  name="chevron-right"
                  size={25}
                  type="material"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content_button_link}>
            <TouchableOpacity
              onPress={() => {
                console.log('add FAQ');
              }}>
              <View style={styles.btn_navigate}>
                <Text style={styles.text_btn}>FAQ</Text>
                <ArrowRight
                  color="#6A4029"
                  brand={'Feather'}
                  name="chevron-right"
                  size={25}
                  type="material"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content_button_link}>
            <TouchableOpacity
              onPress={() => {
                console.log('add Help');
              }}>
              <View style={styles.btn_navigate}>
                <Text style={styles.text_btn}>Help</Text>
                <ArrowRight
                  color="#6A4029"
                  brand={'Feather'}
                  name="chevron-right"
                  size={25}
                  type="material"
                />
              </View>
            </TouchableOpacity>
          </View>

          <ButtonOpacity
            color={'#6a4029'}
            text="Log out"
            radius={20}
            colorText="white"
            height={70}
            width={`90%`}
            marginBottom={10}
            marginTop={10}
            onPressHandler={{
              onPress: () => Logout(),
            }}
          />
        </View>
      </View>
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
          <Modal.Content width={300} height={270}>
            <Modal.CloseButton />
            <Modal.Header>Reset Password</Modal.Header>
            <Modal.Body>
              {/* Reset Password body */}
              <View style={styles.body_reset}>
                <TextInput
                  style={styles.input_password}
                  placeholder="old password"
                  secureTextEntry
                  keyboardType="password"
                  onChangeText={valueOldPassword}
                  placeholderTextColor="#9F9F9F"
                />
                <TextInput
                  style={styles.input_password}
                  placeholder="new password"
                  secureTextEntry
                  keyboardType="password"
                  onChangeText={valueNewPassword}
                  placeholderTextColor="#9F9F9F"
                />
              </View>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  colorScheme="success"
                  width={20}
                  onPress={() => {
                    resetPWD();
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
    </ScrollView>
  );
};

export default Profile;
