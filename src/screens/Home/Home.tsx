import { Dimensions, FlatList, Text, View } from 'react-native';
import React from 'react';
import { StackParamList, TabParamsList } from '../../routes/types';
import global from '../global';
import JSON from '../../json/app.json';
import UserLabel from '../../components/MessageLabel/UserLabel';
import MainHeader from '../../components/Headers/MainHeader';
import DropMenu from '../../components/Headers/MiniHeaderMenu/DropMenu';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Chat from './Tabs/Chat';
import colorString from '../../constants/colorString';

const Tab = createMaterialTopTabNavigator<TabParamsList>();

function Best() {
  return (
    <View>
      <Text>Best</Text>
    </View>
  );
}

function Lest() {
  return (
    <View>
      <Text>Lest</Text>
    </View>
  );
}

const Home: React.FC<NativeStackScreenProps<StackParamList, 'Home'>> = ({ navigation }) => {
  const topBar = (props: MaterialTopTabBarProps) => {};

  return (
    <View style={global.container}>
      <DropMenu screenCode={1} />
      <MainHeader />
      <Tab.Navigator
        initialRouteName="Chat"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
          tabBarItemStyle: { width: Dimensions.get('window').width / 3 },
          tabBarStyle: { backgroundColor: colorString.MAIN },
          tabBarActiveTintColor: colorString.GREEN,
          tabBarInactiveTintColor: colorString.ASH,
          tabBarIndicatorStyle: { backgroundColor: colorString.GREEN },
        }}
      >
        <Tab.Screen name="Chat" component={Chat} options={{ title: 'chats' }} />
        <Tab.Screen name="Status" component={Best} />
        <Tab.Screen name="Calls" component={Lest} />
      </Tab.Navigator>
    </View>
  );
};

export default Home;
