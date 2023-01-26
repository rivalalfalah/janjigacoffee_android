import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import ButtonOpacity from '../components/ButtonOpacity';
import styles from '../style/New_Promo';
import {Button, Modal, Center} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import camera_default from '../assets/add/camera.png';
import {Box, CheckIcon, Select} from 'native-base';
import axios from 'axios';
import {editPromo, deletePromo} from '../utils/axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Iconbutton from 'react-native-vector-icons/MaterialCommunityIcons';
import {URLBE} from '@env';
import authAction from '../redux/actions/auth';
import { useDispatch } from 'react-redux';

function Edit_Promo_Admin({route}) {

  const dispatch = useDispatch()

  const {id_promo} = route.params;
  const navigation = useNavigation()

  const [modals, setModals] = useState(false);
  const [modalsCard, setModalsCard] = useState(false);
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState('');
  const [code, setCode] = useState('');
  const [disc, setDisc] = useState('');
  const [hex, setHex] = useState('');
  const [image, setImage] = useState('');
  const [promoID, setPromoID] = useState(null)
  const [nameproduct, setNameproduct] = useState('')
  const [display, setDisplay] = useState(null);
  const [showdel, setShowdel] = useState(false)
  const [day, setDay] = useState(new Date())
  

  const handleShowedit = () => {
    setModals(!modals);
  };

  const deleteShow = () => {setShowdel(true)}

  const handleShowCard = () => {
    if(!display || !code || !disc || !hex || !valid) return (
      ToastAndroid.showWithGravity(
      'Please input promo first to preview coupon',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    ))
    setModalsCard(!modalsCard);
  };

  const dateHandle = (event, value) => {
    setDay(value)
    setValid(value.getFullYear() + '-' + (value.getMonth() + 1)  + '-' + value.getDate());
    setShow(false);
  };
  console.log(day)
  console.log(valid)
  
  const showMode = () => {
    setShow(!show);
  };

  const camera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(option, res => {
      if (res.didCancel) {
        ToastAndroid.showWithGravity(
          'Cancel Gallery',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      } else if (res.errorCode) {
        ToastAndroid.showWithGravity(
          'Allow Permission',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      } else {
        const data = res.assets[0];
        console.log(res.assets[0]);
        setDisplay(data.uri);
        setImage(res.assets);
        // setEditPhoto(false);
      }
    });
  };

  const handlelaunchImageLibrary = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(option, res => {
      if (res.didCancel) {
        ToastAndroid.showWithGravity(
          'Cancel Gallery',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      } else if (res.errorCode) {
        ToastAndroid.showWithGravity(
          'Allow Permission',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      } else {
        const data = res.assets[0];
        setDisplay(data.uri);
        setImage(res.assets);
        // setEditPhoto(false);
      }
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
    getProfile()
    axios
      .get(`${URLBE}/promo/promo/${id_promo}`)
      .then(res => {
        setDisplay(res.data.result.data[0].image)
        setCode(res.data.result.data[0].code)
        setDisc(res.data.result.data[0].discount)
        setHex(res.data.result.data[0].hex_color)
        setValid((res.data.result.data[0].valid).slice(0,10))
        // setId_product(res.data.result.data[0].product_id)
        setPromoID(res.data.result.data[0].id)
        setNameproduct(res.data.result.data[0].name)
        // setDeps(deps + 1)
      })
      .catch(err => {
        console.log(err.response);
      });
  },[id_promo]);


  const handleCreatePromo = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token')
      const formData = new FormData()
      if(code) formData.append('code', code.toUpperCase());
      if(disc) formData.append('discount', disc);
      if(valid) formData.append('valid', valid);
      if(hex) formData.append('hex_color', hex);
      if(image) formData.append('image', {
        name: image[0].fileName,
        type: image[0].type,
        uri: image[0].uri,
      });
      await editPromo(getToken, formData, promoID)
      // console.log("clear axios")
      ToastAndroid.showWithGravity(
        'Success edit promo',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      )
      navigation.navigate('Cupon_Admin')
    } catch (error) {
      // console.log("kena Catch bawah")
      ToastAndroid.showWithGravity(
        error.response.data.msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      )
    }

  }

  const handleDeletePromo = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      await deletePromo(getToken, id_promo)
      ToastAndroid.showWithGravity(
        "Delete promo success",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      navigation.navigate('MainScreen')
    } catch (error) {
      console.log(error)
      ToastAndroid.showWithGravity(
        "server error",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  }


  return (
    <>
      <ScrollView>
        <View style={styles.all_container}>
        <View style={{position:`absolute`, top:0, right:0, backgroundColor:`#df4759`, borderRadius:50, padding:10}}>
          <Iconbutton
            color="black"
            brand={'MaterialCommunityIcons'}
            name="trash-can-outline"
            size={25}
            type="material"
            onPress={() => deleteShow()}
          />
          </View>
          <View style={styles.container_up}>
            <Image
              source={display !== null ? {uri: display} : camera_default}
              style={styles.image}
            />
            <ButtonOpacity
              color={'#000000'}
              text="Add image"
              radius={13}
              colorText="white"
              height={40}
              width={'60%'}
              marginBottom={10}
              marginTop={20}
              // onPress={postRegister}
              onPressHandler={{
                onPress: handleShowedit,
              }}
            />
          </View>
          <View style={styles.container_promo_input}>
          <Text style={styles.text}>Name Product</Text>
            <Text style={{marginTop:15, marginBottom:5, fontSize:12, color:`black`, fontStyle:`Poppins`}}>{nameproduct}</Text>
            <Text style={{borderBottomWidth:1,marginBottom:20, borderColor:`#BABABA`}}></Text>
            <Text style={styles.text}>Code</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder="Type product name min. 30 characters"
              keyboardType="none"
              value={code}
              onChangeText={e => {
                setCode(e), console.log(e);
              }}
              placeholderTextColor="#9F9F9F"
            />
            <Text style={styles.text}>Discount ( % )</Text>
            <TextInput
              style={styles.input_bottom}
              placeholder={`${disc}`}
              keyboardType="numeric"
              value={disc}
              onChangeText={e => {
                setDisc(e), console.log(e);
              }}
              placeholderTextColor="black"
            />
            <Text style={styles.text}>Background Card Promo</Text>
            <Box maxW="100%">
              <Select
                selectedValue={hex}
                minWidth="200"
                marginTop={5}
                marginBottom={5}
                accessibilityLabel="Choose Color"
                placeholder="Choose Color"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => {setHex(itemValue),console.log(itemValue)}}>
                <Select.Item label="Yellow" value="#F5C361" />
                <Select.Item label="Green" value="#88B788" />
                <Select.Item label="Peach" value="#C59378" />
              </Select>
            </Box>

            <Text style={styles.text}>Valid Coupon</Text>
            <Text
              style={styles.input_bottom_valid}
              onPress={() => showMode()}
              keyboardType="none">
              {valid}
            </Text>
          </View>
          <View>
            <ButtonOpacity
              color={'#6A4029'}
              text="Preview card coupon"
              radius={20}
              colorText="white"
              height={70}
              width={'100%'}
              marginBottom={10}
              marginTop={20}
              onPressHandler={{
                onPress: handleShowCard,
                // onPressIn: () => console.log('Pressed In'),
                // onPressOut: () => console.log('Pressed Out'),
                // onLongPress: () => navigation.popToTop(),
              }}
            />
          </View>
        </View>
      </ScrollView>
      {show && (
        <DateTimePicker
          value={day}
          mode={'date'}
          display="default"
          onChange={dateHandle}
        />
      )}
      <Center>
        <Modal
          isOpen={modals}
          onClose={() => setModals(false)}
          _backdrop={{
            _dark: {
              bg: 'coolGray.800',
            },
            bg: 'warmGray.50',
          }}>
          <Modal.Content maxWidth="350" maxH="212" style={{borderRadius:10}}>
            <Modal.CloseButton />
            <Modal.Header>Upload Image</Modal.Header>
            <Modal.Body>Please choose type to upload image promo</Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  colorScheme="success"
                  width={20}
                  onPress={() => {
                    handlelaunchImageLibrary(), setModals(false);
                  }}>
                  Gallery
                </Button>
                <Button
                  variant="solid"
                  width={20}
                  colorScheme="success"
                  onPress={() => {
                    camera(), setModals(false);
                  }}>
                  Camera
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>

      <Center>
        <Modal
          isOpen={modalsCard}
          onClose={() => setModalsCard(false)}
          _backdrop={{
            _dark: {
              bg: 'coolGray.800',
            },
            bg: 'warmGray.50',
          }}>
          <Modal.Content maxWidth="350" maxH="280" style={{borderRadius:10}}>
            <Modal.CloseButton />
            <Modal.Header>Preview Coupon</Modal.Header>
            <Modal.Body>
              <View
                style={{
                  flexDirection: `row`,
                  width: `100%`,
                  alignItems: `center`,
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  backgroundColor: `${hex}`,
                  borderRadius: 20,
                }}>
                <View style={styles.preview_left}>
                  <Image
                    source={
                      display !== null ? {uri: display} : camera_default
                    } style={styles.image_preview}  />
                </View>
                <View style={styles.preview_right}>
                  <Text style={styles.title_1}>{code}</Text>
                  <Text style={styles.title_2}>Discount: {disc}%</Text>
                  <Text style={styles.title_3}>{nameproduct}</Text>
                </View>
              </View>
            </Modal.Body>
            <Modal.Footer >
              <Button.Group space={2}>
                <Button
                  colorScheme="success"
                  width={20}
                  onPress={() => {
                    handleCreatePromo(),setModalsCard(false);
                  }}>
                  Save
                </Button>
                <Button
                  variant="solid"
                  width={20}
                  colorScheme="danger"
                  onPress={() => {
                    setModalsCard(false);
                  }}>
                  Cancel
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>

      <Center>
              <Modal
                isOpen={showdel}
                onClose={() => setShowdel(false)}
                _backdrop={{
                  _dark: {
                    bg: 'coolGray.800',
                  },
                  bg: 'warmGray.50',
                }}>
                <Modal.Content maxWidth="350" maxH="212">
                  <Modal.CloseButton />
                  <Modal.Header>Delete Product</Modal.Header>
                  <Modal.Body>
                    do you want to delete this product ?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        colorScheme="success"
                        width={20}
                        onPress={() => {
                          handleDeletePromo(), setShowdel(false);
                        }}>
                        Ok
                      </Button>
                      <Button
                        variant="solid"
                        width={20}
                        colorScheme="danger"
                        onPress={() => {
                          setShowdel(false);
                        }}>
                        Cancel
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
    </>
  );
}

export default Edit_Promo_Admin;