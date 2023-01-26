import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content_all: {
        alignItems: 'center',
        flex: 1,
        // paddingHorizontal: 40,
        justifyContent: 'center',
    },
    content_google: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
    },
    content_line: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
    },
    content_login: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    forgot: {
        color: '#895537',
        fontFamily: 'Poppins',
        fontSize: 12,
        justifyContent: 'flex-start',
        paddingTop: 10,
        textDecorationLine: 'underline',
    },
    forgot_pass_box: {
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-start`,
        width: `90%`,
    },
    icon_google: {
        left: 70,
        position: 'absolute',
        top: 40,
        zIndex: 1,
    },
    icon_login: {
        marginHorizontal: 0,
        marginVertical: 0,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: `#BCBABA`,
        borderWidth: 0,
        fontFamily: 'Poppins',
        fontSize: 14,
        height: 40,
        margin: 12,
        outlineWidth: 4,
        padding: 10,
        width: `90%`,
        color:'black'
    },
    line: {
        borderWidth: 0.3,
        height: 1,
        marginTop: 10,
        width: '32%',
    },
    text_login: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 50,
        fontWeight: '700',
    },
    text_with: {
        color: `#9A9A9D`,
        fontFamily: 'Poppins',
        fontSize: 14,
        paddingHorizontal: 12,
    },
});

export default styles;