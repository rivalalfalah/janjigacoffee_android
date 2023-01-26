import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content_all: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    content_chat: {
        marginTop: 100,
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
    talk: {
        paddingTop: 20,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: '#000'
    },
    content_image: {
        width: "90%",
        marginTop: 30,
    },
    content_img: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    icon_cheryn: {
        borderRadius: 200
    },
    content_name: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    name: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: '#000'
    },
    line: {
        paddingTop: 50,
        borderBottomWidth: 1,
        width: '100%',
        borderColor: '#E0E0E2'
    },
    content_message: {
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-start`,
        width: `90%`,
        paddingTop: 30,
        paddingLeft: 22

    },
    message: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        color: '#000'
    },
    warp_message: {
        width: '90%',
        marginTop: 30,
        paddingHorizontal: 20,
    },
    img_content: {
        width: '85%',
        flexDirection: 'row',

    },
    img_contentSec: {
        width: '100%',
        flexDirection: 'row',
    },
    warp_name: {
        paddingLeft: 10,
        width: '100%'
    },
    jason: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 14,
        color: '#000'
    },
    text_chat: {
        paddingTop: 10,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: '#000'
    },
    day: {
        paddingTop: 5,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: ' #9A9A9D'
    },
    conversation: {
        paddingVertical: 25,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: ' #9A9A9D'
    }
})

export default styles;