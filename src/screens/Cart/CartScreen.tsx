import React, { Component } from "react";
import { Platform, View, Alert } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from 'react-redux';

import styles from "./styles";
import ShoppingCartIcon from "../../components/ShoppingCart/ShoppingCartIcon/ShoppingCartIcon";
import { removeFromCart } from "../../store/actions/cartAction";
import { Product } from "../../models/product";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import CartFlatList from "../../components/ShoppingCart/CartFlatList/CartFlatList";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

type State = {
  cart: Array<Product>;
}

class CartScreen extends Component<State> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Produtos no Carrinho",
    headerLeft: Platform.select({
      ios: (
        <ButtonWithBackground
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
            <CartFlatList
              onPressRemove={this.props.onRemoveFromCart}
              products={this.props.cart} />
            <ButtonWithBackground title="Finalizar Compra"
              onPress={() => { Alert.alert("Botão Finalizar compra pressionado!") }} />
          </>
          : <HeadingText style={{ color: '#fff' }}>Carrinho vazio</HeadingText>
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
