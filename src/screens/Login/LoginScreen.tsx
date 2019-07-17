import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { NavigationScreenProps } from "react-navigation";

import styles from './styles';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import MainText from '../../components/UI/MainText/MainText';

class LoginScreen extends Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 250 }}
          source={require('../../assets/Logo.png')} />
        <ButtonWithBackground
          backgroundColor={"#345"}
          onPress={() => this.props.navigation.navigate('MainNavigator')}>
          <MainText style={{ fontWeight: 'bold', color: '#fff' }}>
            CONVERSAR COM O NOSSO ROBÔ
          </MainText>
        </ButtonWithBackground>
      </View>
    );
  }
}

export default LoginScreen;