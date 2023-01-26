import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content_all: {
        justifyContent: 'center',
        // alignItems: 'center',

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
        paddingHorizontal: 20,
    },
    content_image: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 200,
    },
    left: {
        marginRight: 40
    },
    content_name: {
        paddingLeft: 10,
    },
    name: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 15,
        color: '#000'
    },
    barista: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        color: '#000'
    },
    online: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: '#000'
    },
    line: {
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(159, 159, 159, 0.32)'
    },
    content_chat: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 20
    },
    content_chatAdmin: {
        flexDirection: 'row-reverse',
        marginTop: 20,
        justifyContent: 'center',
        paddingHorizontal: 26,
        marginRight: 20
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 200,
    },
    img_admin: {
        width: 40,
        height: 40,
        borderRadius: 200,
        marginLeft: 10
    },
    chat: {
        width: '70%',
        height: 115,
        marginLeft: 10,
        backgroundColor: '#FFBA33',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    chat_admin: {
        width: '70%',
        height: 137,
        marginLeft: 10,
        backgroundColor: '#6A4029',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    text: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        paddingHorizontal: 10,
        color: '#000'
    },
    text_admin: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        paddingHorizontal: 10,
        color: '#fff'
    },
    time: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        color: '#9F9F9F'
    },
    content_time: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 80,
        paddingTop: 8,
    },
    content_timeAdmin: {
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        paddingHorizontal: 80,
        paddingTop: 8,
    },
    content_chatSec: {
        marginTop: 10,
        paddingLeft: 35,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content_chatSecAdmin: {
        marginTop: 10,
        paddingLeft: 68,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    imgsec_admin: {
        width: 40,
        height: 40,
        borderRadius: 200,
        marginRight: 10,
    },
    chatSec: {
        width: '70%',
        height: 75,
        backgroundColor: '#6A4029',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    chatSec_admin: {
        width: '70%',
        height: 75,
        backgroundColor: '#FFBA33',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    textSec: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        paddingHorizontal: 10,
        color: '#fff'
    },
    textSec_admin: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        paddingHorizontal: 10,
        color: '#000'
    },
    icon_check: {
        marginRight: 5,
        marginTop: 5
    },
    check_admin: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    icon_admin: {
        marginRight: 14,
    },
    content_check: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    imgsec: {
        width: 40,
        height: 40,
        borderRadius: 200,
        marginLeft: 8,
    },
    content_timeSec: {
        paddingTop: 8,
        paddingLeft: 62,
    },
    content_timeSecAdmin: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 90,
        paddingTop: 8,
    },
    chatTree: {
        width: '70%',
        height: 80,
        marginLeft: 10,
        backgroundColor: '#FFBA33',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    chatTree_admin: {
        width: '70%',
        height: 80,
        marginLeft: 10,
        backgroundColor: '#6A4029',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    chatFour: {
        width: '70%',
        height: 55,
        backgroundColor: '#6A4029',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    chatFour_admin: {
        width: '70%',
        height: 55,
        backgroundColor: '#FFBA33',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    content_text: {
        width: "100%",
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
    },
    search: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    warp: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    warp_one: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    warp_text: {
        borderWidth: 1,
        borderColor: ' rgba(106, 64, 41, 0.5)',
        paddingHorizontal: 5,
        width: '28%',
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Okay: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: '#000'
    }
})

export default styles;