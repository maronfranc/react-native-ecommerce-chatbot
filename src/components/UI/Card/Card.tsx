import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props: any) => (
  <View {...props} style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 15,
    backgroundColor: '#fff'
  },
});

export default Card;