import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { View, StyleSheet } from 'react-native';

import Card from "../../UI/Card/Card";
import HeadingText from "../../UI/HeadingText/HeadingText";
import { Product } from "../../../models/product";
import ButtonWithBackground from "../../UI/ButtonWithBackground/ButtonWithBackground";
import MainText from "../../UI/MainText/MainText";
import { replaceDotWithComma } from "../../../shared/utils/helperFunctions";


interface Props {
  products: Array<Product>;
}

const CartFlatList = (props: Props) => {
  let _renderItem = ({ item }: { item: Product }) => (
    <View>
      <Card>
        <HeadingText style={styles.cardTitle}>{item.title}</HeadingText>
        <MainText>
          Quantidade:{item.qty}&nbsp;-&nbsp;R${replaceDotWithComma(item.price)} cada unidade
        </MainText>
        <HeadingText>
          Total: R${replaceDotWithComma(item.price * item.qty)}
        </HeadingText>
        <ButtonWithBackground
          title="Remover do carrinho"
          onPress={() => props.onPressRemove(item)}
        />
      </Card>
    </View>
  );
  return (
    <FlatList
      style={{ width: '100%' }}
      data={props.products}
      renderItem={_renderItem}
      keyExtractor={item => item.id.toString()} />
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    backgroundColor: 'gold',
    borderBottomColor: '#012',
    borderBottomWidth: 5,
    margin: 0,
    width: '100%',
  }
});

export default CartFlatList;
