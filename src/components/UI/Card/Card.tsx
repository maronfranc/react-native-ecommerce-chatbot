import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props: any) => (
  <View
    {...props}
    style={[styles.container, props.style]}
  >{props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
});

export default Card;