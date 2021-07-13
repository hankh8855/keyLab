import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screenStyles from "../styles/ScreenStyles";

function Wallet() {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.text}>wallet</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:screenStyles.header,
        headerTitleStyle:screenStyles.headerTitle
    }}>
      <Stack.Screen name='Wallet' component={Wallet}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
});
