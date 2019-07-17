import React, { Component } from "react";
import { Platform, View, Button, Alert } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from 'react-redux';

import styles from "./styles";
import ShoppingCartIcon from "../../components/ShoppingCart/ShoppingCartIcon/ShoppingCartIcon";
import { removeFromCart } from "../../store/actions/shoppingCartAction";
import { Product } from "../../models/product";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import CartFlatList from "../../components/ShoppingCart/CartFlatList/CartFlatList";

type State = {
  cart: Array<Product>;
}

class CartScreen extends Component<State> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Produtos no Carrinho",
    headerLeft: Platform.select({
      ios: (
        <Button
          title="Menu"
          onPress={() => navigation.toggleDrawer()} />
      ),
    }),
    headerRight: <ShoppingCartIcon />,
  });

  render() {
    return (
      <View style={styles.container}>
        {this.props.cart.length > 0
          ? <>
            <Button title="Finalizar Compra"
              onPress={() => { Alert.alert("Botão Finalizar compra pressionado!") }} />
            <CartFlatList
              onPress={this.props.onRemoveFromCart}
              products={this.props.cart} />
          </>
          : <HeadingText>Carrinho vazio</HeadingText>
        }
      </View>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromCart: (product: Product) => dispatch(removeFromCart(product))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
