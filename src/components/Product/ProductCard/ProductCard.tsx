import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

import MainText from '../../UI/MainText/MainText';
import { withNavigation, NavigationScreenProps } from 'react-navigation';
import HeadingText from '../../UI/HeadingText/HeadingText';
import { Product } from '../../../models/product';


const ProductCard = (props: Product & NavigationScreenProps) => {
  // Se a string for mais longa que o limit, não mostra mais o resto e adiciona '...'
  const truncateChars = (input: string, limit: number) =>
    input.length > limit ? `${input.substring(0, limit)}...` : input;

  return (
    <View style={styles.productContainer}>
      <HeadingText>{props.title}</HeadingText>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require('../../../assets/placeholder-image.png')}
      />
      <View style={styles.content}>
        <View>
          <MainText>{truncateChars(props.description, 20)}</MainText>
          <HeadingText>R${props.price}</HeadingText>
          <Button
            title="Ver produto"
            onPress={() => {
              props.navigation.navigate("DetailScreen", {
                id: props.id,
                title: props.title,
                description: props.description,
                price: props.price,
              })
            }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    alignItems: "center",
    // justifyContent: 'space-between',
    width: '100%',
    height: 500,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  content: {
    margin: 25,
    width: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    maxHeight: '50%'
  }
});

export default withNavigation(ProductCard);