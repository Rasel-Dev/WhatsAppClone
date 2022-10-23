import { FlatList, View } from 'react-native';
import React from 'react';
import { HomeScreenNavigationProps } from '../../routes/types';
import global from '../global';
import JSON from '../../json/app.json';
import UserLabel from '../../components/MessageLabel/UserLabel';
import MainHeader from '../../components/Headers/MainHeader';
import { useDispatch } from '../../contexts/Provider';
import DropMenu from '../../components/Headers/DropMenu';

type Props = {
  navigation: HomeScreenNavigationProps;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const { state } = useDispatch();
  return (
    <View style={global.container}>
      <DropMenu isShow={state.toggleMenu} />
      <MainHeader />
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
      />
    </View>
  );
};

export default Home;
