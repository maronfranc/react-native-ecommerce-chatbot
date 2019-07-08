import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import MainText from '../../UI/MainText/MainText';
import styles from './styles';

interface Props {
  chatText: string;
}

const UserMessage = (props: Props) => (
  <View style={[
    styles.chatMessageContainer,
    styles.userMessageContainer,
  ]}>
    <Image style={styles.messageIcon} source={require('../../../assets/user-placeholder.png')} />
    <MainText style={[
      styles.chatText,
      styles.userText
    ]}>{props.chatText}</MainText>
  </View>
);

export default UserMessage;