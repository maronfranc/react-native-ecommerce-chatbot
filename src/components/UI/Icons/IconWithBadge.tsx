import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  badgeCount: number;
  color: string;
  size: number;
}

const IconWithBadge = (props: Props) => {
  const { name, badgeCount, color, size } = props;
  return (
    <View style={styles.container}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeCount}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    margin: 5
  },
  badge: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#ccb610',
    right: -6,
    top: -3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  badgeCount: {
    fontWeight: 'bold',
    color: '#111'
  },
});

export default IconWithBadge;