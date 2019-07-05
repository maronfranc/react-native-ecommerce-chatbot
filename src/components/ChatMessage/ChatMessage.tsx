import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const chatMessage = (props: any) => (
  <View style={styles.chatMessage}>
    <Text>{props.chatText}</Text>
  </View>
);



export default chatMessage;