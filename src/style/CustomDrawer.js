import {StyleSheet} from 'react-native';
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../helpers/Metrics';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -5,
    borderTopRightRadius: 20,
    backgroundColor: '#F2F2F2',
  },
  profile_bar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A4029',
    borderBottomRightRadius: 20,
    width: '100%',
    height: 300,
  },
  img_bar: {
    width: horizontalScale(130),
    height: verticalScale(130),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_profile: {
    borderRadius: 200,
    width: horizontalScale(120),
    height: verticalScale(130),
  },
  name: {
    color: '#fff',
    marginTop: verticalScale(10),
    fontSize: moderateScale(18),
    fontWeight: '900',
    fontFamily: 'Poppins',
  },
  email: {
    color: '#fff',
    fontSize: moderateScale(15),
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  menubar: {
    flex: 1,
    paddingTop: verticalScale(15),
  },
  logout: {
    marginTop: verticalScale(40),
    flex: 1,
    position: 'relative',
  },
});

export default styles;
