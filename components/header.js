import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: "100%",
    backgroundColor: "#0bb188",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 15,
  },
});
