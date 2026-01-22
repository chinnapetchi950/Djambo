
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import { Typography } from '../../theme/typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function LoginScreen({navigation}) {
  const [loginMode, setLoginMode] = useState('password'); // password | pin
  const [fieldType, setFieldType] = useState('email'); // email | phone

  // Main screen PIN
  const [pin, setPin] = useState(['', '', '', '']);
  const pinInputRef = useRef(null);

  // Modal PIN
  const [pinStep, setPinStep] = useState('create'); // create | confirm | success
  const [pinValue, setPinValue] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  // const modalPinInputRef = useRef(null);

  // ----------- MAIN SCREEN PIN HANDLER -----------
  const handlePinChange = (value) => {
    if (!/^\d*$/.test(value)) return;

    const digits = value.split('').slice(0, 4);
    setPin([...digits, '', '', '', ''].slice(0, 4));

    if (digits.length === 4) Keyboard.dismiss();
  };

  // ----------- MODAL PIN HANDLER -----------
  const handleModalPinChange = (text) => {
    if (!/^\d*$/.test(text)) return;

    if (pinStep === 'create') {
      setPinValue(text);
      if (text.length === 4) setPinStep('confirm');
    } else if (pinStep === 'confirm') {
      setConfirmPin(text);
      if (text.length === 4 && text === pinValue) {
        setPinStep('success');
      }
    }
  };

  // Focus modal PIN input when modal opens
  // useEffect(() => {
  //   if (showPinModal) {
  //     setTimeout(() => {
  //       modalPinInputRef.current?.focus();
  //     }, 100);
  //   }
  // }, [showPinModal]);

  const createOne = () => {
    // if(loginMode==='pin') {
    //   setShowPinModal(true);
    //   setPinStep('create');
    //   setPinValue('');
    //   setConfirmPin('');
    // } else {
      navigation.navigate('createProfile');
      //na Handle password login
   // }
  };
const openPinKeyboard = () => {
  if (!pinInputRef.current) return;

  pinInputRef.current.blur(); // 👈 reset focus

  setTimeout(() => {
    pinInputRef.current.focus(); // 👈 reopen keyboard
  }, 50);
};
  return (
    <ScreenWrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
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
                  <AppInput
                    placeholder="00000-00000"
                    keyboardType="number-pad"
                  />
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
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={openPinKeyboard}
                >
                  <View style={styles.pinRow}>
                    {pin.map((digit, index) => (
                      <View key={index} style={styles.pinBox}>
                        <Text style={styles.pinText}>{digit}</Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>

                <TextInput
                  ref={pinInputRef}
                  style={styles.hiddenInput}
                  value={pin.join('')}
                  onChangeText={handlePinChange}
                  keyboardType="number-pad"
                  maxLength={4}
                  autoFocus={false}
                />

                <TouchableOpacity style={styles.forgot}>
                  <Text style={styles.forgotText}>Forgot PIN ?</Text>
                </TouchableOpacity>
              </>
            )}

            <View style={{ marginTop: '30%' }} />

            {/* Login Button */}
            <AppButton
              title="Log In"
             // onPress={()=>{}}
               onPress={()=>{navigation.navigate('Main')}}
              style={{ marginTop: 30, alignItems: 'center' }}
            />

            {/* Footer */}
            <View style={styles.footer}>
              <View style={styles.footerRow}>
  <Text style={styles.footerText}>Don’t have an account?</Text>

  <TouchableOpacity onPress={createOne}>
    <Text style={styles.link}> Create one</Text>
  </TouchableOpacity>
</View>
<View style={[styles.footerRow,{marginTop:-2}]}>
              <Text style={styles.footerText1}>
                <Text style={styles.link1}>Terms & Condition</Text> |{' '}
                <Text style={styles.link1}>Privacy Policy</Text>
              </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>

  
    </ScreenWrapper>
  );
}

