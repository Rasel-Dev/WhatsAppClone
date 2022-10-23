import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colorString from '../../constants/colorString';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProps } from '../../routes/types';
import { useDispatch } from '../../contexts/Provider';
import { TOGGLE_MENU } from '../../contexts/actions';

type Props = {
  avatar: string;
  username: string;
  timestamp: string;
};

const MessageHeader: React.FC<Props> = ({ avatar, username, timestamp }) => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const { dispatch } = useDispatch();
  const handleToggleMenu = () => {
    dispatch({ type: TOGGLE_MENU });
  };

  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.MessageHeaderSpace}>
      <Pressable onPress={handleGoBack}>
        <Icon name="arrow-left" size={20} color="#fff" />
      </Pressable>
      {avatar && <Image style={styles.UserLogo} source={{ uri: avatar }} />}
      <View style={styles.LabelData}>
        <Text style={styles.UserName}>{username}</Text>
        <Text style={styles.LabelMessage}>{timestamp}</Text>
      </View>
      <Pressable onPress={handleToggleMenu}>
        <IconM name="dots-vertical" size={18} color="#ddd" />
      </Pressable>
    </View>
  );
};

export default MessageHeader;

const styles = StyleSheet.create({
  MessageHeaderSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    paddingHorizontal: 10,
    backgroundColor: colorString.MAIN,
  },
  UserLogo: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
    borderRadius: 35,
  },
  LabelData: {
    flex: 1,
    flexDirection: 'column',
  },
  LabelMessage: {
    fontSize: 10,
    color: '#ddd',
  },
  LabelDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UserName: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
