import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  all_container: {
    marginLeft: '10%',
    width: '80%',
    marginTop: '20%',
  },
  container_up: {
    alignItems: 'center',
  },
  input_bottom: {
    borderBottomWidth: 1,
    borderColor: `#BCBABA`,
    borderWidth: 0,
    fontFamily: 'Poppins',
    fontSize: 10,
    // marginTop:10,
    marginBottom:20,
    outlineWidth: 4,
    width: `100%`,
    color: 'black',
    fontWeight: '400',
  },
  text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 17,
    fontWeight: '900',
  },
  image: {
    borderRadius: 200,
    width: 150,
    height: 150,
    marginTop:10,
  },
  container_promo_input: {
    marginTop:20,
    // marginBottom:30,
  },
  input_bottom_valid: {
    borderBottomWidth: 1,
    borderColor: `#BCBABA`,
    borderWidth: 0,
    fontFamily: 'Poppins',
    fontSize: 14,
    paddingTop:20,
    paddingBottom:20,
    outlineWidth: 4,
    width: `100%`,
    color: 'black',
    fontWeight: '400',
  },
  preview_left: {
    paddingRight:20
  },
  title_1 : {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 14,
    fontWeight: '700',
  },
  title_2 : {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 14,
    fontWeight: '400',
    paddingVertical:5
  },
  title_3 : {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 14,
    fontWeight: '400',
  },
  image_preview: {
    width: 70,
    height: 70,
    borderRadius:20
  }
});

export default styles;
