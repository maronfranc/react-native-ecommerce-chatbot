import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { withNavigation, NavigationScreenProps } from 'react-navigation';

import MainText from '../../UI/MainText/MainText';
import HeadingText from '../../UI/HeadingText/HeadingText';
import Card from '../../UI/Card/Card';
import { Product } from '../../../models/product';
import { truncateChars, replaceDotWithComma } from '../../../shared/utils/helperFunctions';


const ProductCard = (props: Product & NavigationScreenProps) => {

  return (
    <Card style={styles.productCard}>
      <HeadingText>{props.title}</HeadingText>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require('../../../assets/placeholder-image.png')}
      />
      <View style={styles.content}>
        <View>
          <MainText>{truncateChars(props.description, 30)}</MainText>
          <HeadingText>R${replaceDotWithComma(props.price)}</HeadingText>
          <Button
            title="Ver produto"
            onPress={() => {
              props.navigation.navigate("DetailScreen", {
                id: props.id,
                title: props.title,
                description: props.description,
                price: props.price,
                qty: 1
              })
            }} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  productCard: {
    height: 550,
  },
  content: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    maxHeight: '50%'
  }
});

export default withNavigation(ProductCard);