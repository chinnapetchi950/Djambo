import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function AppButton({ btnstyle, title, onPress }) {
  return (
    <TouchableOpacity style={[styles.btn, btnstyle]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',             // full width container
    backgroundColor: Colors.primary,
    height: hp('7%'),          // responsive height
    borderRadius: wp('7%'),    // responsive border radius
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1.5%'),
  },
  text: {
    color: '#fff',
    fontSize: wp('4.5%'),      // responsive font size
    fontWeight: '600',
  },
});
