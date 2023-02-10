import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../../../constants/Colors";

const ProductItem = ({ item, onViewDetail, onAddToCart }) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.productItem}>
      <View style={styles.touchableWrapper}>
        <TouchableComp activeOpacity={0.8} onPress={onViewDetail} useForeground>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />

            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="View Details"
                onPress={onViewDetail}
                color={Colors.primary}
              />
              <Button
                title="Add To Cart"
                onPress={onAddToCart}
                color={Colors.primary}
              />
            </View>
          </View>
        </TouchableComp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    padding: 4,
    margin: 20,
    height: 300,
    // overflow: "hidden",
    
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 6,
  },
  touchableWrapper: {
    overflow: "hidden",
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  image: {
    height: "60%",
    width: "100%",
  },
  title: {
    fontSize: 18,
    marginVertical: 1.5,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  details: {
    //flexDirection: "row",
    alignItems: "center",
    //justifyContent:'space-between',
    height: "15%",
    padding: 10,
  },
});

export default ProductItem;
