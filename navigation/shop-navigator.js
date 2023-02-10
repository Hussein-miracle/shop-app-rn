import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

import ProductOverviewScreen from "../screens/shop/product-overview-screen/product-overview-screen";
import ProductDetailScreen from "../screens/shop/product-detail-screen/product-detail-screen";

const ProductNavigator = createStackNavigator(
  {
    Products: {
      screen: ProductOverviewScreen,
    },
    ProductDetail:{
      screen:ProductDetailScreen,
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTitleStyle: {
        fontFamily:'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily:'open-sans'
      },
      headerTintColor: Platform.OS === 'android' ? "#fff" : Colors.primary,
    },
  }
);

export default createAppContainer(ProductNavigator);
