import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

export default function LoginScreen() {
  const [loginMode, setLoginMode] = useState('password'); // password | pin
  const [fieldType, setFieldType] = useState('email');   // email | phone
  const [pin, setPin] = useState(['6', '8', '4', '1']);  // demo PIN

  const handlePinChange = (text) => {
    if (!/^\d*$/.test(text)) return;
    const arr = text.split('').slice(0, 4);
    setPin([...arr, '', '', '', ''].slice(0, 4));
  };

  return (
    <ScreenWrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require('../../../assets/images/login_bg.png')}
          style={styles.container}
        >
          {/* Header */}
          <Text style={styles.title}>Welcome to DJAMBO</Text>
          <Text style={styles.subTitle}>
            Choose your preferred login method
          </Text>

          {/* Password / PIN Switch */}
          <View style={styles.switchContainer}>
            <TouchableOpacity
              style={[
                styles.switchBtn,
                loginMode === 'password' && styles.switchActive,
              ]}
              onPress={() => setLoginMode('password')}
            >
              <Text
                style={
                  loginMode === 'password'
                    ? styles.switchTextActive
                    : styles.switchText
                }
              >
                Login With Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.switchBtn,
                loginMode === 'pin' && styles.switchActive,
              ]}
              onPress={() => setLoginMode('pin')}
            >
              <Text
                style={
                  loginMode === 'pin'
                    ? styles.switchTextActive
                    : styles.switchText
                }
              >
                Login With 4 Digit PIN
              </Text>
            </TouchableOpacity>
          </View>

          {/* Email / Phone Toggle */}
          {loginMode === 'password' && (
            <View style={styles.smallSwitch}>
              <TouchableOpacity
                style={[
                  styles.smallBtn,
                  fieldType === 'email' && styles.switchActive,
                ]}
                onPress={() => setFieldType('email')}
              >
                <Text
                  style={
                    fieldType === 'email'
                      ? styles.switchTextActive
                      : styles.switchText
                  }
                >
                  Email
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.smallBtn,
                  fieldType === 'phone' && styles.switchActive,
                ]}
                onPress={() => setFieldType('phone')}
              >
                <Text
                  style={
                    fieldType === 'phone'
                      ? styles.switchTextActive
                      : styles.switchText
                  }
                >
                  Phone No.
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Email Input */}
          {loginMode === 'password' && fieldType === 'email' && (
            <AppInput placeholder="Example@gmail.com" />
          )}

          {/* Phone Input */}
          {loginMode === 'password' && fieldType === 'phone' && (
            <View style={styles.phoneRow}>
              <View style={styles.countryBox}>
                <Text style={styles.countryText}>🇺🇸 +1</Text>
                <Text style={styles.arrow}>▼</Text>
              </View>
              <View style={{ flex: 1 }}>
                <AppInput placeholder="00000-00000" keyboardType="number-pad" />
              </View>
            </View>
          )}

          {/* Password */}
          {loginMode === 'password' && (
            <>
              <Text style={styles.label}>Password</Text>
              <AppInput placeholder="********" secureTextEntry />
              <TouchableOpacity style={styles.forgot}>
                <Text style={styles.forgotText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </>
          )}

          {/* PIN UI */}
          {loginMode === 'pin' && (
            <>
              <View style={styles.pinRow}>
                {pin.map((d, i) => (
                  <View key={i} style={styles.pinBox}>
                    <Text style={styles.pinText}>{d}</Text>
                  </View>
                ))}
              </View>

              <TextInput
                style={styles.hiddenInput}
                value={pin.join('')}
                onChangeText={handlePinChange}
                keyboardType="number-pad"
                maxLength={4}
              />

              <TouchableOpacity style={styles.forgot}>
                <Text style={styles.forgotText}>Forgot PIN ?</Text>
              </TouchableOpacity>
            </>
          )}

          {/* Login Button */}
          <AppButton title="Log In" style={{ marginTop: 30,alignItems:'center' }} />

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don’t have an account?{' '}
              <Text style={styles.link}>Create one</Text>
            </Text>

            <Text style={styles.footerText}>
              <Text style={styles.link}>Terms & Condition</Text> |{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { color: '#fff', fontSize: 28, fontWeight: '600' },
  subTitle: { color: '#9c9c9c', marginBottom: 20 },

  switchContainer: {
    flexDirection: 'row',
    backgroundColor: '#1b1b1b',
    borderRadius: 30,
    marginBottom: 20,
  },
  switchBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 30,
  },
  switchActive: { backgroundColor: '#fff' },
  switchTextActive: { color: '#000', fontWeight: '600' },
  switchText: { color: '#aaa' },

  smallSwitch: {
    flexDirection: 'row',
    backgroundColor: '#1b1b1b',
    borderRadius: 25,
    marginBottom: 16,
  },
  smallBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 25,
  },

  phoneRow: { flexDirection: 'row', gap: 10 },
  countryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  countryText: { color: '#fff', marginRight: 6 },
  arrow: { color: '#ff3b3b', fontSize: 10 },

  label: { color: '#9c9c9c', marginTop: 10 },
  forgot: { alignItems: 'flex-end', marginTop: 6 },
  forgotText: { color: '#fff' },

  pinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  pinBox: {
    width: 55,
    height: 55,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3d3d3d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinText: { color: '#fff', fontSize: 18 },

  hiddenInput: { position: 'absolute', opacity: 0 },

  footer: { alignItems: 'center', marginTop: 30 },
  footerText: { color: '#9c9c9c', marginTop: 8 },
  link: { color: '#fff', textDecorationLine: 'underline' },
});
