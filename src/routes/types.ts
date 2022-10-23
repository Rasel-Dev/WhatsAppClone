import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
  Auth: undefined;
  Home: undefined;
  Message: { roomId: string };
};

export type AuthScreenNavigationProps = NativeStackNavigationProp<StackParamList, 'Auth'>;
export type HomeScreenNavigationProps = NativeStackNavigationProp<StackParamList, 'Home'>;
export type MessageScreenNavigationProps = NativeStackNavigationProp<StackParamList, 'Message'>;
export type MessageScreenRouteProps = RouteProp<StackParamList, 'Message'>;
