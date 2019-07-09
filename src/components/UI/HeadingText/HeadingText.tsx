import React from "react";
import { Text, StyleSheet } from "react-native";

const HeadingText = (props: any) => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: '#222',
    textAlign: 'center',
    marginVertical: 15
  }
});

export default HeadingText;
