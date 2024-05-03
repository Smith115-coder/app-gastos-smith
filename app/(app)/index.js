import React from "react";
import { View, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

export default function Home() {
  const user = false;

  if (!user) {
    console.log("user false");
    return <Redirect href="/login" />;
  }
  return <View style={styles.container}></View>;
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