import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chat_navbar: {
    marginHorizontal: 10,
  },
  container_navbar: {
    alignItems: `center`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: 20,
  },
  navbar_right: {
    alignItems: `center`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
  },
  profile_image_navbar: {
    borderRadius: 50,
    marginHorizontal: 10,
    width: 30,
    height: 30,
  },
  shopping_navbar: {
    marginHorizontal: 10,
  },
});

export default styles;
