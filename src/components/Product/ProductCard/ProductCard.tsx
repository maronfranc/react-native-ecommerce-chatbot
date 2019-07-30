import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { withNavigation, NavigationScreenProps } from 'react-navigation';

import MainText from '../../UI/MainText/MainText';
import HeadingText from '../../UI/HeadingText/HeadingText';
import Card from '../../UI/Card/Card';
import { Product } from '../../../models/product';
import { replaceDotWithComma } from '../../../shared/utils/helperFunctions';
import ButtonWithBackground from '../../UI/ButtonWithBackground/ButtonWithBackground';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { addToCartOrUpdate } from '../../../store/actions/cartAction';


const ProductCard = (props: Product & NavigationScreenProps) => {
  const product: Product = {
    id: props.id,
    title: props.title,
    description: props.description,
    price: props.price,
    qty: 1
  }
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
          <MainText numberOfLines={3}>{props.description}</MainText>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <HeadingText>Preço: R${replaceDotWithComma(props.price)}</HeadingText>
            <ButtonWithBackground
              title={<Icon name="ios-cart" size={30} color="#fff" />}
              onPress={() => { props.onAddToCartOrUpdate(product) }} />
          </View>

          <ButtonWithBackground
            title="Ver produto"
            onPress={() => { props.navigation.navigate("DetailScreen", product) }} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCartOrUpdate: (product: Product) => dispatch(addToCartOrUpdate(product))
  }
}


export default connect(null, mapDispatchToProps)(withNavigation(ProductCard));
