import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View, Button } from "react-native";
// import { Icon } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Configurações",
    headerLeft: Platform.select({
      ios: (
        // <Icon name="ios-log-out" type="ionicon" containerStyle={styles.icon} onPress={() => {}} />
        <Button
          title="Menu"
          onPress={() => navigation.toggleDrawer()} />
      
      ),
      android: (
        // <Icon
        //   name="md-menu"
        //   type="ionicon"
        //   containerStyle={styles.icon}
        //   onPress={() => navigation.toggleDrawer()}
        // />
        <Button
          title="Menu"
          onPress={() => navigation.toggleDrawer()} />
      
      )
    })
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Configurações.</Text>
      </View>
    );
  }
}

export default SettingsScreen;