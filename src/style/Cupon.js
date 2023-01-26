import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content_all: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: "100%",
    },
    content_cupon: {
        marginTop: 80,
        width: "90%",
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 40,
        backgroundColor: '#FFF'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        paddingLeft: 10,
    },
    text_claim: {
        paddingTop: 25,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        color: '#000'
    },
    no_cupon: {
        paddingTop: 60,
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 15,
        color: '#895537',
    },
    content_card: {
        width: '100%',
    },
    no_cupon_container: {
        flexDirection:'row',
        justifyContent:'center'
    }
})

export default styles;