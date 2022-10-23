import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import colorString from '../../constants/colorString';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};

const MessageInput = (props: Props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
      <View style={styles.MessageInputBox}>
        <Pressable>
          <IconM name="sticker-emoji" size={18} color="#fff" />
        </Pressable>
        <TextInput
          style={styles.InputField}
          placeholder="Message..."
          placeholderTextColor="#ddd"
          onChangeText={() => {}}
        />
        <Pressable>
          <Icon name="paperclip" size={18} color="#fff" />
        </Pressable>
      </View>
      <Pressable style={styles.SendButton}>
        <Icon name="send" size={18} color="#fff" />
      </Pressable>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  MessageInputBox: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: colorString.MAIN,
    paddingHorizontal: 12,
  },
  InputField: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: '#fff',
  },
  SendButton: {
    marginLeft: 5,
    width: 35,
    height: 35,
    backgroundColor: colorString.GREEN,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
