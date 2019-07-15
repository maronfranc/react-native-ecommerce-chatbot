import React, { Component } from "react";
import { Platform, Text, View, Button, Alert } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';

import styles from "./styles";
import ProductsFlatList from "../../components/Product/ProductsFlatList/ProductsFlatList";
import { Product } from "../../models/product";
import ShoppingCartIcon from "../../components/ShoppingCart/ShoppingCartIcon";
import { mockData } from '../../Data';
import { addToCart } from "../../store/actions/shoppingCartAction";

class HomeScreen extends Component<NavigationScreenProps> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Lista de produtos",
    headerLeft: Platform.select({
      ios: (
        <Button
          title="Menu"
          onPress={() => navigation.toggleDrawer()} />
      ),
      android: null
    }),
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