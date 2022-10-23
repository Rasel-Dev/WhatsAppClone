import { StyleSheet } from 'react-native';
import colorString from '../../constants/colorString';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: 'dodgerblue',
  },
  MenuSpaceDiv: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
    width: 160,
    zIndex: 1,
  },
  MenuSpace: {
    flex: 1,
    backgroundColor: colorString.MAIN,
  },
  MenuItem: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#ddd',
    backgroundColor: colorString.SECONDARY,
  },
});
export default styles;
