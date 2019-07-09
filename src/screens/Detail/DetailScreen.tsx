import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Button, Image } from "react-native";

import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationScreenProps } from "react-navigation";

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
  };

  render() {
    const { navigation } = this.props;
    const productId = navigation.getParam('item', 'NO-ID');
    const productTitle = navigation.getParam('title', 'Produto padrão');
    const productDescription = navigation.getParam('description', 'Descrição padrão');
    const productPrice = navigation.getParam('price', 'Error');
    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <ScrollView>
            <Image
              resizeMode="stretch" style={styles.image}
              source={require('../../assets/placeholder-image.png')} />
            <View style={styles.content}>
              <HeadingText>{productTitle}</HeadingText>
              <MainText>{productDescription}</MainText>
              <HeadingText>R${productPrice}</HeadingText>
              <Button
                title="Comprar"
                onPress={() => { }} />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default DetailScreen;