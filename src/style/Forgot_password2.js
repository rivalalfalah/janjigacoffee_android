import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bottom_text: {
        color: `black`,
        fontFamily: `Poppins`,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        paddingTop: 5,
        textAlign: 'center',
    },
    content_all: {
        alignItems: 'center',
        flex: 1,
        // paddingHorizontal: 40,
        justifyContent: 'center',
        paddingTop: 50,
    },
    image: {
        marginVertical: 20,
    },
    title_user: {
        color: `black`,
        fontFamily: `Poppins`,
        fontSize: 14,
        fontWeight: '400',
        paddingTop: 5,
        textAlign: 'center',
        width: '55%',
    },
    title_welcome: {
        color: `black`,
        fontFamily: `Poppins`,
        fontSize: 65,
        fontWeight: '700',
        lineHeight: 56.44,
        paddingTop: 15,
        textAlign: 'center',
        width: '50%',
    },
});

export default styles;