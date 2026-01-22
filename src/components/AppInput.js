import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function AppInput({
  secureTextEntry,
  style,
  ...props
}) {
  const [hide, setHide] = useState(secureTextEntry);

  const Wrapper = Platform.OS === 'ios' ? BlurView : View;

  return (
    <View style={styles.container}>
      <Wrapper
        {...(Platform.OS === 'ios'
          ? { blurType: 'dark', blurAmount: 16 }
          : {})}
        style={styles.glass}
      >
        <TextInput
          {...props}
          style={[styles.input, style]}
          placeholderTextColor="rgba(255,255,255,0.6)"
          secureTextEntry={hide}
        />

        {secureTextEntry && (
          <TouchableOpacity
            style={styles.eye}
            onPress={() => setHide(!hide)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={hide ? 'eye-off-outline' : 'eye-outline'}
              size={wp('5%')}
              color="rgba(255,255,255,0.7)"
            />
          </TouchableOpacity>
        )}
      </Wrapper>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: hp('1.5%'),
  },

  glass: {
    height: hp('6.5%'),
    borderRadius: wp('3%'),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    justifyContent: 'center',
  },

  input: {
    height: '100%',
    paddingHorizontal: wp('4%'),
    paddingRight: wp('12%'),
    color: '#fff',
    fontSize: wp('4%'),
    backgroundColor: 'transparent', // IMPORTANT
  },

  eye: {
    position: 'absolute',
    right: wp('3%'),
    top: hp('2%'),
  },
});
