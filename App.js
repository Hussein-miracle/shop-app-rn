import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import {composeWithDevTools} from 'redux-devtools-extension';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { enableScreens } from "react-native-screens";
import { useFonts } from "expo-font";

import productsReducer from "./store/reducers/products.reducer";
import cartReducer from './store/reducers/cart.reducer';
import ordersReducer from "./store/reducers/orders.reducer";

import ShopNavigator from "./navigation/shop-navigator";

enableScreens(true);

const rootReducer = combineReducers({
  products: productsReducer,
  cart:cartReducer,
  orders:ordersReducer,
});

const store = process.env.NODE_ENV === 'development' ?  createStore(rootReducer,composeWithDevTools()) : createStore(rootReducer);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    const loadFonts = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    loadFonts();
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
