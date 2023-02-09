import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";

const ProductDetailScreen = ({ navigation }) => {
  const productId = navigation.getParam("productId");
  const product = useSelector((state) =>
    state.products.availableProducts.find((p) => p.id === productId)
  );

  useEffect(() => {
    navigation.setParams({
      productTitle:product.title,
    })
  },[product])

  return (
    <View style={styles.screen}>

      <Text> Product Details screen {productId} </Text>

      <Text> {JSON.stringify(product)} </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default ProductDetailScreen;
