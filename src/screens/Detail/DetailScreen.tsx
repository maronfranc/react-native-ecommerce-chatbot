import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";

import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";

class DetailScreen extends Component {
  static navigationOptions = {
    headerTitle: "{variavelComNomeDoProduto}"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <HeadingText>$variavelCom_NomeDoProduto.</HeadingText>
          <MainText>$variavelCom_Imagem.</MainText>
          <MainText>$variavelCom_Descrição</MainText>
        </View>
      </View>
    );
  }
}

export default DetailScreen;