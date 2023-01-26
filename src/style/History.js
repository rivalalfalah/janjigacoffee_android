import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../helpers/Metrics';

const styles = StyleSheet.create({
  container_notfound: {
    alignItems: 'center',
    background: '#F5F5F8',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    marginBottom: 25,
    marginTop: verticalScale(200),
  },
  title: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: moderateScale(30),
    fontWeight: '900',
    lineHeight: 42,
    marginBottom: 8,
  },
  title_info: {
    fontFamily: 'Poppins',
    fontSize: moderateScale(17),
    lineHeight: 26,
    opacity: 0.6,
    textAlign: 'center',
    width: horizontalScale(234),
  },
  // history found
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  title_order: {
    fontWeight: '900',
    color: '#000',
    fontSize: 34,
    fontFamily: 'Poppins',
    textAlign: 'left',
    width: '100%',
  },
  title_bar: {
    marginTop: 30,
  },
  swipeHand: {
    textAlign: 'center',
    marginTop: 25,
    color: 'black',
  },
  no_order: {
    fontSize: 30,
    color:'black'
  },
  warp_order: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
  }
});

export default styles;
