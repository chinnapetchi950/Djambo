import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    backgroundColor: Colors.primary,
    height: 56,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    //marginHorizontal:20,
    bottom:30,
    left:20,
    position:'absolute'
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
