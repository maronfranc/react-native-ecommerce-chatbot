import styles from "./styles";
import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { NavigationScreenProps } from "react-navigation";

class LoadingScreen extends Component<NavigationScreenProps> {
  componentDidMount = () => {
    this.props.navigation.navigate("LoginScreen");
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando...</Text>
      </View>
    );
  }
}

export default LoadingScreen;