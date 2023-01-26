import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  all_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 30,
  },
  container_up: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: `#BCBABA`,
    borderWidth: 0,
    fontFamily: 'Poppins',
    fontSize: 10,
    height: 40,
    margin: 12,
    outlineWidth: 4,
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontWeight: '400',
    width: '80%',
  },
  input_bottom: {
    borderBottomWidth: 1,
    borderColor: `#BCBABA`,
    borderWidth: 0,
    fontFamily: 'Poppins',
    fontSize: 10,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    outlineWidth: 4,
    padding: 10,
    color: 'black',
    fontWeight: '400',
  },
  text: {
    color: `black`,
    fontFamily: `Poppins`,
    textAlign: 'left',
    fontSize: 17,
    fontWeight: '900',
  },
  image: {
    borderRadius: 200,
    width: 150,
    height: 150,
    marginTop: 10,
  },
});

export default styles;
