import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colorString from '../../constants/colorString';

type Props = {
  type: 'default' | 'phone-pad' | any;
  label: string;
  hint: string;
  value: string | null;
  handler: (text: any) => any;
  error?: string;
};

const InputText: React.FC<Props> = ({ type, label, hint, value, handler, error }) => {
  return (
    <View style={styles.InputArea}>
      <View style={styles.InputFieldArea}>
        <Icon name={label} size={20} color="#fff" />
        <TextInput
          style={styles.InputField}
          placeholder={hint}
          keyboardType={type}
          placeholderTextColor="#ddd"
          value={value || ''}
          onChangeText={handler}
        />
      </View>
      {error && (
        <Text style={{ textAlign: 'right', fontSize: 12, color: colorString.RED }}>{error}</Text>
      )}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  InputArea: {
    marginBottom: 15,
  },
  InputFieldArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: colorString.MAIN,
    borderRadius: 5,
  },
  InputField: {
    flex: 1,
    padding: 5,
    color: '#fff',
    marginLeft: 5,
  },
});
