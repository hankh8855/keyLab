import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screenStyles from "../styles/ScreenStyles";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

function Contact() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get(`https://randomuser.me/api/?results=15`)
    .then(res=>res.data)
    .then(({results})=>{
      setUsers(results);
    });
  },[]);

  const renderUser = ({ item }) => {
    return (
      <TouchableOpacity style={styles.userItem} key={item.login.uuid}>
        <Image 
          style={styles.userImage}
          source={{
            uri: item.picture.thumbnail,
          }}
        />
        <Text style={styles.userName}>{item.name.first} {item.name.last}</Text>
      </TouchableOpacity>
    )
  };
  return (
    <SafeAreaView style={screenStyles.container} forceInset={{ top: 'never' }}>
      <FlatList 
        style={styles.flatList}
        data={users}
        renderItem={renderUser}
        keyExtractor={(item)=>item.login.uuid}
        // extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:screenStyles.header,
        headerTitleStyle:screenStyles.headerTitle,
        headerRight: () => (
          <TouchableOpacity style={styles.headerIcons}>
            <Ionicons name={"person-add-outline"} color={"yellow"} size={24}/>
          </TouchableOpacity>
        )
    }}>
      <Stack.Screen name='Contact' component={Contact}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingRight: 20,
  },
  flatList: {
    width:'100%'
  },
  userItem: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },  
  userImage: {
    width: 50,
    height: 50,
    borderRadius:10,
  },
  userName: {
    paddingLeft: 20,
    color: 'yellow',
  }
});
