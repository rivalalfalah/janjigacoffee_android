import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../helpers/Metrics';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  deliver_desc: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: moderateScale(15),
    opacity: 0.5,
  },
  img_bar: {
    flex: 1,
    paddingTop: verticalScale(30),
  },
  img_product: {
    borderRadius: 200,
    width: 200,
    height: 200,
  },
  name_product: {
    color: '#000',
    fontSize: moderateScale(28),
    fontWeight: '900',
    marginTop: verticalScale(30),
  },
  price: {
    color: '#6A4029',
    fontFamily: 'Poppins',
    fontSize: moderateScale(22),
    fontWeight: '700',
  },
  text_bar: {
    marginBottom: verticalScale(30),
    width: '90%',
  },
  title_info: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
  },
  desc_text: {
    color: 'black',
  },
});

export default styles;
