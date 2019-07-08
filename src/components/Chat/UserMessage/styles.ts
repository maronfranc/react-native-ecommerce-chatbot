import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  chatMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: '100%',
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
    marginBottom: 5,
  },
  userMessageContainer: {
    backgroundColor: '#fff'
  },
  chatbotMessageContainer: {
    backgroundColor: '#456'
  },
  chatText: {
    paddingHorizontal: 5
  },
  userText: {
    color: '#000',
  },
  chatbotText: {
    color: '#FFF'
  },
  messageIcon: {
    height: 40,
    width: 40,
    marginHorizontal: 5
  }
});

export default styles;