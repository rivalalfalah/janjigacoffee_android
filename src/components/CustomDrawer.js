import {View, Text, Image, ToastAndroid} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from '../style/CustomDrawer';
import Profile from 'react-native-vector-icons/EvilIcons';
import Orders from 'react-native-vector-icons/MaterialCommunityIcons';
// import AllMenu from 'react-native-vector-icons/MaterialIcons';
import Privacy from 'react-native-vector-icons/MaterialCommunityIcons';
import Security from 'react-native-vector-icons/Fontisto';
import Signout from 'react-native-vector-icons/Feather';
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from '../helpers/Metrics';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authAction from '../redux/actions/auth';
const CustomDrawer = props => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.auth.profile);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  // const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const dispatch = useDispatch();
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
        navigation.navigate('Get_Start');
      //   navigation.closeDrawer();
    } catch (error) {
      console.log(error);
    }
  };

  const handleActive1 = () => {
    setActive1(true);
    setActive2(false);
    // setActive3(false);
    setActive4(false);
    setActive5(false);
  };
  const handleActive2 = () => {
    setActive1(false);
    setActive2(true);
    // setActive3(false);
    setActive4(false);
    setActive5(false);
  };
  // const handleActive3 = () => {
  //   setActive1(false);
  //   setActive2(false);
  //   setActive3(true);
  //   setActive4(false);
  //   setActive5(false);
  // };
  // const handleActive4 = () => {
  //   setActive1(false);
  //   setActive2(false);
  //   setActive3(false);
  //   setActive4(true);
  //   setActive5(false);
  // };
  // const handleActive5 = () => {
  //   setActive1(false);
  //   setActive2(false);
  //   setActive3(false);
  //   setActive4(false);
  //   setActive5(true);
  // };
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.profile_bar}>
        <View style={styles.img_bar}>
          <Image
            style={styles.img_profile}
            source={{uri: profile.image}}
            resizeMode={'cover'}
          />
        </View>
        <Text style={styles.name}>{profile.displayname}</Text>
        <Text style={styles.email}>{profile.email}</Text>
      </View>
      <View style={styles.menubar}>
        {/* allmenu */}
        {/* <DrawerItem
          icon={() => (
            <AllMenu
              color={`${active3 ? '#693f29' : '#797979'}`}
              size={25}
              name={'restaurant-menu'}
              brand={'MaterialIcons'}
              type="material"
            />
          )}
          labelStyle={{
            fontSize: moderateScale(16),
            color: `${active3 ? '#693f29' : '#797979'}`,
            fontWeight: '700',
            fontFamily: 'Poppins',
            borderBottomWidth: 0.5,
            paddingBottom: verticalScale(10),
            borderBottomColor: `${active3 ? '#693f29' : '#f2f2f2'}`,
            marginLeft: -15,
          }}
          label={'Home'}
          onPress={() => {
            navigation.goBack();
            handleActive3();
          }}></DrawerItem> */}
        {profile.role === 'admin' ? null : (
          <DrawerItem
            icon={() => (
              <Profile
                color={`${active1 ? '#693f29' : '#797979'}`}
                size={25}
                name={'user'}
                brand={'EvilIcons'}
                type="material"
              />
            )}
            label={'Edit Profile'}
            labelStyle={{
              fontSize: moderateScale(16),
              color: `${active1 ? '#693f29' : '#797979'}`,
              fontWeight: '700',
              fontFamily: 'Poppins',
              borderBottomWidth: 0.5,
              paddingBottom: verticalScale(10),
              borderBottomColor: `${active1 ? '#693f29' : '#f2f2f2'}`,
              marginLeft: -15,
            }}
            // inactiveBackgroundColor={active1 ? 'salmon' : '#f2f2f2'}
            onPress={() => {
              navigation.navigate('ProfileEdit');
              handleActive1();
            }}></DrawerItem>
        )}

        <DrawerItem
          icon={() => (
            <Orders
              color={`${active2 ? '#693f29' : '#797979'}`}
              size={25}
              name={'cart-arrow-down'}
              brand={'MaterialCommunityIcons'}
              type="material"
            />
          )}
          // inactiveBackgroundColor={active2 ? 'salmon' : '#f2f2f2'}
          labelStyle={{
            fontSize: moderateScale(16),
            color: `${active2 ? '#693f29' : '#797979'}`,
            fontWeight: '700',
            fontFamily: 'Poppins',
            borderBottomWidth: 0.5,
            paddingBottom: verticalScale(10),
            borderBottomColor: `${active2 ? '#6A4029' : '#f2f2f2'}`,
            marginLeft: -15,
          }}
          label={profile.role === 'admin' ? 'management order' : 'Orders'}
          onPress={
            profile.role === 'admin'
              ? () => {
                  navigation.navigate('History');
                  handleActive2();
                }
              : () => {
                  navigation.navigate('Cart');
                  handleActive2();
                }
          }></DrawerItem>
        {/* privacy */}
        <DrawerItem
          icon={() => (
            <Privacy
              color={`${active4 ? '#693f29' : '#797979'}`}
              size={25}
              name={'sticker-text-outline'}
              brand={'MaterialIcons'}
              type="material"
            />
          )}
          labelStyle={{
            fontSize: moderateScale(16),
            color: `${active4 ? '#693f29' : '#797979'}`,
            fontWeight: '700',
            fontFamily: 'Poppins',
            borderBottomWidth: 0.5,
            paddingBottom: verticalScale(10),
            borderBottomColor: `${active4 ? '#693f29' : '#f2f2f2'}`,
            marginLeft: horizontalScale(-15),
          }}
          label={profile.role === 'admin' ? 'Sales report' : 'Privacy policy'}
          onPress={() => {
            profile.role === 'admin'
              ? navigation.navigate('SalesReport')
              : ToastAndroid.showWithGravity(
                  'coming soon',
                  ToastAndroid.LONG,
                  ToastAndroid.TOP,
                );
          }}></DrawerItem>
        {/* security */}
        <DrawerItem
          icon={() => (
            <Security
              style={{marginLeft: 3}}
              color={`${active5 ? '#693f29' : '#797979'}`}
              size={25}
              name={'shield'}
              brand={'Fontisto'}
              type="material"
            />
          )}
          labelStyle={{
            fontSize: moderateScale(16),
            color: `${active5 ? '#693f29' : '#797979'}`,
            fontWeight: '700',
            fontFamily: 'Poppins',
            marginLeft: -15,
          }}
          label={'Security'}
          onPress={() => {profile.role === 'admin'?
            navigation.navigate('LocalPush'):
            ToastAndroid.showWithGravity(
              'coming soon',
              ToastAndroid.LONG,
              ToastAndroid.TOP,
            );
          }}></DrawerItem>
        <View style={styles.logout}>
          <DrawerItem
            icon={() => (
              <Signout
                style={{
                  position: 'absolute',
                  left: 80,
                  top: 2,
                }}
                color={'#6A4029'}
                size={25}
                name={'arrow-right'}
                brand={'Feather'}
                type="material"
              />
            )}
            labelStyle={{
              fontSize: moderateScale(16),
              color: '#6A4029',
              fontWeight: '700',
              fontFamily: 'Poppins',
              position: 'absolute',
              left: -30,
              top: -10,
            }}
            label={'Sign-out'}
            onPress={Logout}></DrawerItem>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
