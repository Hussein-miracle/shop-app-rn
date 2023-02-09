import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
import productsReducer from "./store/reducers/products.reducer";

import ShopNavigator from "./navigation/shop-navigator";

enableScreens(true);

const rootReducer = combineReducers({
  products:productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}