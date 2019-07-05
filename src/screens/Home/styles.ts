import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-evenly",
    // alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  icon: {
    paddingLeft: 10
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: "#e0df6c"
  },
  chatInput: {
    width: "70%",
  },
  chatButton: {
    width: "30%"
  },
  chatContainer: {
    width: "100%"
  }
});

export default styles;