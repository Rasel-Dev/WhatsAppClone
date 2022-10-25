import { FlatList, ImageBackground, ListRenderItem, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { StackParamList } from '../../routes/types';
import JSON from '../../json/app.json';
import global from '../global';
import MessageHeader from '../../components/Headers/MessageHeader';
import DropMenu from '../../components/Headers/MiniHeaderMenu/DropMenu';
import styles from './styles';
import MessageInput from '../../components/MessageInput/MessageInput';
import MessageTextLabel from '../../components/MessageTextLabel/MessageTextLabel';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const messages = [
  { id: 1, text: 'Hello Buddy!', self: false },
  { id: 2, text: 'Whats up?', self: true },
  {
    id: 3,
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: false,
  },
  { id: 4, text: 'Now whats?', self: true },
  {
    id: 5,
    text: 'Are you read this article',
    self: false,
  },
  {
    id: 6,
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: true,
  },
  { id: 7, text: 'Hello Buddy!', self: false },
  { id: 8, text: 'Whats up?', self: true },
  {
    id: 9,
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: false,
  },
  { id: 10, text: 'Now whats?', self: true },
  {
    id: 11,
    text: 'Are you read this article',
    self: false,
  },
  {
    id: 12,
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: true,
  },
  { id: 13, text: 'Hello Buddy!', self: false },
  { id: 14, text: 'Whats up?', self: true },
  {
    id: 15,
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: false,
  },
  { id: 16, text: 'Now whats?', self: true },
  {
    id: 17,
    text: 'Are you read this article',
    self: false,
  },
  {
    id: 18,
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: true,
  },
];

type RenProp = {
  id: number;
  text: string;
  self: boolean;
};

const Message: React.FC<NativeStackScreenProps<StackParamList, 'Message'>> = ({
  route,
  navigation,
}) => {
  const { roomId } = route.params;
  const [friend, setFriend] = useState({ avatar: '', username: '', timestamp: '' });

  useFocusEffect(
    useCallback(() => {
      let mounted = true;
      if (mounted) {
        const user = JSON.users.filter((u) => u.username === roomId)[0];
        setFriend({
          avatar: user.avatar,
          username: user.username,
          timestamp: user.timestamp,
        });
      }
      return () => {
        mounted = false;
      };
    }, [roomId])
  );

  const renderItemHandler: ListRenderItem<RenProp> = ({ item }) => (
    <MessageTextLabel text={item.text} self={item.self} />
  );

  return (
    <View style={global.container}>
      <DropMenu screenCode={2} />
      <MessageHeader
        avatar={friend.avatar}
        username={friend.username}
        timestamp={friend.timestamp}
      />
      <ImageBackground
        source={require('../../images/bg.jpg')}
        resizeMode="cover"
        style={styles.ContentBackground}
      >
        <View style={styles.MessageSpace}>
          <FlatList
            inverted={true}
            data={[...messages].reverse()}
            renderItem={renderItemHandler}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <MessageInput />
      </ImageBackground>
    </View>
  );
};

export default Message;
