import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screen

import Home from '../screen/Home';
// import ProductDetail from '../screen/ProductDetail';
import Cart_Page from '../screen/Cart';
// import Cupon from '../screen/Cupon';


// import Edit_Promo_Admin from '../screen/Edit_Promo';
import CustomDrawer from '../components/CustomDrawer';
import LocalPush from '../screen/LocalPush';
// import Dashboard from '../screen/Dashboard';
// icon
// import Cart from 'react-native-vector-icons/Feather';
import ButtonLeft from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
// import {moderateScale} from '../helpers/Metrics';
// import {StyleSheet} from 'react-native';
// import btn_left from '../assets/btn_left.png';
const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName='MainScreen'
      screenOptions={{
        headerShown: false,
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 1,
        },
      }}>
      <Drawer.Screen name="MainScreen" component={Home} />
      {/* <Drawer.Screen name="ProductDetail" component={ProductDetail} 
      options={{headerShown: true}}/> */}
      <Drawer.Screen
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
                navigation.navigate('MainScreen');
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="LocalPush"
        component={LocalPush}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

// const styles = StyleSheet.create({});
