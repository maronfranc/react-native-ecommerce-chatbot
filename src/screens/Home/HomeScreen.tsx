import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import ProductsFlatList from "../../components/Product/ProductsFlatList/ProductsFlatList";
import { Product } from "../../models/product";

class HomeScreen extends Component<NavigationScreenProps> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Lista de produtos",
    headerLeft: Platform.select({
      ios: (
        <Button
          title="Menu"
          onPress={() => navigation.toggleDrawer()} />
      ),
      android: (
        null
      )
    }),
  });

  // Valor de teste adicionado enquando a conexão com o banco ainda não foi feita
  mockData: Array<Product> = [
    {
      id: 0,
      title: "Produto1.",
      description: "Produto1 Produto1 Produto1 Produto1 Produto1 Produto1 Produto1 Produto1 Produto1 Produto1.",
      price: 99,
    }, {
      id: 1,
      title: "Produto2.",
      description: "Produto1.aljhfluwehlfuef",
      price: 99,
    }, {
      id: 2,
      title: "Produto3.",
      description: "Produto1.aljhfluwehlfuef",
      price: 99,
    }, {
      id: 3,
      title: "Produto23",
      description: "Produto1.aljhfluwehlfuef",
      price: 99,
    }
  ]

  render() {
    return (
      <View style={styles.container}>
        <ProductsFlatList products={this.mockData} />
      </View>
    );
  }
}

export default HomeScreen;