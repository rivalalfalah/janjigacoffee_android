import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

import bar from '../assets/header/bar.png';
import chat from '../assets/header/chat.png';
import shopping from '../assets/header/shopping.png';
import styles from '../style/Header';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const profile = useSelector(state => state.auth.profile);

  return (
    <View>
      <View style={styles.container_navbar}>
        <TouchableOpacity
          style={styles.navbar_left}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image source={bar} />
        </TouchableOpacity>
        <View style={styles.navbar_right}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <Image source={chat} style={styles.chat_navbar}></Image>
          </TouchableOpacity>
          {profile.role === 'admin'?null:<TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image source={shopping} style={styles.shopping_navbar}></Image>
          </TouchableOpacity>}
          {profile.role === 'admin'?null:<TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              source={{uri: `${profile.image}`}}
              style={styles.profile_image_navbar}
            />
          </TouchableOpacity>}
        </View>
      </View>
      {/* Give Drawer In here */}
    </View>
  );
};

export default Header;
