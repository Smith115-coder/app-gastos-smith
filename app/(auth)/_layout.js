import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

export default function _layout() {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5a905",
  },
});
