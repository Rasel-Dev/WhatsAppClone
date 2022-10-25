import { FlatList, View } from 'react-native';
import React from 'react';
import JSON from '../../../json/app.json';
import UserLabel from '../../../components/MessageLabel/UserLabel';

const Chat: React.FC = () => {
  return (
    <FlatList
      data={JSON.users}
      renderItem={({ item }) => (
        <UserLabel
          avatar={item.avatar}
          username={item.username}
          lastMessage={item.lastMessage}
          timestamp={item.timestamp}
          unreaded={item.unreaded}
        />
      )}
      keyExtractor={(item) => item.userId.toString()}
    />
  );
};

export default Chat;
