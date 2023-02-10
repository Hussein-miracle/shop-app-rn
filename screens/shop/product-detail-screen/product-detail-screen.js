import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { useSelector ,useDispatch} from "react-redux";

import Colors from "../../../constants/Colors";
import { addToCart } from "../../../store/actions/cart.actions";

const ProductDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const productId = navigation.getParam("productId");
  const product = useSelector((state) =>
    state.products.availableProducts.find((p) => p.id === productId)
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }
  if (!product) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 18,
        }}
      >
        <Text>Product Not Available.</Text>
      </View>
    );
  }

  // useEffect(() => {
  //   // navigation.setParams({
  //   //   productTitle:product.title,
  //   // })
  // },[product])

  return (
    <ScrollView>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.buttonWrapper}>
        <Button title="Add To Cart" onPress={() => {}} color={Colors.primary} />
      </View>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = ({ navigation }) => {
  const productTitle = navigation.getParam("productTitle");
  return {
    headerTitle: productTitle,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans",
  },
  price: {
    fontSize: 20,
    marginVertical: 20,
    color: "#888",
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  buttonWrapper: {
    // width:'50%',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 18,
    alignItems: "center",
  },
});
export default ProductDetailScreen;
