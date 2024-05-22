import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  const data = {
    labels: ["Swim", "Bike"], // optional
    data: [0.4, 0.6]
  };

  const chartConfig = {
    backgroundGradientFrom: "#5a03d5",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(265, 97, 42, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
      <ProgressChart
  data={data}
  width={320}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  chartContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "98%",
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 80,
    marginBottom: 20,
  },
});
