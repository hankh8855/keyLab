import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./src/navigation/Navigator";

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style='light' backgroundColor='#1E2C39' />
        <Navigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
