import { Alert, Image, Keyboard, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { AuthScreenNavigationProps } from '../../routes/types';
import global from '../global';
import InputText from '../../components/Inputs/TextInput';
import AuthBtn from '../../components/Buttons/AuthBtn';

type Props = {
  navigation: AuthScreenNavigationProps;
};

const Auth: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const [login, setLogin] = React.useState({ phone: '', username: '' });
  const [error, setError] = React.useState({ phone: '', username: '' });

  const handleInputPhone = (text: string) => {
    if (error.phone) setError((prev) => ({ ...prev, phone: '' }));
    setLogin((prev) => ({ ...prev, phone: text }));
  };

  const handleInputUsername = (text: string) => {
    if (error.username) setError((prev) => ({ ...prev, username: '' }));
    setLogin((prev) => ({ ...prev, username: text }));
  };

  const handleLogin = () => {
    Keyboard.dismiss();
    const { phone, username } = login;
    if (!phone || !username) {
      if (!phone) setError((prev) => ({ ...prev, phone: 'Phone is required!' }));
      if (!username) setError((prev) => ({ ...prev, username: 'Username is required!' }));
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.replace('Home');
      }, 5000);
    }
  };

  return (
    <View style={global.container}>
      <View style={styles.upperSec}>
        <View style={styles.logoSpace}>
          <Image style={styles.logo} source={require('../../images/pngwing.com.png')} />
          <Text style={styles.logoText}>WhatsApp</Text>
        </View>
        <View style={styles.authBox}>
          <InputText
            type={'phone-pad'}
            label="phone"
            hint="Enter phone"
            value={login.phone}
            handler={handleInputPhone}
            error={error.phone}
          />
          <InputText
            type={'number'}
            label="user"
            hint="Enter username"
            value={login.username}
            handler={handleInputUsername}
            error={error.username}
          />
        </View>
        <AuthBtn text="Login" handler={handleLogin} isLoading={loading} />
      </View>
      <View style={styles.bottomSec}>
        <Text style={global.testWhite}>Powerd by</Text>
        <Text style={[{ fontWeight: 'bold', marginLeft: 3 }, global.testWhite]}>RaselDev</Text>
      </View>
    </View>
  );
};

export default Auth;
