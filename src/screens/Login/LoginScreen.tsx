import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationScreenProps } from "react-navigation";

class LoginScreen extends Component<NavigationScreenProps> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Tela de entrada.</Text>
        <Button title="Conversar com o nosso Robô" onPress={() => navigate('MainNavigator')} />
      </View>
    );
  }
}

export default LoginScreen;