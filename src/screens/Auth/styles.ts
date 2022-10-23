import { StyleSheet } from 'react-native';
import colorString from '../../constants/colorString';

const styles = StyleSheet.create({
  logoSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  logoText: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
  },
  upperSec: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSec: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authBox: {
    width: '80%',
  },
  loginBtn: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: 'dodgerblue',
  },
});
export default styles;
