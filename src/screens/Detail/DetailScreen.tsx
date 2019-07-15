import React, { Component } from "react";
import { Text, View, Button, Image, Alert } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ShoppingCartIcon from "../../components/ShoppingCart/ShoppingCartIcon";
import { Product } from "../../models/product";
import { addToCart } from "../../store/actions/shoppingCartAction";
import Icon from "react-native-vector-icons/Ionicons";


class DetailScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    headerTitle: "Produto",
    headerStyle: {
      backgroundColor: '#345',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#fff'
    },
    headerRight:
      <>
        <ShoppingCartIcon onPress={() => { this.props.navigation.navigate('CartScreen') }} />
        <Icon
          name="md-log-in"
          size={30}
          color="#fff"
          onPress={() => { Alert.alert('Botão de login pressionado') }}
          style={{ marginHorizontal: 5 }}
        />
      </>,
  };
  
  product: Product = {
    id: this.props.navigation.getParam('id'),
    title: this.props.navigation.getParam('title'),
    description: this.props.navigation.getParam('description'),
    price: this.props.navigation.getParam('price')
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <ScrollView>
            <Image
              resizeMode="stretch" style={styles.image}
              source={require('../../assets/placeholder-image.png')} />
            <View style={styles.content}>
              <HeadingText>{this.product.title}</HeadingText>
              <MainText>- {this.product.description}</MainText>
              <HeadingText>R${this.product.price}</HeadingText>
              <Button
                title="Adicionar ao carrinho"
                onPress={() => { this.props.addItemToCart(this.product) }} />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItemToCart: (product: Product) => dispatch(addToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(DetailScreen);