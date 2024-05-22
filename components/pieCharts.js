import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PieChart from 'react-native-pie-chart';

const PieCharts = () => {
  const widthAndHeight = 200;
  const series = [670, 330];
  const sliceColor = ['#F44336', '#0aa324'];
  const labels = ["Ingresos", "Gastos"];

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={.70}
        />
      </View>
      <View style={styles.legendContainer}>
        {labels.map((label, index) => (
          <View style={styles.legendItem} key={index}>
            <View style={[styles.colorIndicator, { backgroundColor: sliceColor[index] }]} />
            <Text style={styles.legendText}>{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartContainer: {
    marginRight: 20,
  },
  legendContainer: {
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  colorIndicator: {
    width: 10,
    height: 10,
    marginRight: 10,
  },
  legendText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PieCharts;

