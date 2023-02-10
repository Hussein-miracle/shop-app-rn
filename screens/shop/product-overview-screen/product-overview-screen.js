import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../../store/actions/cart.actions";

import ProductItem from "../../../components/shop/product-item/product-item";
import CustomHeaderButton from "../../../components/UI/HeaderButton";
import Colors from "../../../constants/Colors";

// console.log(Dimensions.get('window').width,'Dimensions')

const ProductOverviewScreen = ({ navigation }) => {
  const dispatch = useDispatch();
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
                productTitle: item.title,
              },
            });
          };

          const onAddToCart = () => {
            dispatch(addToCart(item));
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
  // const 
  const handleClick = () => {

    console.log('%c go to cart','color:#fff;padding:10px;border-radius:8px;background-color:blue;')
    // navigation
    navigation.navigate({
      routeName: "Cart",
      // params: {
      // },
    });
  }
  return {
    headerTitle: "All Products",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="cart" iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}  onPress={handleClick}/>
        </HeaderButtons>
      );
    },
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
