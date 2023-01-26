import {StyleSheet} from 'react-native';
// import bar from "../assets/header/bar.png"
const styles = StyleSheet.create({
  box_search: {
    alignItems: `center`,
    backgroundColor: `#EFEEEE`,
    borderRadius: 50,
    display: `flex`,
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: `100%`,
  },
  category_Coffee: {
    alignItems: `center`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    marginTop: 30,
  },
  content_card_product: {
    marginTop: 60,
  },
  content_home: {
    paddingHorizontal: 30,
  },
  home_background: {
    backgroundColor: `#F2F2F2`,
  },
  input_search: {
    border: 2,
    color: `black`,
    fontSize: 20,
    height: 40,
    margin: 12,
    outline: `none`,
    padding: 10,
    width: `90%`,
  },
  list_product: {
    display: `flex`,
    flexDirection: `row`,
  },
  nav_product: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 30,
    paddingHorizontal: 10,
    textAlign: `center`,
    color: 'black',
  },
  nav_product_black: {
    borderBottomColor: `black`,
    borderBottomWidth: 2,
    color: `black`,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 30,
    paddingHorizontal: 10,
    textAlign: `center`,
  },
  navgiation_bar_product: {
    alignItems: `center`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    marginTop: 30,
  },
  title_coffee: {
    color: `#6A4029`,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
  },
  title_coffee_all: {
    color: `#6A4029`,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    // lineHeight:60,
  },
  title_home: {
    color: `black`,
    fontFamily: 'Poppins',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 60,
  },
  content_admin_button: {
    flexDirection: `row`,
  },
  button_container_admin: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: `center`,
    justifyContent: `center`,
    marginHorizontal: 30,
  },
  icon_plus_admin: {
    color: `#6A4029`,
  },
  button_plus: {
    flexDirection: `row`,
    justifyContent: `center`,
  },
  newproduct_admin1: {
    // backgroundColor: `#FFBA33`,
    fontFamily: 'Poppins',
    fontSize: 40,
    fontWeight: '700',
    marginVertical: 20,
    paddingRight:10
  },
  newproduct_admin2: {
    // backgroundColor: `#FFBA33`,
    fontFamily: 'Poppins',
    fontSize: 40,
    fontWeight: '700',
    marginVertical: 20,
    paddingLeft:10
  },
  admin_add_Dnone: {
    display: `none`,
  },
  admin_add: {
    display: `flex`,
  },
  container_admin_button_add: {
    marginVertical: 40,
  },
  load: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 150,
  },
  loading_style: {
    alignItems: `center`,
    justifyContent: `center`,
  },
  promo_content: {
    flexDirection: `row`
  }
});

export default styles;
