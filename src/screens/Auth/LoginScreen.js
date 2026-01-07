import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

export default function LoginScreen() {
  const [mode, setMode] = useState('password');

  return (
    <ScreenWrapper>
      <Text style={styles.title}>Welcome to DJAMBO</Text>

      <View style={styles.switch}>
        <TouchableOpacity onPress={() => setMode('password')}>
          <Text style={mode === 'password' ? styles.active : styles.inactive}>
            Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode('pin')}>
          <Text style={mode === 'pin' ? styles.active : styles.inactive}>
            PIN
          </Text>
        </TouchableOpacity>
      </View>

      <AppInput placeholder="Email or Phone" />
      {mode === 'password' ? (
        <AppInput placeholder="Password" secureTextEntry />
      ) : (
        <AppInput placeholder="4 Digit PIN" keyboardType="numeric" />
      )}

      <AppButton title="Log In" />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: { color: '#fff', fontSize: 28, marginBottom: 20 },
  switch: { flexDirection: 'row', justifyContent: 'space-between' },
  active: { color: '#fff', fontWeight: '600' },
  inactive: { color: '#777' },
});
