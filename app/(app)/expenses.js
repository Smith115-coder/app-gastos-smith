import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Image } from "react-native";
import PieChart from "react-native-pie-chart";
import PieCharts from "../../components/pieCharts";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description: 'Description of First Item',
    image: 'https://cdn-icons-png.flaticon.com/512/2273/2273264.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    description: 'Description of First Item',
    image: 'https://static.vecteezy.com/system/resources/previews/002/504/639/non_2x/down-arrow-money-bag-stock-market-crash-isolated-icon-free-vector.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    description: 'Description of First Item',
    image: 'https://static.vecteezy.com/system/resources/previews/002/504/892/non_2x/money-bag-and-downturn-arrow-stock-market-crash-isolated-icon-free-vector.jpg',
  },
  {
    id: '58694a0f-3dfr-471f-bd96-145571e29d72',
    title: 'four Item',
    description: 'Description of First Item',
    image: 'https://cdn-icons-png.flaticon.com/512/2273/2273264.png',
  },
  {
    id: '58694u0f-3dfr-471f-bd96-145571e29d72',
    title: 'five Item',
    description: 'Description of First Item',
    image: 'https://static.vecteezy.com/system/resources/previews/002/504/892/non_2x/money-bag-and-downturn-arrow-stock-market-crash-isolated-icon-free-vector.jpg',
  },
  {
    id: '58690a0f-3dfr-471f-bd96-145571e29d72',
    title: 'six Item',
    description: 'Description of First Item',
    image: 'https://static.vecteezy.com/system/resources/previews/002/504/892/non_2x/money-bag-and-downturn-arrow-stock-market-crash-isolated-icon-free-vector.jpg',
  },
];

const Item = ({ title, description, image }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDescription}>{description}</Text>
    </View>
  </View>
);


export default function expenses() {

  return (
    <View style={styles.container}>
      <ScrollView  
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false} 
      style={styles.main}>
        
        <View style={styles.card}>
          <PieCharts />
        </View>

        <View style={styles.separatorContainer}>
          <Text style={styles.separatorText}>Movimientos</Text>
        </View>
        <View style={{height: 2, backgroundColor: "#0fa968", marginBottom: 10,}}></View>

        <View style={styles.item}>
        <Text style={styles.itemTitle}>title</Text>
        <Text style={styles.itemDescription}></Text>
        </View>

        <View style={styles.item}>
        <Text style={styles.itemTitle}>title</Text>
        <Text style={styles.itemDescription}></Text>
        </View>

        <View style={styles.item}>
        <Text style={styles.itemTitle}>title</Text>
        <Text style={styles.itemDescription}></Text>
        </View>

        <View style={styles.item}>
        <Text style={styles.itemTitle}>title</Text>
        <Text style={styles.itemDescription}></Text>
        </View>

        <View style={styles.item}>
        <Text style={styles.itemTitle}>title</Text>
        <Text style={styles.itemDescription}></Text>
        </View>
        <View style={styles.item}>
        <Text style={styles.itemTitle}>title</Text>
        <Text style={styles.itemDescription}></Text>
        </View>
        

     {/*    <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} description={item.description} image={item.image} />}
          keyExtractor={item => item.id}
        />
 */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
    marginBottom: 60,
   
  },

  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    padding: 20,
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
  item: {
    backgroundColor: '#fefefe',
    padding: 20,
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 8,
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#363535',
  },
  separatorContainer: {
    width: '100%',
    
    marginBottom: 5,
  },

  separatorText: {
    fontSize: 18,
    color: '#555',
  },
});