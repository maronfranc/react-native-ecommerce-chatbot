import React, { Component } from "react";
import { View, Image, Alert } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import Card from "../../components/UI/Card/Card";
import ShoppingCartIcon from "../../components/ShoppingCart/ShoppingCartIcon/ShoppingCartIcon";
import { Product } from "../../models/product";
import { addToCartOrUpdate } from "../../store/actions/cartAction";
import Icon from "react-native-vector-icons/Ionicons";
import { replaceDotWithComma } from "../../shared/utils/helperFunctions";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

type State = {
  product: Product;
}

class DetailScreen extends Component<NavigationScreenProps, State> {
  state = {
    product: {
      id: this.props.navigation.getParam('id'),
      title: this.props.navigation.getParam('title'),
      description: this.props.navigation.getParam('description'),
      price: this.props.navigation.getParam('price'),
      qty: 1
    }
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Produto",
    headerRight:
      <>
        <Icon
          name="md-chatboxes"
          size={30}
          color="#fff"
          onPress={() => { navigation.navigate('ChatScreen') }}
          style={{ marginHorizontal: 5 }} />
        <ShoppingCartIcon onPress={() => { navigation.navigate('CartScreen') }} />
        <Icon
          name="md-log-in"
          size={30}
          color="#fff"
          onPress={() => { Alert.alert('Botão de login pressionado') }}
          style={{ marginHorizontal: 5 }}
        />
      </>,
  });


  incrementQty = () => {
    this.setState(prevState => {
      return {
        product: {
          ...prevState.product,
          qty: this.state.product.qty + 1
        }
      }
    });
  }

  decrementQty = () => {
    if (this.state.product.qty <= 1) return;
    this.setState(prevState => {
      return {
        product: {
          ...prevState.product,
          qty: this.state.product.qty - 1
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            resizeMode="stretch" style={styles.image}
            source={require('../../assets/placeholder-image.png')} />

          <HeadingText>{this.state.product.title}</HeadingText>
          <MainText>{this.state.product.description}</MainText>
          <HeadingText>R${replaceDotWithComma(this.state.product.price * this.state.product.qty)}</HeadingText>

          <Card style={styles.buttonContainer}>
            <ButtonWithBackground
              title="     -     "
              onPress={() => { this.decrementQty() }} />
            <HeadingText style={{ flex: 1, textAlign: 'center' }}>
              {this.state.product.qty}
            </HeadingText>
            <ButtonWithBackground
              title="     +     "
              onPress={() => { this.incrementQty() }} />
          </Card>

          <ButtonWithBackground
            title="Adicionar ao carrinho"
            onPress={() => { this.props.onAddToCartOrUpdate(this.state.product) }} />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCartOrUpdate: (product: Product) => dispatch(addToCartOrUpdate(product))
  }
}

export default connect(null, mapDispatchToProps)(DetailScreen);