import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

import ProductOverviewScreen from "../screens/shop/product-overview-screen/product-overview-screen";
import ProductDetailScreen from "../screens/shop/product-detail-screen/product-detail-screen";
import CartScreen from "../screens/shop/cart-screen/cart-screen";
import OrdersScreen from "../screens/shop/orders-screen/orders-screen";


const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
  },
}

const ProductNavigator = createStackNavigator(
  {
    Products: {
      screen: ProductOverviewScreen,
    },
    ProductDetail: {
      screen: ProductDetailScreen,
    },
    Cart: {
      screen: CartScreen,
    },
  },
  defaultNavigationOptions
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: {
      screen: OrdersScreen,
    },
  },
  defaultNavigationOptions
);


const ShopNavigator = createDrawerNavigator({
  Products:ProductNavigator,
  Orders:OrdersNavigator,
}, {
  contentOptions:{
    activeTintColor: Colors.primary,
  }
})

export default createAppContainer(ShopNavigator);
