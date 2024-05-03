import React from "react";
import { Redirect } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import {axios} from "axios";

export default function home() {
  const user = null;

  const httpRequest = async () =>{
    
  axios({
    method: "get",
    url: "http://192.168.31.250/api/v1/check",
    headers: {
      Accept: "application/vmd.api+json"
    },
  }).then((response) => {
    console.log(response.data);
  });

  
};

return(
  <View>
    <Text> Hola shsjshsd </Text>
  </View>
);

  //if (!user == null) {
    
    //return <Redirect href="/login" />;
  //}

 // return <Redirect href="/home" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
