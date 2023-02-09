import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../../components/shop/product-item/product-item";
import Colors from "../../../constants/Colors";

// console.log(Dimensions.get('window').width,'Dimensions')

const ProductOverviewScreen = ({ navigation }) => {
  const userProducts = useSelector((state) => state.products.userProducts);

  // const ProductItem = ({ item }) => {
  //   return (
  //     <TouchableOpacity activeOpacity={0.8}>
  //       <View style={styles.productItem}>
  //         <Text>{item.title}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  const onAddToCart = () => {};

  return (
    <View style={styles.screen}>
      {/* <Text style={styles.title}> ProductOverview </Text> */}

      <FlatList
        style={{ width: "100%" }}
        data={userProducts}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => {
          const onViewDetail = () => {
            navigation.navigate({
              routeName: "ProductDetail",
              params: {
                productId: item.id,
              },
            });
          };
          return (
            <ProductItem
              item={item}
              onViewDetail={onViewDetail}
              onAddToCart={onAddToCart}
            />
          );
        }}
      />
    </View>
  );
};

ProductOverviewScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "All Products",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    //backgroundColor: Colors.accent,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
  },
  productItem: {
    backgroundColor: "#fff",
    padding: 9,
    marginVertical: 5,
    borderRadius: 6,
  },
});
export default ProductOverviewScreen;
