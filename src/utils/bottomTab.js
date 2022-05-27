import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      activeColor={'white'}
      inactiveColor="#112B3C"
      labeled={false}
      barStyle={{
        backgroundColor: '#205375',
        marginHorizontal: 30,
        marginBottom: 30,
        borderRadius: 50,
        justifyContent: 'center',
        position: 'absolute',
        height: 50,
        overflow: 'hidden',
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Qrcode"
        component={Qrcode}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="qrcode-scan" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
