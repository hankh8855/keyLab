import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screenStyles from "../styles/ScreenStyles";

function Settings() {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.text}>Settings</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent:true,
        headerTitleStyle:screenStyles.headerTitle
    }}>
      <Stack.Screen name='Settings' component={Settings}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
});
