import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';
import React, { useState} from 'react';
import Header from '../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../style/Home';
import search_icon from '../assets/header/search.png';
import CardProduct from '../components/CardProduct';
import axios from 'axios';
import ArrowRightSec from 'react-native-vector-icons/AntDesign';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {URLBE} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authAction from '../redux/actions/auth';

const Home = () => {
  const dispatch = useDispatch()

  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [navFav, setNavFav] = useState(false);
  const [navCoff, setNavCoff] = useState(true);
  const [navNonCoff, setNavNonCoff] = useState(true);
  const [navFood, setFood] = useState(true);
  const [navadd, setNavadd] = useState(true);
  const [category, setCategory] = useState('favorite');
  const [sort, setSort] = useState('favorite');
  const [product, setProduct] = useState([]);
  const [notfound, setNotfound] = useState('');
  const [showadmin, setShowadmin] = useState(true);
  const [loading, setLoading] = useState(true);

  const profile = useSelector(state => state.auth.profile);
  const valueSearch = e => {
    setNavFav(true),
      setNavCoff(true),
      setNavNonCoff(true),
      setNavadd(true),
      setFood(true),
      setCategory(''),
      setSort(''),
      setSearch(e),
      console.log(e);
  };

  const handleshowAdmin = () => {
    setShowadmin(!showadmin);
  };

  // link active
  const navActive1 = () => {
    setNavFav(false),
      setNavCoff(true),
      setNavNonCoff(true),
      setNavadd(true),
      setFood(true),
      setCategory('favorite'),
      setSort('favorite'),
      setSearch('')
  };
  const navActive2 = () => {
    setNavCoff(false),
      setNavFav(true),
      setNavNonCoff(true),
      setNavadd(true),
      setFood(true),
      setCategory('coffee'),
      setSort('cheapest');
    setSearch(search);
  };
  const navActive3 = () => {
    setNavNonCoff(false),
      setNavFav(true),
      setNavCoff(true),
      setNavadd(true),
      setFood(true),
      setCategory('non_coffee'),
      setSort();
    setSearch(search);
  };
  const navActive4 = () => {
    setNavadd(false),
      setNavFav(true),
      setNavCoff(true),
      setNavNonCoff(true),
      setFood(true),
      setCategory('addon');
    setSort();
    setSearch(search);
  };
  const navActive5 = () => {
    setFood(false),
      setNavadd(true),
      setNavFav(true),
      setNavCoff(true),
      setNavNonCoff(true),
      setCategory('foods'),
      setSort();
    setSearch(search);
  };

  const getProfile = async () => {
    try {
      // const removeToken = await AsyncStorage.removeItem('token');
      const getToken = await AsyncStorage.getItem('token');
      console.log(getToken)
      dispatch(authAction.userIDThunk(getToken));
    } catch (error) {
      console.log(error);
      navigation.replace('Get_Start');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfile(),
      setTimeout(() => {
        // console.log(category, sort, search);
        setLoading(true)
        axios
          .get(
            `${URLBE}/product?category=${category}&sorting=${sort}&page=1&limit=10&name_product=${search}`,
          )
          .then(res => {
            console.log(res.data);
            setLoading(false)
            setProduct(res.data.result.data), setNotfound(search);
          })
          .catch(err => {
            setNotfound(err.response.data.msg);
            setLoading(false)
          });
      }, 1000);
      return () => {
        setProduct([])
      };
    }, [category,search]),
  );


  // console.log(search)
  // console.log(category)
  // console.log(notfound)
  return (
    <ScrollView>
      <View style={styles.home_background}>
        {/* Header */}
        <Header />
        {/* Content Home */}
        <View style={styles.content_home}>
          {/* title */}
          <View>
            <Text style={styles.title_home}>A good coffee is a good day</Text>
          </View>

          {/* Search bar */}
          <View>
            <View style={styles.box_search}>
              <Image source={search_icon}></Image>
              <TextInput
                style={styles.input_search}
                placeholder="Search"
                onChangeText={valueSearch}
                value={search}
                placeholderTextColor="#9F9F9F"
              />
            </View>
          </View>
          {/* Navigasi Product */}
          <View>
            <View style={styles.navgiation_bar_product}>
              <Text
                style={navFav ? styles.nav_product : styles.nav_product_black}
                onPress={navActive1}>
                Favorite
              </Text>
              <Text
                style={navCoff ? styles.nav_product : styles.nav_product_black}
                onPress={navActive2}>
                Coffee
              </Text>
              <Text
                style={
                  navNonCoff ? styles.nav_product : styles.nav_product_black
                }
                onPress={navActive3}>
                Non Coffee
              </Text>
              <Text
                style={navFood ? styles.nav_product : styles.nav_product_black}
                onPress={navActive5}>
                Foods
              </Text>
              <Text
                style={navadd ? styles.nav_product : styles.nav_product_black}
                onPress={navActive4}>
                Add-ons
              </Text>
            </View>
          </View>

          {/* Category Coffee */}
          <View>
            <View style={styles.category_Coffee}>
              <Text style={styles.title_coffee}>
                {category === 'coffee'
                  ? 'Coffee'
                  : category === 'favorite'
                  ? 'favorite'
                  : category === 'non_coffee'
                  ? 'Non Coffee'
                  : category === 'foods'
                  ? 'Foods'
                  : category === 'addon'
                  ? 'Add-on'
                  : 'All'}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('See_All', {
                    category: category,
                    sort: sort,
                  });
                }}>
                <Text style={styles.title_coffee_all}>See All</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card Product */}
          <ScrollView horizontal={true}>
            <View style={styles.content_card_product}>
              <View style={styles.list_product}>
                {/* product.length < 0 || notfound !== "Product Not Found" ? (<Text>Not Found Product</Text>) : */}
                {notfound === 'Product Not Found' ? (
                  <Text style={{color:'black'}}>Not Found Product</Text>
                ) : loading ? (
                  <View style={styles.load}>
                    <ActivityIndicator
                      style={styles.loading_style}
                      size="large"
                      color="#0000ff"
                    />
                  </View>
                ) : (
                  product.map((e, index) => (
                    <CardProduct
                      key={index}
                      id={e.id}
                      name={e.name}
                      image_product={e.image}
                      price={e.price}
                      size={e.size}
                    />
                  ))
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      {profile.role === 'admin' ? (
        <View styles={styles.container_admin_button_add}>
          <View style={styles.content_admin_button}>
            <View style={styles.button_plus}>
              <TouchableOpacity
                onPress={handleshowAdmin}
                style={styles.button_container_admin}>
                <ArrowRightSec
                  style={styles.icon_plus_admin}
                  brand={'AntDesign'}
                  name="pluscircle"
                  size={30}
                  type="material"
                />
              </TouchableOpacity>
            </View>
            <View style={showadmin ? styles.admin_add_Dnone : styles.admin_add}>
              <View style={styles.newproduct_admin}>
                <Button
                  color="#FFBA33"
                  title="New product"
                  onPress={() => navigation.navigate('NewProduct')}
                />
              </View>
              <View style={styles.promo_content}>
                <View style={styles.newproduct_admin1}>
                  <Button
                    color="#FFBA33"
                    title="New Promo"
                    onPress={() => navigation.navigate('New_Promo')}
                  />
                </View>
                <View style={styles.newproduct_admin2}>
                  <Button
                    color="#FFBA33"
                    title="Edit Promo"
                    onPress={() => navigation.navigate('Cupon_Admin')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default Home;
