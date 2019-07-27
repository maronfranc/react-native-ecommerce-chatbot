import React, { Component } from "react";
import { Platform, View, Alert } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from 'react-redux';

import styles from "./styles";
import { removeFromCart } from "../../store/actions/cartAction";
import { Product } from "../../models/product";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import CartFlatList from "../../components/ShoppingCart/CartFlatList/CartFlatList";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "../../components/UI/Card/Card";
import { replaceDotWithComma } from "../../shared/utils/helperFunctions";

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
    headerRight: (
      <>
        <Icon
          name="md-chatboxes"
          size={30}
          color="#fff"
          onPress={() => { navigation.navigate('ChatScreen') }}
          style={{ marginHorizontal: 5 }} />
        <Icon
          name="md-card"
          size={30}
          color="#fff"
          onPress={() => { Alert.alert('Botão modo de pagamento pressionado') }}
          style={{ marginHorizontal: 5 }} />
      </>
    )
  });

  total(): number {
    return this.props.cart.reduce((total, nextItem) => total + (nextItem.price * nextItem.qty), 0);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.cart.length > 0
          ? <>
            <CartFlatList
              onPressRemove={this.props.onRemoveFromCart}
              products={this.props.cart} />
            <Card style={styles.totalCard}>
              <HeadingText>R${replaceDotWithComma(this.total())} </HeadingText>
              <ButtonWithBackground
                title="Finalizar Compra"
                onPress={() => { Alert.alert("Botão Finalizar compra pressionado!") }} />
            </Card>
          </>
          : <HeadingText style={{ color: '#fff' }}>Carrinho Vazio</HeadingText>
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
