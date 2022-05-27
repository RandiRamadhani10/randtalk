import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home/Index';
import Chat from './screens/Chat/Index';

const Stack = createNativeStackNavigator();
const Main = () => {
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
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="chat"
            component={Chat}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Main;
