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
import {addProduct} from '../utils/axios';
import camera_default from '../assets/add/camera.png';
import {useNavigation} from '@react-navigation/native';
import authAction from '../redux/actions/auth';
import { useDispatch } from 'react-redux';

function NewProduct() {
  const dispatch = useDispatch()

  const navigation = useNavigation();

  const [filePath, setFilePath] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  // const [choosePhoto, setChoosePhoto] = useState(false);

  const show = () => {
    setShowModal(true);
  };

  const returnInitial = () => {
    setFilePath(
      null,
    ),
      setImage(null),
      setName(''),
      setCategory(''),
      setSize(''),
      setPrice(''),
      setStock(''),
      setDescription('');
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

  const saveHandle = async () => {
    try {
      const getToken = await AsyncStorage.getItem('token');
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category', category);
      formData.append('size', size);
      formData.append('price', price);
      formData.append('stock', stock);
      formData.append('description', description);
      formData.append('image', {
        name: image[0].fileName,
        type: image[0].type,
        uri: image[0].uri,
      });
      await addProduct(getToken, formData);
      await returnInitial();
      ToastAndroid.showWithGravity(
        'Success add product',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravity(
        error.response.data.msg,
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

  useEffect(() => {
    getProfile()
  
  }, [])
  

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
        <View style={styles.all_container}>
          <View style={styles.container_up}>
            <Image source={filePath !== null ? {uri: filePath} : camera_default} style={styles.image} />
            <ButtonOpacity
              color={'#000000'}
              text="Add picture"
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
                setName(e), console.log(e);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Type product price"
              value={price}
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={e => {
                setPrice(e), console.log(e);
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>input category</Text>
            <View>
              <Center>
                <Box maxW="300">
                  <Select
                    selectedValue={category}
                    minWidth="2xs"
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
            </View>
            <Text style={styles.text}>Input size</Text>
            <View style={{width: '90%'}}>
              <Center>
                <Box maxW="300">
                  <Select
                    selectedValue={size}
                    minWidth="2xs"
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
            <Text style={styles.text}>Stock</Text>
            <TextInput
              style={styles.input_bottom}
              value={stock}
              placeholder="input stock"
              keyboardType="numeric"
              placeholderTextColor="#9F9F9F"
              onChangeText={e => {
                setStock(e), console.log(e);
              }}
            />
            <Text style={styles.text}>Description</Text>
            <TextInput
              style={styles.input_bottom}
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
            text="save"
            radius={20}
            colorText="white"
            height={70}
            width={'70%'}
            marginBottom={10}
            marginTop={20}
            // onPress={postRegister}
            onPressHandler={{
              onPress: () => {
                setShowAdd(true), console.log(showAdd);
              },
              // onPressIn: () => console.log('Pressed In'),
              // onPressOut: () => console.log('Pressed Out'),
              // onLongPress: () => navigation.popToTop(),
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default NewProduct;
