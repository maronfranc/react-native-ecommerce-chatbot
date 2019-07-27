import React from 'react';
import { View, Image } from 'react-native';

import MainText from '../../UI/MainText/MainText';
import styles from './styles';

interface Props {
  chatText: string;
}

const ChatbotMessage = (props: Props) => (
  <View style={[
    styles.chatMessageContainer,
    styles.chatbotMessageContainer,
  ]}>
    <Image style={styles.messageIcon} source={require('../../../assets/icon.png')} />
    <MainText style={[
      styles.chatText,
      styles.chatbotText,
    ]}>
      {props.chatText}
    </MainText>
  </View>
);

export default ChatbotMessage;