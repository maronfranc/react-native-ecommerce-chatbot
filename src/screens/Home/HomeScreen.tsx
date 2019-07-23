import React, { Component } from "react";
import { Platform, Text, View, Button, Alert } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';

import styles from "./styles";
import ProductsFlatList from "../../components/Product/ProductsFlatList/ProductsFlatList";
import { Product } from "../../models/product";
import ShoppingCartIcon from "../../components/ShoppingCart/ShoppingCartIcon/ShoppingCartIcon";
import { mockData } from '../../shared/mock/Data';
import { addToCart } from "../../store/actions/cartAction";

class HomeScreen extends Component<NavigationScreenProps> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Lista de produtos",
    headerRight:
      <>
        <ShoppingCartIcon onPress={() => { navigation.navigate('CartScreen') }} />
        <Icon
          name="md-log-in"
          size={30}
          color="#fff"
          onPress={() => { navigation.navigate('LoginScreen')  }}
          style={{ marginHorizontal: 5 }}
        />
      </>,
  });

  render() {
    return (
      <View style={styles.container}>
        <ProductsFlatList products={mockData} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItemToCart: (product: Product) => dispatch(addToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(HomeScreen);