import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { View, Button } from 'react-native';

import Card from "../../UI/Card/Card";
import HeadingText from "../../UI/HeadingText/HeadingText";
import { Product } from "../../../models/product";


interface Props {
  products: Array<Product>;
}

const CartFlatList = (props: Props) => {
  let _renderItem = ({ item }: { item: Product }) => (
    <View>
      <Card>
        <Button onPress={() => props.onPress(item)} title={'X'} />
        <HeadingText>{item.title}</HeadingText>
        <HeadingText>
          quantidade:{item.qty} &nbsp; R${item.price * item.qty}
        </HeadingText>
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

export default CartFlatList;
