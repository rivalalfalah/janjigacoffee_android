import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Content_product: {
    alignItems: `center`,
    backgroundColor: `white`,
    borderRadius: 20,
    display: `flex`,
    flexDirection: `column`,
    width: `100%`,
    marginBottom: 50,
  },
  size: {
    textAlign: `center`,
    color: `#6A4029`,
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: `900`,
  },
  gap_product: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: '5%',
    marginBottom: 20,
  },
  image_product: {
    borderRadius: 100,
    height: 120,
    top: -50,
    width: 120,
  },
  name: {
    color: `black`,
    fontFamily: 'Poppins',
    fontSize: 22,
    fontWeight: `700`,
    lineHeight: 30,
    paddingHorizontal: 20,
    textAlign: `center`,
    width: 150,
    height: 80,
  },
  price: {
    color: `#6A4029`,
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 30,
    paddingHorizontal: 10,
    textAlign: `center`,
  },
  text: {
    top: '-15%',
  },
});

export default styles;
