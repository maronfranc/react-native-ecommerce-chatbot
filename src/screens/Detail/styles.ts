import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: '100%',
  },  
  content: {
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 25,
  },
  image: {
    maxHeight: '75%',
    width: '100%'
  }
  
});

export default styles;