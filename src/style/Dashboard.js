import { StyleSheet } from 'react-native';
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../helpers/Metrics';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  month_bar: {
    backgroundColor: '#fff',
    marginTop: verticalScale(40),
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20
  },
  title_month: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label_month: {
    fontSize: moderateScale(24),
    color: '#000',
    fontWeight: '700',
    fontStyle: 'Poppins',
  },
  lastmonth: {
    fontSize: moderateScale(16),
    marginVertical: verticalScale(10),
    color: '#000',
    fontWeight: '700',
    fontStyle: 'Poppins',
  },
  title_goals: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  goals: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 22,
    color: '#000'
  },
  goalsDesc: {
    paddingTop: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 18,
    color: '#000'
  },
  progress_chart: {
    marginLeft: 20
  }
});
export default styles;
