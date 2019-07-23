import React, { Component } from "react";
import { View, Button, Image, Alert } from "react-native";
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
    if (this.state.product.qty <= 0) return;
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
        <View style={styles.productContainer}>
          <ScrollView>
            <Image
              resizeMode="stretch" style={styles.image}
              source={require('../../assets/placeholder-image.png')} />

            <View style={styles.content}>
              <HeadingText>{this.state.product.title}</HeadingText>
              <MainText>- {this.state.product.description}</MainText>
              <HeadingText>R${replaceDotWithComma(this.state.product.price * this.state.product.qty)}</HeadingText>

              <Card style={styles.buttonContainer}>
                <Button
                  title="-"
                  onPress={() => { this.decrementQty() }} />
                <HeadingText
                  style={{ flex: 5, textAlign: 'center' }}>{this.state.product.qty}</HeadingText>
                <Button
                  title="+"
                  onPress={() => { this.incrementQty() }} />
              </Card>
              
              <Button
                title="Adicionar ao carrinho"
                onPress={() => { this.props.onAddToCartOrUpdate(this.state.product) }} />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddToCartOrUpdate: (product: Product) => dispatch(addToCartOrUpdate(product))
  }
}

export default connect(null, mapDispatchToProps)(DetailScreen);