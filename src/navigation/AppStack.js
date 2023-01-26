import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerStack from './DrawerStack';

import Cart from 'react-native-vector-icons/Feather';
import ButtonLeft from 'react-native-vector-icons/Feather';

import Splash from '../screen/Splash';
import Get_Start from '../screen/Get_Start';
import Register from '../screen/Register';
import Login from '../screen/Login';
import Forgot_password from '../screen/Forgot_password';
import ProductDetail from '../screen/ProductDetail';
import Cart_Page from '../screen/Cart';
import ProfileEdit from '../screen/ProfileEdit';
import Profile from '../screen/Profile';
import Delivery from '../screen/Delivery';
import Forgot_password2 from '../screen/forgot_password2';
import History from '../screen/History';
import See_All from '../screen/See_All';
import NoInternet from '../screen/NoInternet';
import Payment from '../screen/Payment';
import Coupon_Admin from '../screen/Coupon_Admin';
import NewProduct from '../screen/NewProduct';
import Chat_Room from '../screen/Chat_Room';
import New_Promo from '../screen/New_Promo';

import {useNavigation} from '@react-navigation/core';
import {moderateScale} from '../helpers/Metrics';
import Cupon from '../screen/Cupon';
import {useSelector} from 'react-redux';
import Edit_Promo_Admin from '../screen/Edit_Promo';
import Edit_Product from '../screen/Edit_Product';
import Chat from '../screen/Chat';
import Dashboard from '../screen/Dashboard';
// import Home from '../screen/Home';

