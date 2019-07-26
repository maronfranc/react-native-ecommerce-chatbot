import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { withNavigation, NavigationScreenProps } from 'react-navigation';

import MainText from '../../UI/MainText/MainText';
import HeadingText from '../../UI/HeadingText/HeadingText';
import Card from '../../UI/Card/Card';
import { Product } from '../../../models/product';
import { truncateChars, replaceDotWithComma } from '../../../shared/utils/helperFunctions';
import ButtonWithBackground from '../../UI/ButtonWithBackground/ButtonWithBackground';


const ProductCard = (props: Product & NavigationScreenProps) => {
  return (
    <Card style={styles.productCard}>
      <HeadingText style={styles.cardTitle}>{props.title}</HeadingText>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require('../../../assets/placeholder-image.png')}
      />
      <View style={styles.content}>
        <View>
          <MainText>{truncateChars(props.description, 30)}</MainText>
          <HeadingText>R${replaceDotWithComma(props.price)}</HeadingText>
          <ButtonWithBackground
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
    maxHeight: '50%',
    width: '100%'
  },
  cardTitle: {
    backgroundColor: 'gold',
    borderBottomColor: '#012',
    borderBottomWidth: 5,
    margin: 0,
    width: '100%',
  }
});

export default withNavigation(ProductCard);