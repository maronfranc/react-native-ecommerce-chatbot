import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";

class HomeScreen extends Component<NavigationScreenProps> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Lista de produtos",
    headerLeft: Platform.select({
      ios: (
        <Button
          title="Menu"
          onPress={() => navigation.toggleDrawer()} />
      ),
      android: (
        null
      )
    }),
    
  });

  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Botão de teste de link de produtos"
        onPress={() => this.props.navigation.push("DetailScreen")} />
      </View>
    );
  }
}

export default HomeScreen;