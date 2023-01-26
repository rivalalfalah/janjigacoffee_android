// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
// import icon dari modole
import AppStack from './src/navigation/AppStack';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <AuthStack /> */}
        <AppStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
