import React from 'react';
import { StyleSheet, View,Text,TouchableOpacity,Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItemComp = ({onRemove,item}) => {
  //console.log(item , 'item')
  return (
    <View style={styles.cartItem}>

      <Text style={styles.cartItemDetail}>

        <Text style={styles.quantity}>{item.quantity}</Text>   
        <Text style={styles.mainText}>{item.productTitle}</Text>

      </Text>

      <View style={styles.itemData}>
        <Text style={styles.mainText}>
          $ {item.sum.toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.deleteBtn}>
          <Ionicons 
          name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
          color={'red'}
          onPress={onRemove}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  deleteBtn:{

  },
  cartItem:{
    width:'100%',
    padding:6,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  cartItemDetail:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
   // width:'100%',
   // backgroundColor:'blue',
  },
  quantity:{
    marginRight:10,
    fontFamily:'open-sans',
    color:'#888',
    fontSize:16,
  },
  mainText:{
    fontSize:16,
    fontFamily:'open-sans-bold',
    marginHorizontal:6,
  },
  itemData:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  }
})

export default CartItemComp;