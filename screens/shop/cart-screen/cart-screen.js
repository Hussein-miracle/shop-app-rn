import React from "react";
import { Text, View, FlatList, StyleSheet, Button } from "react-native";
import { useSelector , useDispatch} from "react-redux";
import { removeFromCart } from "../../../store/actions/cart.actions";
import Colors from "../../../constants/Colors";
import CartItemComp from "../../../components/shop/cart-item/cart-item";
import { addOrder } from "../../../store/actions/orders.actions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      // console.log(key,'k')
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }

    return transformedCartItems.sort((c,d) => c.productId > d.productId ? 1 : -1);
  });


  const handleOrder = () => {
    dispatch(addOrder(cartItems,totalAmount));
  }

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total :<Text style={styles.amount}> ${totalAmount.toFixed(2)}</Text>
        </Text>

        <Button
          title="Order Now"
          color={Colors.accent}
          disabled={cartItems.length === 0}
          onPress={handleOrder}
        />
      </View>

      {/*  */}
      <FlatList
      style={{width:'100%'}}
        data={cartItems}
        keyExtractor={(k) => k.productId}
        renderItem={({ item }) => {
          const onRemove = () => {
            dispatch(removeFromCart(item.productId))
          }
          // console.log(item,'item')
          return <CartItemComp item={item} onRemove={onRemove}/>;
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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
  summaryText: {
    paddingHorizontal: 4,
    fontFamily: "open-sans-bold",
    fontSize: 18,
    justifyContent: "space-between",
  },
  amount: {
    color: Colors.primary,
  },
});
export default CartScreen;
