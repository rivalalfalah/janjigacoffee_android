import { View, Text, Image, TextInput,ScrollView } from 'react-native'
import React from 'react'
import styles from "../style/Chat_Room";
import ArrowLeft from 'react-native-vector-icons/AntDesign';
import icon_cheryn from "../assets/chat/icon_cheryn.png";
import icon_check from "../assets/chat/icon_check.png";
import icon_camera from "../assets/chat/icon_camera.png";
import icon_admin from "../assets/chat/icon_admin.png";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const Chat_Room = () => {
    const navigation = useNavigation()
    const profile = useSelector(state => state.auth.profile);
  return (
    <ScrollView>
    <View style={styles.content_all}>
    {profile.role === 'admin' ? <View style={styles.content}>
            <ArrowLeft style={styles.left} onPress={() => navigation.navigate('Chat')} 
             color="#6A4029"
             brand={'AntDesign'}
             name="left"
             size={25}
             type="material"/>
             <View style={styles.content_image}>
             <Image source={icon_admin} style={styles.image}/>
             <View style={styles.content_name}>
                <Text style={styles.name}>Zulaikha</Text>
                <Text style={styles.barista}>zulaikha17@gmail.com</Text>
                <Text style={styles.online}>Online</Text>
             </View>
             </View>
        </View> :  <View style={styles.content}>
            <ArrowLeft style={styles.left} onPress={() => navigation.navigate('Chat')} 
             color="#6A4029"
             brand={'AntDesign'}
             name="left"
             size={25}
             type="material"/>
             <View style={styles.content_image}>
             <Image source={icon_cheryn} style={styles.image}/>
             <View style={styles.content_name}>
                <Text style={styles.name}>Cheryn</Text>
                <Text style={styles.barista}>Head Barista</Text>
                <Text style={styles.online}>Online</Text>
             </View>
             </View>
        </View> }
        <View style={styles.line}></View>
        {profile.role === 'admin' ?  <View style={styles.content_chatAdmin}>
            <Image source={icon_cheryn} style={styles.img_admin}/>
            <View style={styles.chat_admin}>
                <Text style={styles.text_admin}>Hey, welcome to Coffee Time!
                Today is Sunday and you know what? You will get a cup of coffee free only at 7 to 9 AM. 
                If you still have some questions to ask, let me know. Have a wonderful day!</Text>
            <View style={styles.check_admin}>
            <Image source={icon_check} style={styles.icon_admin}/>
            </View>
            </View>
        </View> :  <View style={styles.content_chat}>
            <Image source={icon_cheryn} style={styles.img}/>
            <View style={styles.chat}>
                <Text style={styles.text}>Hey, welcome to Coffee Time!
                Today is Sunday and you know what? You will get a cup of coffee free only at 7 to 9 AM. 
                If you still have some questions to ask, let me know. Have a wonderful day!</Text>
            </View>
        </View> }
        {profile.role === 'admin' ?  <View style={styles.content_timeAdmin}>
        <Text style={styles.time}>12.00 PM</Text>
        </View> :  <View style={styles.content_time}>
        <Text style={styles.time}>12.00 PM</Text>
        </View> }
        {profile.role === 'admin' ?  <View style={styles.content_chatSecAdmin}>
        <View style={styles.chatSec_admin}>
                <Text style={styles.textSec_admin}>Hey, what beans do you use for making cold brew? Can I request the beans?</Text>
                <View  style={styles.content_check}>
                </View>
            </View>
        <Image source={icon_admin} style={styles.imgsec_admin}/>
        </View> :  <View style={styles.content_chatSec}>
        <View style={styles.chatSec}>
                <Text style={styles.textSec}>Hey, what beans do you use for making cold brew? Can I request the beans?</Text>
                <View  style={styles.content_check}>
                <Image source={icon_check} style={styles.icon_check}/>
                </View>
            </View>
        <Image source={icon_admin} style={styles.imgsec}/>
        </View>}
        {profile.role === 'admin' ? <View style={styles.content_timeSecAdmin}>
        <Text style={styles.time}>12.00 PM</Text>
        </View> : <View style={styles.content_timeSec}>
        <Text style={styles.time}>12.00 PM</Text>
        </View>}
        {profile.role === 'admin' ?   <View style={styles.content_chatAdmin}>
            <Image source={icon_cheryn} style={styles.img_admin}/>
            <View style={styles.chatTree_admin}>
                <Text style={styles.text_admin}>Thank you for asking. Yup, you can request the beans, what beans do you like?</Text>
                <View style={styles.check_admin}>
            <Image source={icon_check} style={styles.icon_admin}/>
            </View>
            </View>
        </View> :  <View style={styles.content_chat}>
            <Image source={icon_cheryn} style={styles.img}/>
            <View style={styles.chatTree}>
                <Text style={styles.text}>Thank you for asking. Yup, you can request the beans, what beans do you like?</Text>
            </View>
        </View> }
        {profile.role === 'admin' ?  <View style={styles.content_timeAdmin}>
        <Text style={styles.time}>12.00 PM</Text>
        </View> :  <View style={styles.content_time}>
        <Text style={styles.time}>12.00 PM</Text>
        </View> }
        {profile.role === 'admin' ?  <View style={styles.content_chatSecAdmin}>
        <View style={styles.chatFour_admin}>
                <Text style={styles.textSec_admin}>I want arabica for the beans, thank you.</Text>
                <View  style={styles.content_check}>
                </View>
            </View>
        <Image source={icon_admin} style={styles.imgsec_admin}/>
        </View> :  <View style={styles.content_chatSec}>
        <View style={styles.chatFour}>
                <Text style={styles.textSec}>I want arabica for the beans, thank you.</Text>
                <View  style={styles.content_check}>
                <Image source={icon_check} style={styles.icon_check}/>
                </View>
            </View>
        <Image source={icon_admin} style={styles.imgsec}/>
        </View> }
        {profile.role === 'admin' ? <View style={styles.content_timeSecAdmin}>
        <Text style={styles.time}>12.00 PM</Text>
        </View> : <View style={styles.content_timeSec}>
        <Text style={styles.time}>12.00 PM</Text>
        </View>}
        <View style={styles.warp_one}>
        <View style={styles.warp_text}>
            <Text style={styles.Okay}>Okay, please wait</Text>
        </View>
        <View style={styles.warp_text}>
            <Text style={styles.Okay}>Thank you!</Text>
        </View>
        <View style={styles.warp_text}>
            <Text style={styles.Okay}>Your welcome</Text>
        </View>
        </View>
        <View style={styles.warp}>
        <View style={styles.content_text}>
          <View style={styles.search}>
            <Image source={icon_camera} style={styles.icon_camera} />
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              keyboardType="text"
            />
          </View>
        </View>
        </View>
    </View>
    </ScrollView>
  )
}

export default Chat_Room