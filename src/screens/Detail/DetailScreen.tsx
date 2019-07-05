import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";

class DetailScreen extends Component {
  static navigationOptions = {
    headerTitle: "{variavelComNomeDoProduto}"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <Text>$variavelCom_NomeDoProduto.</Text>
          <Text>$variavelCom_Descrição</Text>
          <Text>$variavelCom_Imagem.</Text>
        </View>
      </View>
    );
  }
}

export default DetailScreen;