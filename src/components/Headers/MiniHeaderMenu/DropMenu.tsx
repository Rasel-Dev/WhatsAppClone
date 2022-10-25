import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback } from 'react';
import { useDispatch } from '../../../contexts/Provider';
import { RESET_APP, TOGGLE_MENU } from '../../../contexts/actions';
import IconF from 'react-native-vector-icons/Feather';
import colorString from '../../../constants/colorString';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../../../routes/types';

type Props = {
  screenCode: number;
};

const DropMenu = ({ screenCode }: Props) => {
  const {
    state: { toggleMenu },
    dispatch,
  } = useDispatch();
  const navigation = useNavigation<NativeStackScreenProps<StackParamList, 'Home'>>();

  useFocusEffect(
    useCallback(() => {
      return dispatch({ type: TOGGLE_MENU, payload: 0 });
    }, [])
  );

  const handleToggleMenu = () => dispatch({ type: TOGGLE_MENU, payload: screenCode });

  const handleLogout = () => {
    dispatch({ type: RESET_APP });
    navigation.replace('Auth');
  };

  return (
    <View style={[styles.MenuSpaceDiv, { display: toggleMenu === screenCode ? 'flex' : 'none' }]}>
      <Pressable style={{ padding: 5 }} onPress={handleToggleMenu}>
        <IconF name="x" color="#ddd" size={18} />
      </Pressable>
      <View style={styles.MenuSpace}>
        <TouchableOpacity>
          <Text style={styles.MenuItem}>New Group</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.MenuItem}>Find Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.MenuItem}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.MenuItem}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropMenu;

const styles = StyleSheet.create({
  MenuSpaceDiv: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
    width: 160,
    zIndex: 1,
  },
  MenuSpace: {
    flex: 1,
    backgroundColor: colorString.MAIN,
  },
  MenuItem: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#fff',
    backgroundColor: colorString.SECONDARY,
  },
});
