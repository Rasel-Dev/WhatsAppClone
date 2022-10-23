import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colorString from '../../constants/colorString';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from '../../contexts/Provider';
import { TOGGLE_MENU } from '../../contexts/actions';

type Props = {};

const MainHeader = (props: Props) => {
  const { dispatch } = useDispatch();
  const handleToggleMenu = () => {
    dispatch({ type: TOGGLE_MENU });
  };

  return (
    <View style={styles.HeaderDiv}>
      <Text style={styles.HeaderLogo}>WhatsApp</Text>
      <Pressable onPress={handleToggleMenu}>
        <IconM name="dots-vertical" size={18} color="#ddd" />
      </Pressable>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  HeaderDiv: {
    flexDirection: 'row',
    height: 42,
    backgroundColor: colorString.MAIN,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  HeaderLogo: {
    color: '#ddd',
    fontSize: 16,
    fontWeight: '600',
  },
});
