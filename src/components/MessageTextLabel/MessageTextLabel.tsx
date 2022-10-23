import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colorString from '../../constants/colorString';

type Props = {
  text: string;
  self?: boolean;
};

const MessageTextLabel: React.FC<Props> = ({ text, self }) => {
  return (
    <View style={styles.MessageBox}>
      <Text
        style={[
          styles.MessageContent,
          self ? styles.MessageContentSelf : styles.MessageContentOther,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default MessageTextLabel;

const styles = StyleSheet.create({
  MessageBox: {
    margin: 5,
  },
  MessageContent: {
    maxWidth: '90%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#ddd',
    borderRadius: 5,
    lineHeight: 18,
  },
  MessageContentOther: {
    alignSelf: 'flex-start',
    backgroundColor: colorString.MAIN_DEEP,
  },
  MessageContentSelf: {
    alignSelf: 'flex-end',
    backgroundColor: colorString.MAIN,
  },
});
