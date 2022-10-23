import { FlatList, Image, ImageBackground, Pressable, Text, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { MessageScreenNavigationProps, MessageScreenRouteProps } from '../../routes/types';
import JSON from '../../json/app.json';
import global from '../global';
import MessageHeader from '../../components/Headers/MessageHeader';
import DropMenu from '../../components/Headers/DropMenu';
import { useDispatch } from '../../contexts/Provider';
import styles from './styles';
import MessageInput from '../../components/MessageInput/MessageInput';
import MessageTextLabel from '../../components/MessageTextLabel/MessageTextLabel';

const messages = [
  { text: 'Hello Buddy!', self: false },
  { text: 'Whats up?', self: true },
  {
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: false,
  },
  { text: 'Now whats?', self: true },
  {
    text: 'Are you read this article',
    self: false,
  },
  {
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: true,
  },
  { text: 'Hello Buddy!', self: false },
  { text: 'Whats up?', self: true },
  {
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: false,
  },
  { text: 'Now whats?', self: true },
  {
    text: 'Are you read this article',
    self: false,
  },
  {
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: true,
  },
  { text: 'Hello Buddy!', self: false },
  { text: 'Whats up?', self: true },
  {
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: false,
  },
  { text: 'Now whats?', self: true },
  {
    text: 'Are you read this article',
    self: false,
  },
  {
    text: 'React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP by enabling developers to use the React framework along with native platform',
    self: true,
  },
];

type Props = {
  navigation: MessageScreenNavigationProps;
  route: MessageScreenRouteProps;
};

const Message: React.FC<Props> = ({ route, navigation }) => {
  const { roomId } = route.params;
  const { state } = useDispatch();
  let flatListref = useRef(null);
  const [friend, setFriend] = useState({ avatar: '', username: '', timestamp: '' });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const user = JSON.users.filter((u) => u.username === roomId)[0];
      setFriend({
        avatar: user.avatar,
        username: user.username,
        timestamp: user.timestamp,
      });
      // flatListref?.scrollToEnd({ animated: true });
    }
    return () => {
      mounted = false;
    };
  }, [roomId]);

  return (
    <View style={global.container}>
      <DropMenu isShow={state.toggleMenu} />
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
            data={messages}
            renderItem={({ item }) => <MessageTextLabel text={item.text} self={item.self} />}
            ref={(ref) => {
              // flatListref = ref;
              ref?.scrollToEnd({ animated: true });
            }}
          />
        </View>
        <MessageInput />
      </ImageBackground>
    </View>
  );
};

export default Message;
