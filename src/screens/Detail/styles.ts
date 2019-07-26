import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {
    flex: 1,
    width: '100%',
  },
  content: {
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  image: {
    maxHeight: '75%',
    width: '100%'
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 50
  }
});

export default styles;