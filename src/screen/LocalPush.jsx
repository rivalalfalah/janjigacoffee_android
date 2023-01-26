import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
// import {
//   LocalNotification,
//   ScheduledLocalNotification,
// } from '../services/LocalPushController';
import PushNotification from 'react-native-push-notification';

// import RemotePushController from './src/services/RemotePushController';

const LocalPush = () => {
  const handleShowNotification = () => {
    PushNotification.localNotification({
      channelId: 'local-notification',
      title: 'Local Notification',
      message: 'Local Notification',
    });
  };
  const handleScheduledNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'local-notification',
      title: 'Scheduled Notification',
      message: 'Scheduled Notification',
      date: new Date(Date.now() + Number(5) * 1000),
    });
  };

  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>
      <View style={{marginTop: 20}}>
        <Button
          title={'Local Push Notification'}
          onPress={handleShowNotification}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title={'Scheduled Local Push Notification'}
          onPress={handleScheduledNotification}
        />
      </View>
      {/* <RemotePushController /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocalPush;
