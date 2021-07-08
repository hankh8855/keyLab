import React from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';
// import from 'native-base'

export default ({title}) => {
  return (
    // <Header
    //   leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
    //   centerComponent={{ text: title, style: { color: '#fff' } }}
    //   rightComponent={{ icon: 'home', color: '#fff' }}
    // />
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header:{
    height: 80,
    paddingTop: 20,
    backgroundColor: '#1E2C39',
    borderBottomColor: '#29353F',
  },
  title: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
  }
});