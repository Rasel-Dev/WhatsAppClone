import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colorString from '../../constants/colorString';
import global from '../../screens/global';

type Props = {
  text: string;
  handler: () => any;
  isLoading?: boolean;
};

const AuthBtn: React.FC<Props> = ({ text, handler, isLoading }) => {
  return (
    <Pressable onPress={handler}>
      <View style={styles.btn}>
        {isLoading ? (
          <ActivityIndicator color={colorString.GREEN} />
        ) : (
          <Text style={global.testWhite}>{text}</Text>
        )}
      </View>
    </Pressable>
  );
};

export default AuthBtn;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: colorString.MAIN_DEEP,
    borderRadius: 4,
  },
});
