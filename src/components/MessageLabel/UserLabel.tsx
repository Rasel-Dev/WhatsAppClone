import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import colorString from '../../constants/colorString';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList, TabParamsList } from '../../routes/types';

type Props = {
  avatar: string;
  username: string;
  lastMessage: string;
  timestamp: string;
  unreaded: number;
};

const UserLabel = ({ avatar, username, lastMessage, timestamp, unreaded }: Props) => {
  const navigation = useNavigation<NativeStackScreenProps<StackParamList, 'Home'>>();

  const handleNavigateToUser = () => {
    navigation.navigate('Message', {
      roomId: username,
    });
  };

  return (
    <TouchableHighlight underlayColor={colorString.MAIN} onPress={handleNavigateToUser}>
      <View style={styles.LabelSpace}>
        <Image style={styles.UserLogo} source={{ uri: avatar, cache: 'only-if-cached' }} />
        <View style={styles.LabelData}>
          <View style={styles.LabelDiv}>
            <Text style={styles.UserName}>{username}</Text>
            <Text
              style={[
                styles.LabelBadge,
                !!Number(unreaded) ? { color: colorString.GREEN } : { color: '#ddd' },
              ]}
            >
              {timestamp}
            </Text>
          </View>
          <View style={styles.LabelDiv}>
            <Text style={styles.LabelMessage}>{lastMessage}</Text>
            {!!Number(unreaded) && (
              <View
                style={[
                  styles.LabelAlertBadge,
                  !!Number(unreaded) ? { display: 'flex' } : { display: 'none' },
                ]}
              >
                <Text style={styles.LabelAlertBadgeText}>{unreaded > 9 ? '9+' : unreaded}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default UserLabel;

const styles = StyleSheet.create({
  LabelSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 0.4,
    borderTopColor: colorString.MAIN,
    backgroundColor: colorString.MAIN_DARK,
  },
  UserLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 40,
  },
  LabelData: {
    flex: 1,
    flexDirection: 'column',
  },
  LabelDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UserName: {
    fontWeight: 'bold',
    color: '#fff',
  },
  LabelMessage: {
    fontSize: 10,
    color: '#ddd',
  },
  LabelBadge: {
    fontSize: 9,
    fontWeight: '500',
  },
  LabelAlertBadge: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorString.GREEN,
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  LabelAlertBadgeText: {
    fontSize: 8,
    fontWeight: '500',
    color: colorString.MAIN,
  },
});
