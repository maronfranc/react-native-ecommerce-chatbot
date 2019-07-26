import styles from "./styles";
import React, { Component } from "react";
import { View } from "react-native";
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

interface IsLoading {
  isLoading: boolean;
}

class ChatScreen extends Component<NavigationScreenProps, State> {
  state: State = {
    chatText: '',
    messages: []
  };

  static navigationOptions = () => ({
    header: null
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
              onPress={this.chatSubmitHandler}
              title={<Icon name="md-send" size={30} color="#fff" />} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: { ui: IsLoading }) => {
  return {
    isLoading: state.ui.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUiStartLoading: () => dispatch(uiStartLoading()),
    onUiStopLoading: () => dispatch(uiStopLoading()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);