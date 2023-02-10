import React from "react";
import { Text, View, FlatList, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/actions/cart.actions";
import Colors from "../../../constants/Colors";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  return (
    <View style={styles.screen}>
      <Text>Orders</Text>

      <FlatList
        style={{ width: "100%" }}
        data={orders}
        keyExtractor={(k) => k.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.totalAmount}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 10,
  },
  summary: {
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 6,
    padding: 10,
  },
  summaryText: {},
  amount: {},
});
export default OrdersScreen;
