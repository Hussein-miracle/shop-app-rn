import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button,
} from "react-native";

import Colors from "../../../constants/Colors";

const ProductItem = ({ item, onViewDetail, onAddToCart }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.productItem}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />

        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="View Details" onPress={onViewDetail} color={Colors.primary} />
          <Button title="Add To Cart" onPress={onAddToCart} color={Colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: "#fff",
    padding: 4,
    margin: 20,
    borderRadius: 6,
    height: 300,

    shadowColor: "#000",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 6,
  },
  buttonContainer: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height:'25%',
    paddingHorizontal:20,
  },
  image: {
    height: "60%",
    width: "100%",
  },
  title: {
    fontSize: 18,
    marginVertical: 1,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  details: {
    //flexDirection: "row",
    alignItems:'center',
    //justifyContent:'space-between',
    height:'15%',
    padding:10,
  },
});

export default ProductItem;
