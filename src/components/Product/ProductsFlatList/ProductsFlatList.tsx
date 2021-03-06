import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { View } from 'react-native';

import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../../models/product";


interface Props {
  products: Array<Product>;
}

const ProductsFlatList = (props: Props) => {
  let _renderItem = ({ item }: { item: Product }) => (
    <View>
      <ProductCard
        id={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        qty={item.qty}
      />
    </View>
  );
  return (
    <FlatList
      style={{ width: '100%' }}
      data={props.products}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ProductsFlatList;
