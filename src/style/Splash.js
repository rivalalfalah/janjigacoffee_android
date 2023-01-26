import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  btn_start_bar: {
    alignItems: 'center',
    backgroundColor: `#6A4029`,
    borderRadius: 20,
    color: `#FFFFFF`,
    fontFamily: 'Poppins',
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '90%',
  },
  btn_text: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: '700',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    alignItems: 'center',
    height: 380,
    justifyContent: 'center',
    marginBottom: 40,
    objectFit: 'cover',
  },
  title_center: {
    textAlign:'center',
    color: `black`,
    fontFamily: 'Poppins',
    fontSize: 65,
    fontWeight: '900',
    paddingBottom: 75,
  },
});

export default styles;
