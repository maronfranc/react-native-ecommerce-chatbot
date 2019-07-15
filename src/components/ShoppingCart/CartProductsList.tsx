import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button
} from "react-native";

import HeadingText from "../UI/HeadingText/HeadingText";
import { Product } from "../../models/product";

type Props = {
  products: Array<Product>;
  product: Product;
  
}

class CartProductsList extends Component<Props> {
  renderProducts = (products: Array<Product>) => {
    return products.map((product, index) => {
      return (
        <View key={index}>
          <HeadingText>{product.title + " - " + product.price}</HeadingText>
          <Button onPress={() => this.props.onPress(product)} title={'X'} />
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderProducts(this.props.products)}
      </View>
    );
  }
}
export default CartProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});