import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screenStyles from "../styles/ScreenStyles";

function Message() {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.text}>message</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent:true,
        headerTitleStyle:screenStyles.text
    }}>
      <Stack.Screen name='Message' component={Message}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
});