const Stack = createStackNavigator();
const AppStack = () => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.auth.profile);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Get_Start"
        component={Get_Start}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot_password"
        component={Forgot_password}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          swipeEnabled: false,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTitleAlign: 'center',
          headerTitle: 'product Detail',
          // example use icon

          headerRight: () => (
            <Cart
              style={{
                marginRight: 20,
              }}
              color="#000"
              brand={'Feather'}
              name="shopping-cart"
              onPress={() => navigation.navigate('Cart')}
              size={25}
              type="material"
            />
          ),
          headerLeft: props => (
            <ButtonLeft
              style={{
                marginLeft: 15,
              }}
              {...props}
              color="#000"
              brand={'Feather'}
              name="chevron-left"
              size={25}
              type="material"
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      {/* <Stack.Screen name="Get_Start" component={Get_Start} /> */}
      <Stack.Screen
        name="Cart"
        component={Cart_Page}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontWeight: '700',
            fontSize: 20,
          },
          headerTitle: 'My Cart',
          headerLeft: props => (
            <ButtonLeft
              style={{
                marginLeft: 15,
              }}
              {...props}
              color="#000"
              brand={'Feather'}
              name="chevron-left"
              size={25}
              type="material"
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Cupon"
        component={Cupon}
        options={{
          headerShown: true,
          headerTitle: 'My Coupons',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#6A4029',
            fontWeight: '700',
            fontSize: moderateScale(22),
          },
          // headerTransparent: true,
          // headerBackImageSource: {btn_left},
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerLeft: () => (
            <>
              <ButtonLeft
                style={{
                  marginLeft: 15,
                }}
                color="#6A4029"
                brand={'Feather'}
                name="chevron-left"
                // onLongPress={() => console.log('onLongPress()')}
                onPress={() => navigation.goBack()}
                size={25}
                type="material"
              />
            </>
          ),
        }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
          headerTitleAlign: 'center',
          drawerActiveTintColor: '#797979',
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTitleStyle: {
            color: '#6A4029',
            fontWeight: '700',
            fontSize: moderateScale(22),
          },
          headerLeft: props => (
            <ButtonLeft
              {...props}
              style={{marginLeft: 15}}
              color="#6A4029"
              brand={'Feather'}
              name="chevron-left"
              size={25}
              type="material"
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTitle: 'My profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#6A4029',
            fontWeight: '700',
            fontSize: moderateScale(22),
          },
          // headerTransparent: true,
          // headerBackImageSource: {btn_left},
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerLeft: () => (
            <>
              <ButtonLeft
                style={{
                  marginLeft: 15,
                }}
                color="#6A4029"
                brand={'Feather'}
                name="chevron-left"
                onPress={() => navigation.goBack()}
                size={25}
                type="material"
              />
            </>
          ),
        }}
      />
      <Stack.Screen name="NewProduct"
        component={NewProduct}
        options={{
          headerShown: true,
          headerTitle: 'New Product',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontWeight: '700',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
        }} />
      <Stack.Screen name="New_Promo"
        component={New_Promo}
        options={{
          headerShown: true,
          headerTitle: 'New Promo',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontWeight: '700',
            fontSize: 20,
          },
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
        }} />
      <Stack.Screen name="NoInternet" component={NoInternet} />
      <Stack.Screen name="Chat"
        component={Chat}
        options={{
          headerShown: true,
          headerTitle: 'Chat',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontWeight: '700',
            fontSize: 20,
          },
          headerTransparent: true,
          headerStyle: {backgroundColor: 'rgb(242, 242, 242)'},
          headerLeft: props => (
            <ButtonLeft
              style={{
                marginLeft: 15,
              }}
              {...props}
              color="#000"
              brand={'Feather'}
              name="chevron-left"
              size={25}
              type="material"
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        }} />
      <Stack.Screen name="SalesReport"
        component={Dashboard}
        headert
        options={{
          headerShown: true,
          headerTitle: 'Sales Chart',
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTitleAlign: 'center',
          headerLeft: props => (
            <ButtonLeft
              style={{
                marginLeft: 15,
              }}
              {...props}
              color="#000"
              brand={'Feather'}
              name="chevron-left"
              size={25}
              type="material"
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        }} />
      <Stack.Screen name="Forgot_password2" component={Forgot_password2} />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'rgb(242, 242, 242)'},
          headerTitleStyle: {
            color: 'black',
            fontWeight: '700',
            fontSize: moderateScale(22),
          },
          headerTitle: 'Payment',
        }}
      />
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={{
          headerShown: true,
          headerTitle: 'Checkout',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontWeight: '700',
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerLeft: () => (
            <>
              <ButtonLeft
                style={{
                  marginLeft: 15,
                }}
                color="#000"
                brand={'Feather'}
                name="chevron-left"
                onLongPress={() => console.log('onLongPress()')}
                onPress={() => navigation.goBack()}
                size={25}
                type="material"
              />
            </>
          ),
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: true,
          headerTitle: `${
            profile.role === 'admin' ? 'Customer Order' : 'History'
          }`,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: props => (
            <ButtonLeft
              style={{
                marginLeft: 15,
              }}
              {...props}
              color="#000"
              brand={'Feather'}
              name="chevron-left"
              size={25}
              type="material"
              onPress={() => {
                // Do something
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
                name="Chat_Room"
                component={Chat_Room}
                options={{
                  headerShown: false,
                }}
      />
      <Stack.Screen
        name="See_All"
        component={See_All}
        options={{
          headerShown: true,
          headerTitle: 'Product All',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black',
            fontWeight: '700',
            fontSize: 20,
          },
          headerStyle: {backgroundColor: 'rgb(242, 242, 242)'},
        }}
      />
      <Stack.Screen
        name="Edit_Promo_Admin"
        component={Edit_Promo_Admin}
        options={{
          headerShown: true,
          headerTitle: 'Edit Promo',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#6A4029',
            fontWeight: '700',
            fontSize: moderateScale(22),
          },
          // headerTransparent: true,
          // headerBackImageSource: {btn_left},
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerLeft: () => (
            <>
              <ButtonLeft
                style={{
                  marginLeft: 15,
                }}
                color="#6A4029"
                brand={'Feather'}
                name="chevron-left"
                onLongPress={() => console.log('onLongPress()')}
                onPress={() => navigation.goBack()}
                size={25}
                type="material"
              />
            </>
          ),
        }}
      />
      <Stack.Screen
        name="Cupon_Admin"
        component={Coupon_Admin}
        options={{
          headerShown: true,
          headerTitle: 'All Coupon',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#6A4029',
            fontWeight: '700',
            fontSize: moderateScale(22),
          },
          // headerTransparent: true,
          // headerBackImageSource: {btn_left},
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerLeft: () => (
            <>
              <ButtonLeft
                style={{
                  marginLeft: 15,
                }}
                color="#6A4029"
                brand={'Feather'}
                name="chevron-left"
                onLongPress={() => console.log('onLongPress()')}
                onPress={() => navigation.goBack()}
                size={25}
                type="material"
              />
            </>
          ),
        }}
      />
      <Stack.Screen
        name="Edit_Product"
        component={Edit_Product}
        options={{
          headerShown: true,
          headerTitle: 'Edit Product',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#6A4029',
            fontWeight: '700',
            fontSize: moderateScale(22),
          },
          // headerTransparent: true,
          // headerBackImageSource: {btn_left},
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerLeft: () => (
            <>
              <ButtonLeft
                style={{
                  marginLeft: 15,
                }}
                color="#6A4029"
                brand={'Feather'}
                name="chevron-left"
                onLongPress={() => console.log('onLongPress()')}
                onPress={() => navigation.goBack()}
                size={25}
                type="material"
              />
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
