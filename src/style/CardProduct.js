import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Content_product: {
    alignItems:`center`,
    backgroundColor:`white`,
    borderRadius:20,
    display:`flex`,
    flexDirection:`column`,
    width:`100%`,
    marginBottom:50
  },
  background_card: {
  },
  size: {
    textAlign: `center`,
    color: `#6A4029`,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight:`900`
  },
  gap_product: {
    marginLeft:10,
    marginRight:10
  },
  image_product: {
    borderRadius:20,
    height:120,
    top:-30,
    width:120,
  },
  name: {
    color:`black`,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: `900`,
    height:100,
    lineHeight:30,
    paddingHorizontal:20,
    textAlign:`center`,
    width:150,
    
  },
  price: {
    color: `#6A4029`,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight:30,
    marginBottom:20,
    paddingHorizontal:10,
    textAlign:`center`,
  }
});

export default styles;
