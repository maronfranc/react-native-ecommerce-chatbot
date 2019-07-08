import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationScreenProps } from "react-navigation";
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class LoginScreen extends Component<NavigationScreenProps> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 250 }}
          source={require('../../assets/Logo.png')}
        />
        <ButtonWithBackground
          backgroundColor={"#345"}
          onPress={() => navigate('MainNavigator')}
        >
          <Text style={{ fontWeight: 'bold', color: '#fff' }}>CONVERSAR COM O NOSSO ROBÔ</Text>
        </ButtonWithBackground>
        {/* <Button title="Conversar com o nosso Robô" onPress={() => navigate('MainNavigator')} /> */}
      </View>
    );
  }
}

export default LoginScreen;