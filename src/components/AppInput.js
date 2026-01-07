import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

export default function AppInput(props) {
  return (
    <TextInput
      placeholderTextColor={Colors.muted}
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.inputBg,
    color: Colors.text,
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 52,
    marginBottom: 16,
  },
});
