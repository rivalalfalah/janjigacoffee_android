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
import styles from '../style/NewProduct';
import Iconbutton from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Box,
  Button,
  Center,
  CheckIcon,
  Modal,
  NativeBaseProvider,
  Select,
} from 'native-base';
import {editProduct, deleteProduct} from '../utils/axios';
import camera_default from '../assets/add/camera.png';
import axios from 'axios';
import {URLBE} from '@env';
import authAction from '../redux/actions/auth';
import {useDispatch} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';

function Edit_Product({route, navigation}) {
  const dispatch = useDispatch();
  const {id_product} = route.params;

  const [filePath, setFilePath] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showdel, setShowdel] = useState(false);
  // const [choosePhoto, setChoosePhoto] = useState(false);

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
    // const random = () => {return (Math.random() * 1000000)}
    // const {id_product} = route.params;
    getProfile();
    axios
      .get(`${URLBE}/product/${id_product}`)
      .then(res => {
        setFilePath(res.data.result.data[0].image);
        setCategory(res.data.result.data[0].category);
        setSize(res.data.result.data[0].size);
        setPrice(res.data.result.data[0].price);
        setStock(res.data.result.data[0].stock);
        // setId_product(res.data.result.data[0].product_id)
        // setPromoID(res.data.result.data[0].id);
        console.log(res.data.result.data[0]);
        setDescription(res.data.result.data[0].description);
        setName(res.data.result.data[0].name);
        // setDeps(deps + 1)
      })
      .catch(err => {
        console.log(err.response);
      });
  }, [id_product]);

  const show = () => {
    setShowModal(true);
  };

  const deleteShow = () => {
    setShowdel(true);
  };

  const camera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('user cancel');
      } else if (res.errorCode) {
        console.log(res.errorCode);
      } else {
        const data = res.assets[0];
        console.log(res.assets[0]);
        setFilePath(data.uri);
        setImage(res.assets);
        // setChoosePhoto(false);
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
        console.log('user cancel');
      } else if (res.errorCode) {
        console.log(res.errorCode);
      } else {
        const data = res.assets[0];
        setFilePath(data.uri);
        setImage(res.assets);
        // setChoosePhoto(false);
      }
    });
  };

  console.log(price);

  const saveHandle = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      const formData = new FormData();
      if (name) formData.append('name', name);
      if (category) formData.append('category', category);
      if (size) formData.append('size', size);
      if (price) formData.append('price', price);
      if (stock) formData.append('stock', stock);
      if (description) formData.append('description', description);
      if (image)
        formData.append('image', {
          name: image[0].fileName,
          type: image[0].type,
          uri: image[0].uri,
        });
      await editProduct(getToken, formData, id_product);
      ToastAndroid.showWithGravity(
        'Edit product Success',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );

      navigation.navigate('MainScreen');
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravity(
        error.response.data.msg,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };

  const deleteproduct = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      await deleteProduct(getToken, id_product);
      ToastAndroid.showWithGravity(
        'Delete product success',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      navigation.navigate('MainScreen');
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravity(
        'server error',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };

  return (
    <>
      <ScrollView>
        {showAdd ? (
          <NativeBaseProvider>
            <Modal
              isOpen={showAdd}
              onClose={() => setShowAdd(false)}
              _backdrop={{
                _dark: {
                  bg: 'coolGray.800',
                },
                bg: 'warmGray.50',
              }}>
              <Modal.Content maxWidth="350" maxH="212">
                <Modal.CloseButton />
                <Modal.Header>add product</Modal.Header>
                <Modal.Body>are you sure for this product?</Modal.Body>
                <Modal.Footer>
                  <Button.Group space={6}>
                    <Button
                      colorScheme="success"
                      width={100}
                      onPress={() => {
                        saveHandle(), setShowAdd(false);
                      }}>
                      yes
                    </Button>
                    <Button
                      colorScheme="danger"
                      width={110}
                      onPress={() => {
                        setShowAdd(false);
                      }}>
                      cancel
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </NativeBaseProvider>
        ) : null}
        {showModal ? (
          <NativeBaseProvider>
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
                <Modal.Header>input image</Modal.Header>
                <Modal.Body>input your image file with?</Modal.Body>
                <Modal.Footer>
                  <Button.Group space={6}>
                    <Button
                      colorScheme="success"
                      width={100}
                      onPress={() => {
                        handlelaunchImageLibrary(), setShowModal(false);
                      }}>
                      open library
                    </Button>
                    <Button
                      colorScheme="success"
                      width={110}
                      onPress={() => {
                        camera(), setShowModal(false);
                      }}>
                      open camera
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </NativeBaseProvider>
        ) : null}
        <View style={[styles.all_container, {paddingTop: 20}]}>
          <View
            style={{
              position: `absolute`,
              top: 0,
              right: 40,
              backgroundColor: `#df4759`,
              borderRadius: 50,
              padding: 10,
            }}>
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
              source={filePath !== null ? {uri: filePath} : camera_default}
              style={styles.image}
            />
            <ButtonOpacity
              color={'#000000'}
              text="Change picture"
              radius={13}
              colorText="white"
              height={40}
              width={'60%'}
              marginBottom={10}
              marginTop={20}
              // onPress={postRegister}
              onPressHandler={{
                onPress: () => show(),
                // onPressIn: () => console.log('Pressed In'),
                // onPressOut: () => console.log('Pressed Out'),
                // onLongPress: () => navigation.popToTop(),
              }}
            />
            <TextInput
              style={styles.input}
              value={name}
              placeholder="Type product name min. 30 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={e => {
                setName(e);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder={`${price}`}
              value={price}
              keyboardType="numeric"
              placeholderTextColor="black"
              onChangeText={e => {
                setPrice(e), console.log(e);
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>input category</Text>
            <View style={{width: `75%`}}>
              <Center style={{paddingTop: 10}}>
                <Box maxW={'100%'}>
                  <Select
                    selectedValue={category}
                    minWidth="100%"
                    accessibilityLabel="set category"
                    placeholder="set category"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={itemValue => {
                      setCategory(itemValue);
                    }}>
                    <Select.Item label="non coffee" value="non coffee" />
                    <Select.Item label="coffee" value="coffee" />
                    <Select.Item label="food" value="foods" />
                    <Select.Item label="addon" value="addon" />
                  </Select>
                </Box>
              </Center>
              <Text style={styles.text}>Input size</Text>
              <View style={{width: '100%'}}>
                <Center style={{paddingTop: 10}}>
                  <Box maxW="100%">
                    <Select
                      selectedValue={size}
                      minWidth="100%"
                      accessibilityLabel="set size"
                      placeholder="set size"
                      _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={1}
                      onValueChange={itemValue => {
                        setSize(itemValue);
                      }}>
                      <Select.Item label="medium" value="M" />
                      <Select.Item label="large" value="L" />
                      <Select.Item label="extra large" value="XL" />
                    </Select>
                  </Box>
                </Center>
              </View>
            </View>
            <Text style={styles.text}>Stock</Text>
            <TextInput
              style={styles.input_bottom}
              value={stock}
              placeholder={`${stock}`}
              keyboardType="numeric"
              placeholderTextColor="black"
              onChangeText={e => {
                setStock(e), console.log(e);
              }}
            />
            <Text style={styles.text}>Description</Text>
            <TextInput
              style={[styles.input_bottom, {width: 280}]}
              value={description}
              placeholder="Describe your product min. 150 characters"
              keyboardType="none"
              placeholderTextColor="#9F9F9F"
              onChangeText={e => {
                setDescription(e), console.log(e);
              }}
            />
          </View>
          <ButtonOpacity
            color={'#6A4029'}
            text="Save"
            radius={20}
            colorText="white"
            height={50}
            width={'70%'}
            marginBottom={10}
            marginTop={20}
            // onPress={postRegister}
            onPressHandler={{
              onPress: () => {
                setShowAdd(true);
              },
              // onPressIn: () => console.log('Pressed In'),
              // onPressOut: () => console.log('Pressed Out'),
              // onLongPress: () => navigation.popToTop(),
            }}
          />
        </View>
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
              <Modal.Body>do you want to delete this product ?</Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    colorScheme="success"
                    width={20}
                    onPress={() => {
                      deleteproduct(), setShowdel(false);
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
      </ScrollView>
    </>
  );
}

export default Edit_Product;
