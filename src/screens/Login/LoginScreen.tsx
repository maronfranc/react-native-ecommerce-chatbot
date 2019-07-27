import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { NavigationScreenProps } from "react-navigation";

import styles from './styles';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class LoginScreen extends Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 250 }}
          source={require('../../assets/Logo.png')} />
          <HeadingText>Em construção</HeadingText>
        <ButtonWithBackground
          title="Voltar"
          onPress={() => this.props.navigation.navigate('HomeStack')} />
      </View>
    );
  }
}

export default LoginScreen;