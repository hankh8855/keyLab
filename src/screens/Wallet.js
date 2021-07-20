import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screenStyles from "../styles/ScreenStyles";
import { Ionicons } from "@expo/vector-icons";
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function Wallet() {
  const [totalBalance, setTotalBalance] = useState(0);
  useEffect(()=>{
  },[totalBalance]);

  const [currency, setCurrency] = useState(0);
  useEffect(()=>{
  },[currency]);
  
  return (
    <View style={{...screenStyles.container, ...styles.walletContainer}}>
      <TotalBalance totalBalance={totalBalance}/>
      <Currency currency={currency} />
    </View>
  );
}

function TotalBalance(props) {
  return (
    <View style={styles.totalBalanceContainer}>
      <Text style={{...screenStyles.text, ...styles.title}}>Total Balance</Text>
      <Text style={{...screenStyles.text, ...styles.totalBalance}}>{props.totalBalance}</Text>
    </View>
  )
}

function Currency(props) {
  return (
    <View style={styles.currencyContainer}>
      <Text style={{...screenStyles.text, ...styles.currencyTitle}}>Currency</Text>
      <View style={styles.divide} />
      <View style={styles.currencyContent}>
        <Ionicons
          name={"md-key"}
          size={50}
          color={"yellow"}
        />
        <View style={styles.currencyPointContainer}>
          <Text style={{...screenStyles.text, ...styles.title}}>keylab point</Text>
          <Text style={{...screenStyles.text, ...styles.currency}}>{props.currency} KP</Text>
        </View>
      </View>
    </View>
  )
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
  walletContainer: {
    paddingLeft: 0,
    paddingTop: 30,
    justifyContent: 'flex-start',
  },
  totalBalanceContainer:{
    borderRadius: 15,
    width: '90%',
    height: 100,
    backgroundColor: '#1E364E',
    paddingLeft: 20,
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 14,
  },
  totalBalance: {
    fontSize: 30,
    lineHeight: 50,
  },
  currencyTitle : {
    fontSize: 16,
    width: 70,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'white'
  },
  currencyContainer: {
    width: '90%',
  },
  currencyContent: {
    flexDirection: 'row',
  },
  divide: {
    backgroundColor: 'white',
    height: 1,
    marginBottom: 10,
  },
  currency: {
    fontSize: 20,
  },
  currencyPointContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  }
});
