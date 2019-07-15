import React, { Component } from "react";
import { Platform, Text, View, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from 'react-redux';

import styles from "./styles";
import ShoppingCartIcon from "../../components/ShoppingCart/ShoppingCartIcon";
import CartProductsList from "../../components/ShoppingCart/CartProductsList";
import { removeFromCart } from "../../store/actions/shoppingCartAction";
import { Product } from "../../models/product";
import HeadingText from "../../components/UI/HeadingText/HeadingText";

type Props = {
  cartProducts: Array<Product>;
  removeProduct(): void;
}

class CartScreen extends Component<Props> {
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
    headerStyle: {
      backgroundColor: '#345',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#fff'
    },
  });

  render() {
    return (
      <View style={styles.container}>
        {this.props.cartProducts.length > 0 ?
          <CartProductsList
            onPress={this.props.removeProduct}
            products={this.props.cartProducts} />
          : <HeadingText>Carrinho vazio</HeadingText>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (product: Product) => dispatch(removeFromCart(product))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
