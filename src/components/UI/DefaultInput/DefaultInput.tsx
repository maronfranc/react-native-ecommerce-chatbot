import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = (props: any) => (
  // onMultilineTextInputEnter = (e) => {
  //   if (e.nativeEvent.key == "Enter") {
  //     console.warn('Enter');
  //   }
  // }
  <TextInput
    {...props}
    style={[styles.chatInput, props.style]}
    autoCapitalize="sentences"
    underlineColorAndroid="rgba(0,0,0,0)"
    // multiline={true}
    // onKeyPress={onMultilineTextInputEnter}
  />
);

const styles = StyleSheet.create({
  chatInput: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    marginLeft: 10,
    paddingLeft: 25,
    fontSize: 20,
    backgroundColor: '#fff',
    height: 50
  },
});

export default DefaultInput;
