import React from "react";
import { Platform } from "react-native";
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native-gesture-handler";

import { Product } from "../../../models/product";
import IconWithBadge from "../../UI/Icons/IconWithBadge";

type State = {
  cart: Array<Product>;
}

const ShoppingCartIcon = (props: any) => {
  const iconName = Platform.OS == 'android' ? 'md-cart' : 'ios-cart';
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('CartScreen')}>
      <IconWithBadge name={iconName} size={props.size} color={props.color} badgeCount={props.cartLength} />
    </TouchableOpacity>
  );
}

const mapStateToProps = (state: State) => {
  return {
    cartLength: state.cart.length
  }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));