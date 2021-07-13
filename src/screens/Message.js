import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screenStyles from "../styles/ScreenStyles";
import { Ionicons } from "@expo/vector-icons";

function Message() {
  return (
    <View style={screenStyles.container}>
      <Text style={{...screenStyles.text, ...styles.center, ...styles.bold}}>No Message</Text>
      <Ionicons
        name={"md-key"}
        style={styles.icon}
        size={100}
        color={"yellow"}
      />
      <Text style={{...screenStyles.text, ...styles.center}}>use your key{"\n"}for your privacy itself</Text>
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
      <Stack.Screen name='Message' component={Message}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign:'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  icon:{
    marginTop: 10, marginBottom: 20
  }
});