// ----------- STYLES -----------
const styles = StyleSheet.create({
  /* CONTAINER */
  container: {
    flex: 1,
    paddingHorizontal: wp('3%'),
    paddingTop: hp('2%'),
  },

  title: {
    color: '#fff',
    fontSize: wp('7%'),
    fontWeight: '700',
    marginTop: hp('1%'),
    fontFamily: Typography.fontFamily.bold,
  },

  subTitle: {
    color: '#9c9c9c',
    fontSize: wp('4%'),
    marginTop: hp('1%'),
    marginBottom: hp('4%'),
    fontFamily: Typography.fontFamily.regular,
  },

  /* SWITCH */
  switchContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: wp('8%'),
    marginBottom: hp('4%'),
    marginTop: hp('2%'),
  },

  switchBtn: {
    flex: 1,
    paddingVertical: hp('2%'),
    alignItems: 'center',
    borderRadius: wp('8%'),
  },

  switchActive: {
    backgroundColor: '#fff',
  },

  switchTextActive: {
    color: '#000',
    fontWeight: '700',
    fontSize: wp('3.6%'),
    fontFamily: Typography.fontFamily.bold,
  },

  switchText: {
    color: '#aaa',
    fontSize: wp('3.6%'),
    fontFamily: Typography.fontFamily.semibold,
  },

  /* SMALL SWITCH */
  smallSwitch: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: wp('7%'),
    marginBottom: hp('2%'),
    width: wp('60%'),
  },

  smallBtn: {
    flex: 1,
    paddingVertical: hp('1.8%'),
    alignItems: 'center',
    borderRadius: wp('7%'),
  },

  /* PHONE INPUT */
  phoneRow: {
    flexDirection: 'row',
    gap: wp('2%'),
  },

  countryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
    borderRadius: wp('4%'),
    paddingHorizontal: wp('3%'),
    height: hp('6.5%'),
  },

  countryText: {
    color: '#fff',
    fontSize: wp('4%'),
    marginRight: wp('1%'),
  },

  arrow: {
    color: '#ff3b3b',
    fontSize: wp('2.5%'),
  },

  label: {
    color: '#9c9c9c',
    marginTop: hp('1%'),
    fontSize: wp('3.6%'),
    fontFamily: Typography.fontFamily.regular,
  },

  forgot: {
    alignItems: 'flex-end',
    marginTop: hp('0.8%'),
  },

  forgotText: {
    color: '#fff',
    fontSize: wp('3.6%'),
    fontFamily: Typography.fontFamily.medium,
  },

  /* PIN MAIN */
  pinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('4%'),
    marginHorizontal: wp('10%'),
  },

  pinBox: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('4%'),
    borderWidth: 1,
    borderColor: '#3d3d3d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pinText: {
    color: '#fff',
    fontSize: wp('5%'),
  },

  hiddenInput: {
    position: 'absolute',
    opacity: 0,
  },

  /* FOOTER */
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },

  footerText: {
    color: '#9c9c9c',
    fontSize: wp('3.6%'),
    fontFamily: Typography.fontFamily.medium,
  },

  footerText1: {
    color: '#9c9c9c',
    fontSize: wp('3.4%'),
    textAlign: 'center',
    fontFamily: Typography.fontFamily.medium,
  },

  link: {
    color: '#fff',
    fontSize: wp('3.6%'),
    textDecorationLine: 'underline',
    fontFamily: Typography.fontFamily.medium,
  },

  link1: {
    color: '#fff',
    textDecorationLine: 'underline',
  },

  /* MODAL */
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  modalCard: {
    width: '100%',
    backgroundColor: '#060605',
    paddingVertical: hp('4%'),
    paddingHorizontal: wp('6%'),
    alignItems: 'center',
    borderTopRightRadius: wp('8%'),
    borderTopLeftRadius: wp('8%'),
    elevation: 35,
  },

  modalTitle: {
    color: '#fff',
    fontSize: wp('5.6%'),
    fontWeight: '700',
    marginBottom: hp('1%'),
    textAlign: 'center',
  },

  modalDesc: {
    color: '#9c9c9c',
    fontSize: wp('3.6%'),
    textAlign: 'center',
    lineHeight: hp('2.8%'),
    marginBottom: hp('4%'),
  },

  modalPinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    marginBottom: hp('4%'),
  },

  pinBoxModal: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('4%'),
    borderWidth: 1,
    borderColor: '#6b6b6b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pinDigit: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: '600',
  },

  modalBtnRow: {
    flexDirection: 'row',
    width: '100%',
    gap: wp('3%'),
  },

  skipBtn: {
    flex: 1,
    height: hp('6.5%'),
    borderRadius: wp('8%'),
    borderWidth: 1,
    borderColor: '#5a5a5a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  skipText: {
    color: '#fff',
    fontSize: wp('3.6%'),
  },

  continueBtn: {
    flex: 1,
    height: hp('6.5%'),
    borderRadius: wp('8%'),
    backgroundColor: '#ff3b3b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueText: {
    color: '#fff',
    fontSize: wp('3.8%'),
    fontWeight: '600',
  },

  /* SUCCESS */
  successBadge: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    backgroundColor: '#ff3b3b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('3%'),
  },

  successCheck: {
    color: '#fff',
    fontSize: wp('8%'),
    fontWeight: '700',
  },

  successTitle: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: hp('1.5%'),
  },

  successDesc: {
    color: '#9c9c9c',
    fontSize: wp('3.6%'),
    textAlign: 'center',
    marginBottom: hp('4%'),
  },
});

