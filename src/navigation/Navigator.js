import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from "../screens/Contact";
import Message from "../screens/Message";
import Wallet from "../screens/Wallet";
import Settings from "../screens/Settings";
import TabBarIcon from "./tabs/TabBarIcon";

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator 
      tabBarOptions={{
        style: {
          borderTopWidth: 1,
          borderTopColor:"#15242F",
          backgroundColor: "#15242F",
          height: 59,
        },
      }}
    >
      <Tabs.Screen 
        name="Contact" 
        component={Contact} 
        options={{
          tabBarLabel:()=>null,
          tabBarIcon: ({focused})=><TabBarIcon focused={focused} icon={"body"} />,
        }}  
      />
      <Tabs.Screen 
        name="Message" 
        component={Message} 
        options={{
          tabBarLabel:()=>null,
          tabBarIcon: ({focused})=><TabBarIcon focused={focused} icon={"md-key"} />,
        }}  
      />
      <Tabs.Screen 
        name="Wallet" 
        component={Wallet} 
        options={{
          tabBarLabel:()=>null,
          tabBarIcon: ({focused})=><TabBarIcon focused={focused} icon={"md-wallet"} />,
        }}  
      />
      <Tabs.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          tabBarLabel:()=>null,
          tabBarIcon: ({focused})=><TabBarIcon focused={focused} icon={"beer"} />,
        }}  
      />
    </Tabs.Navigator>
  )
}

export default () => {
  return (
      <MainTabs />
  );
};

