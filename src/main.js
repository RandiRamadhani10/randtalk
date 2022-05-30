import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home/Index';
import Chat from './screens/Chat/Index';
import Login from './screens/Login/Index';
import Register from './screens/Register/Index.';
import BottomTab from './utils/bottomTab';
import ChatView from './screens/ChatView/Index';

const Stack = createNativeStackNavigator();
const Main = ({navigation}) => {
  return (
    <NavigationContainer style={{backgroundColor: '#131313'}}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#131313',
          justifyContent: 'center',
        }}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor="transparent"
          showHideTransition={'fade'}
          translucent={true}
        />
        <Stack.Navigator
          initialRouteName="chat-view"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="bottom-tab"
            component={BottomTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="chat"
            component={Chat}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="chat-view"
            component={ChatView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Main;
