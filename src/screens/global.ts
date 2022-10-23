import { StyleSheet } from 'react-native';
import colorString from '../constants/colorString';

const global = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colorString.MAIN_DARK,
  },
  testWhite: {
    color: '#fff',
  },
});
export default global;
