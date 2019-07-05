import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View, Button, TextInput } from "react-native";
// import { Button, Icon } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";

import ChatMessage from '../../components/ChatMessage/ChatMessage';

class HomeScreen extends Component<NavigationScreenProps> {
  state = {
    chatText: "",
    chats: []
  };

  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Tela de chat com o Robôzin",
    headerLeft: Platform.select({
      ios: null,
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
    }),
    // headerRight: 
  });

  chatTextChangedHandler = (val: any) => {
    this.setState({
      chatText: val
    });
  };


  chatSubmitHandler = () => {
    if (this.state.chatText.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        chats: prevState.chats.concat(prevState.chatText),
        chatText: ''
      };
    });
    // this.setState({ chatText: '' });
  };

  render() {
    const { navigate } = this.props.navigation;
    const chatsOutput = this.state.chats.map((chat, i) => (
      <ChatMessage key={i} chatText={chat} />
    ));
    return (
      <View style={styles.container}>
        <Button title="Botão de test de link de produtos" onPress={() => navigate("DetailScreen")} />
        <View style={styles.container}>
          <View style={styles.chatContainer}>{chatsOutput}</View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Digite sua pergunta"
              value={this.state.chatText}
              onChangeText={this.chatTextChangedHandler}
              style={styles.chatInput}
            />
            <Button
              title=">>"
              style={styles.chatButton}
              onPress={this.chatSubmitHandler}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;