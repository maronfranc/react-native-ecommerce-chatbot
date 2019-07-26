import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { NavigationScreenProps } from "react-navigation";

import styles from './styles';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class LoginScreen extends Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 250 }}
          source={require('../../assets/Logo.png')} />
        <ButtonWithBackground
          backgroundColor={"#345"}
          title="Conversar Com o nosso Robô"
          onPress={() => this.props.navigation.navigate('MainNavigator')} />
      </View>
    );
  }
}

export default LoginScreen;