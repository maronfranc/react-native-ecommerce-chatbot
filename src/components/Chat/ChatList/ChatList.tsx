import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { View } from 'react-native';

import UserMessage from "../UserMessage/UserMessage";
import ChatbotMessage from "../UserMessage/ChatbotMessage";

interface Props {
  messages: Array<string>;
}

const ChatFlatList = (props: Props) => {
  let _renderItem = ({ item }: { item: string }) => (
    <View>
      <UserMessage chatText={item} />
      <ChatbotMessage chatText={item} />
    </View>
  );
  return (
    <FlatList
      data={props.messages}
      renderItem={_renderItem}
      keyExtractor={(item, id) => item}
      // inverted
    />
  );
};

export default ChatFlatList;
