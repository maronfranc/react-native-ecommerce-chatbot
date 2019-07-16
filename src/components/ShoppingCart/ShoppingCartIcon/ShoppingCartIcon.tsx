import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button
} from "react-native";
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import { Product } from "../../../models/product";

type State = {
  cart: Array<Product>;
}

const ShoppingCartIcon = (props: any) => (
  <TouchableOpacity onPress={() => props.navigation.navigate('CartScreen')}>
    <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
      <View style={{
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#ccb610',
        right: 15,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}>
        <Text style={{  fontWeight: 'bold' }}>{props.cart}</Text>
      </View>
      <Icon name="ios-cart" size={30} color="#fff" />
    </View>
  </TouchableOpacity>
)

const mapStateToProps = (state: State) => {
  return {
    cart: state.cart.length
  }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    paddingLeft: 20, paddingTop: 10, marginRight: 5
  }
});