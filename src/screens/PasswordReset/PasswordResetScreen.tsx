import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PasswordResetScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Resetar Senha.</Text>
      </View>
    );
  }
}

export default PasswordResetScreen;