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
        width: '100%',
    },
    image: {
        marginVertical: 20,
    },
    input: {
        borderBottomWidth: 0.2,
        borderWidth: 0,
        fontFamily: 'Poppins',
        fontSize: 14,
        height: 40,
        margin: 12,
        outlineWidth: 4,
        padding: 10,
        width: `90%`,
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