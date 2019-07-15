import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View, Button, Alert } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";

import { uiStartLoading, uiStopLoading } from "../../store/actions/uiAction";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import ChatFlatList from "../../components/Chat/ChatFlatList/ChatFlatList";
import Icon from "react-native-vector-icons/Ionicons";

type State = {
  chatText: string;
  messages: Array<string>;
}

class ChatScreen extends Component<NavigationScreenProps, State> {
  state: State = {
    chatText: '',
    messages: []
  };

  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "",
    // headerLeft: Platform.select({
    //   ios: null,
    //   android: (
    //     <ButtonWithBackground
    //       backgroundColor="#345"
    //       onPress={() => navigation.toggleDrawer()}>
    //       <Text style={styles.whiteBold}>MENU</Text>
    //     </ButtonWithBackground>
    //   )
    // }),
    // headerRight: (
    //   <ButtonWithBackground
    //     backgroundColor="#345"
    //     onPress={() => Alert.alert('Botão de sair Pressionado')}
    //   >
    //     <Text style={styles.whiteBold}>SAIR</Text>
    //   </ButtonWithBackground>
    // )
  });

  chatTextChangedHandler = (val: string) => {
    this.setState({
      chatText: val
    });
  };

  chatSubmitHandler = () => {
    if (this.state.chatText.trim() === "") return;
    this.setState(prevState => {
      return {
        messages: prevState.messages.concat(prevState.chatText),
        chatText: ''
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <ChatFlatList messages={this.state.messages} />
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Pergunte ao nosso Robô"
              placeholderTextColor="#333"
              value={this.state.chatText}
              onChangeText={this.chatTextChangedHandler}
            />
            <ButtonWithBackground
              backgroundColor="#345"
              onPress={this.chatSubmitHandler}
            >
              {/* <Text style={styles.whiteBold}>
                ENVIAR
              </Text> */}
              <Icon name="md-send" size={30} color="#fff" />
            </ButtonWithBackground>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.ui.isLoading
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onUiStartLoading: () => dispatch(uiStartLoading()),
    onUiStopLoading: () => dispatch(uiStopLoading()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);