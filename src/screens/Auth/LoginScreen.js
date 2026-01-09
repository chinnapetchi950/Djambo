// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ImageBackground,
//   TextInput,
//   Keyboard,
//   TouchableWithoutFeedback,
//   Modal,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import ScreenWrapper from '../../components/ScreenWrapper';
// import AppInput from '../../components/AppInput';
// import AppButton from '../../components/AppButton';
// import { Typography } from '../../theme/typography';

// export default function LoginScreen() {
//   const [loginMode, setLoginMode] = useState('password'); // password | pin
//   const [fieldType, setFieldType] = useState('email'); // email | phone
//   const [pin, setPin] = useState(['', '', '', '']);
//   const [showPinModal, setShowPinModal] = useState(false);
//   const [pinStep, setPinStep] = useState('create'); // create | confirm | success
//   const [pinValue, setPinValue] = useState('');
//   const [confirmPin, setConfirmPin] = useState('');

//   const pinInputRef = useRef(null);
//   const modalPinInputRef = useRef(null);

//   // MAIN SCREEN PIN CHANGE
//   const handlePinChange = value => {
//     if (!/^\d*$/.test(value)) return;

//     const digits = value.split('').slice(0, 4);
//     setPin([...digits, '', '', '', ''].slice(0, 4));

//     // Close keyboard after 4 digits
//     if (digits.length === 4) Keyboard.dismiss();
//   };

//   // FOCUS MODAL INPUT WHEN MODAL OPENS
//   useEffect(() => {
//     if (showPinModal && loginMode === 'pin') {
//       setTimeout(() => {
//         modalPinInputRef.current?.focus();
//       }, 100);
//     }
//   }, [showPinModal]);

//   const createOne = () => {
//     if (loginMode === 'pin') {
//       setShowPinModal(true);
//       setPinStep('create');
//       setPinValue('');
//       setConfirmPin('');
//     }
//   };

//   return (
//     <ScreenWrapper>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={{ flex: 1 }}>
//           <ImageBackground
//             source={require('../../../assets/images/login_bg.png')}
//             style={styles.container}
//           >
//             {/* HEADER */}
//             <Text style={styles.title}>Welcome to DJAMBO</Text>
//             <Text style={styles.subTitle}>
//               Choose your preferred login method
//             </Text>

//             {/* PASSWORD / PIN SWITCH */}
//             <View style={styles.switchContainer}>
//               <TouchableOpacity
//                 style={[
//                   styles.switchBtn,
//                   loginMode === 'password' && styles.switchActive,
//                 ]}
//                 onPress={() => setLoginMode('password')}
//               >
//                 <Text
//                   style={
//                     loginMode === 'password'
//                       ? styles.switchTextActive
//                       : styles.switchText
//                   }
//                 >
//                   Login With Password
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[
//                   styles.switchBtn,
//                   loginMode === 'pin' && styles.switchActive,
//                 ]}
//                 onPress={() => setLoginMode('pin')}
//               >
//                 <Text
//                   style={
//                     loginMode === 'pin'
//                       ? styles.switchTextActive
//                       : styles.switchText
//                   }
//                 >
//                   Login With 4 Digit PIN
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* EMAIL / PHONE TOGGLE */}
//             {loginMode === 'password' && (
//               <View style={styles.smallSwitch}>
//                 <TouchableOpacity
//                   style={[
//                     styles.smallBtn,
//                     fieldType === 'email' && styles.switchActive,
//                   ]}
//                   onPress={() => setFieldType('email')}
//                 >
//                   <Text
//                     style={
//                       fieldType === 'email'
//                         ? styles.switchTextActive
//                         : styles.switchText
//                     }
//                   >
//                     Email
//                   </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={[
//                     styles.smallBtn,
//                     fieldType === 'phone' && styles.switchActive,
//                   ]}
//                   onPress={() => setFieldType('phone')}
//                 >
//                   <Text
//                     style={
//                       fieldType === 'phone'
//                         ? styles.switchTextActive
//                         : styles.switchText
//                     }
//                   >
//                     Phone No.
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}

//             {/* PASSWORD INPUTS */}
//             {loginMode === 'password' && fieldType === 'email' && (
//               <AppInput placeholder="Example@gmail.com" />
//             )}
//             {loginMode === 'password' && fieldType === 'phone' && (
//               <View style={styles.phoneRow}>
//                 <View style={styles.countryBox}>
//                   <Text style={styles.countryText}>🇺🇸 +1</Text>
//                   <Text style={styles.arrow}>▼</Text>
//                 </View>
//                 <View style={{ flex: 1 }}>
//                   <AppInput placeholder="00000-00000" keyboardType="number-pad" />
//                 </View>
//               </View>
//             )}
//             {loginMode === 'password' && (
//               <>
//                 <Text style={styles.label}>Password</Text>
//                 <AppInput placeholder="********" secureTextEntry />
//                 <TouchableOpacity style={styles.forgot}>
//                   <Text style={styles.forgotText}>Forgot Password ?</Text>
//                 </TouchableOpacity>
//               </>
//             )}

//             {/* MAIN SCREEN PIN INPUT */}
//             {loginMode === 'pin' && (
//               <>
//                 <TouchableOpacity
//                   activeOpacity={1}
//                   onPress={() => pinInputRef.current?.focus()}
//                 >
//                   <View style={styles.pinRow}>
//                     {pin.map((digit, index) => (
//                       <View key={index} style={styles.pinBox}>
//                         <Text style={styles.pinText}>{digit}</Text>
//                       </View>
//                     ))}
//                   </View>
//                 </TouchableOpacity>

//                 <TextInput
//                   ref={pinInputRef}
//                   style={styles.hiddenInput}
//                   value={pin.join('')}
//                   onChangeText={handlePinChange}
//                   keyboardType="number-pad"
//                   maxLength={4}
//                   autoFocus={false}
//                   showSoftInputOnFocus
//                 />

//                 <TouchableOpacity style={styles.forgot}>
//                   <Text style={styles.forgotText}>Forgot PIN ?</Text>
//                 </TouchableOpacity>
//               </>
//             )}

//             <View style={{ marginTop: '30%' }} />

//             {/* LOGIN BUTTON */}
//             <AppButton
//               title="Log In"
//               style={{ marginTop: 30, alignItems: 'center' }}
//             />

//             {/* FOOTER */}
//             <View style={styles.footer}>
//               <Text style={styles.footerText}>
//                 Don’t have an account?{' '}
//                 <TouchableOpacity onPress={() => createOne()}>
//                   <Text style={styles.link}>Create one</Text>
//                 </TouchableOpacity>
//               </Text>

//               <Text style={styles.footerText}>
//                 <Text style={styles.link}>Terms & Condition</Text> |{' '}
//                 <Text style={styles.link}>Privacy Policy</Text>
//               </Text>
//             </View>
//           </ImageBackground>
//         </View>
//       </TouchableWithoutFeedback>

//       {/* PIN MODAL */}
//       <Modal
//         visible={showPinModal}
//         transparent
//         animationType="fade"
//         statusBarTranslucent
//         onRequestClose={() => setShowPinModal(false)}
//         onShow={() => {
//           setTimeout(() => {
//             modalPinInputRef.current?.focus();
//           }, 100);
//         }}
//       >
//         <KeyboardAvoidingView
//           style={{ flex: 1 }}
//           behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalCard}>
//               {pinStep === 'success' ? (
//                 <>
//                   <View style={styles.successBadge}>
//                     <Text style={styles.successCheck}>✓</Text>
//                   </View>
//                   <Text style={styles.successTitle}>
//                     Your Login PIN has been{'\n'}Created Successfully.
//                   </Text>
//                   <Text style={styles.successDesc}>
//                     Continue to the app and make the most out of your journey
//                     with us.
//                   </Text>
//                   <TouchableOpacity
//                     style={styles.continueBtn}
//                     onPress={() => {
//                       setShowPinModal(false);
//                       setPinStep('create');
//                       setPinValue('');
//                       setConfirmPin('');
//                     }}
//                   >
//                     <Text style={styles.continueText}>Continue</Text>
//                   </TouchableOpacity>
//                 </>
//               ) : (
//                 <>
//                   <Text style={styles.modalTitle}>
//                     {pinStep === 'create'
//                       ? 'Create a Login PIN'
//                       : 'Re-Enter PIN'}
//                   </Text>
//                   <Text style={styles.modalDesc}>
//                     Your PIN is a short, secure code that allows faster login.
//                   </Text>

//                   <View style={styles.modalPinRow}>
//                     {[0, 1, 2, 3].map(index => (
//                       <TouchableOpacity
//                         key={index}
//                         activeOpacity={1}
//                         onPress={() => modalPinInputRef.current?.focus()}
//                         style={styles.pinBoxModal}
//                       >
//                         <Text style={styles.pinDigit}>
//                           {(pinStep === 'create' ? pinValue : confirmPin)[
//                             index
//                           ] || ''}
//                         </Text>
//                       </TouchableOpacity>
//                     ))}
//                   </View>

//                   {/* HIDDEN INPUT */}
//                   <TextInput
//                     ref={modalPinInputRef}
//                     keyboardType="number-pad"
//                     maxLength={4}
//                     autoFocus={true}
//                     showSoftInputOnFocus
//                     style={styles.hiddenInput}
//                     value={pinStep === 'create' ? pinValue : confirmPin}
//                     onChangeText={text => {
//                       if (!/^\d*$/.test(text)) return;

//                       if (pinStep === 'create') {
//                         setPinValue(text);
//                         if (text.length === 4) setPinStep('confirm');
//                       } else {
//                         setConfirmPin(text);
//                         if (text.length === 4 && text === pinValue) {
//                           setPinStep('success');
//                           Keyboard.dismiss(); // close keyboard after confirmation
//                         }
//                       }
//                     }}
//                   />

//                   <View style={styles.modalBtnRow}>
//                     <TouchableOpacity
//                       style={styles.skipBtn}
//                       onPress={() => {
//                         setPinValue('');
//                         setConfirmPin('');
//                         setShowPinModal(false);
//                       }}
//                     >
//                       <Text style={styles.skipText}>Skip for now</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.continueBtn}>
//                       <Text style={styles.continueText}>Continue</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </>
//               )}
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//       </Modal>
//     </ScreenWrapper>
//   );
// }

// // STYLES
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { color: '#fff', fontSize: 28, fontWeight: '700', marginTop: 10, fontFamily: Typography.fontFamily.bold },
//   subTitle: { color: '#9c9c9c', marginBottom: 20, fontFamily: Typography.fontFamily.regular },
//   switchContainer: { flexDirection: 'row', backgroundColor: '#1b1b1b', borderRadius: 30, marginBottom: 20, marginTop: 15 },
//   switchBtn: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 30 },
//   switchActive: { backgroundColor: '#fff' },
//   switchTextActive: { color: '#000', fontWeight: '700', fontFamily: Typography.fontFamily.bold },
//   switchText: { color: '#aaa', fontFamily: Typography.fontFamily.semibold },
//   smallSwitch: { flexDirection: 'row', backgroundColor: '#1b1b1b', borderRadius: 25, marginBottom: 16, width: '60%' },
//   smallBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 25 },
//   phoneRow: { flexDirection: 'row', gap: 10 },
//   countryBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1b1b1b', borderRadius: 12, paddingHorizontal: 12, height: 52 },
//   countryText: { color: '#fff', marginRight: 6 },
//   arrow: { color: '#ff3b3b', fontSize: 10 },
//   label: { color: '#9c9c9c', marginTop: 10, fontFamily: Typography.fontFamily.regular },
//   forgot: { alignItems: 'flex-end', marginTop: 6 },
//   forgotText: { color: '#fff', fontFamily: Typography.fontFamily.medium },
//   pinRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30, marginHorizontal: 40, alignItems: 'center' },
//   pinBox: { width: 55, height: 55, borderRadius: 14, borderWidth: 1, borderColor: '#3d3d3d', justifyContent: 'center', alignItems: 'center' },
//   pinText: { color: '#fff', fontSize: 18 },
//   hiddenInput: { position: 'absolute', opacity: 0 },
//   footer: { alignItems: 'center', marginTop: 30 },
//   footerText: { color: '#9c9c9c', marginTop: 8, fontFamily: Typography.fontFamily.medium },
//   link: { color: '#fff', textDecorationLine: 'underline' },

//   successBadge: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#ff3b3b', justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
//   successCheck: { color: '#fff', fontSize: 32, fontWeight: '700' },
//   successTitle: { color: '#fff', fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 12 },
//   successDesc: { color: '#9c9c9c', fontSize: 14, textAlign: 'center', marginBottom: 30 },

//   modalOverlay: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
//   modalCard: { width: '100%', backgroundColor: '#060605', paddingVertical: 30, paddingHorizontal: 24, alignItems: 'center', borderTopRightRadius: 28, borderTopLeftRadius: 28, shadowColor: '#000', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.35, shadowRadius: 24, elevation: 35 },
//   modalTitle: { color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 8, textAlign: 'center' },
//   modalDesc: { color: '#9c9c9c', fontSize: 14, textAlign: 'center', lineHeight: 20, marginBottom: 28 },
//   modalPinRow: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginBottom: 30 },
//   pinBoxModal: { width: 56, height: 56, borderRadius: 16, borderWidth: 1, borderColor: '#6b6b6b', justifyContent: 'center', alignItems: 'center' },
//   pinDigit: { color: '#fff', fontSize: 18, fontWeight: '600' },
//   modalBtnRow: { flexDirection: 'row', width: '100%', gap: 12 },
//   skipBtn: { flex: 1, height: 54, borderRadius: 30, borderWidth: 1, borderColor: '#5a5a5a', justifyContent: 'center', alignItems: 'center' },
//   skipText: { color: '#fff', fontSize: 14 },
//   continueBtn: { flex: 1, height: 54, borderRadius: 30, backgroundColor: '#ff3b3b', justifyContent: 'center', alignItems: 'center' },
//   continueText: { color: '#fff', fontSize: 15, fontWeight: '600' },
// });


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

export default function LoginScreen({navigation}) {
  const [loginMode, setLoginMode] = useState('password'); // password | pin
  const [fieldType, setFieldType] = useState('email'); // email | phone

  // Main screen PIN
  const [pin, setPin] = useState(['', '', '', '']);
  const pinInputRef = useRef(null);

  // Modal PIN
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinStep, setPinStep] = useState('create'); // create | confirm | success
  const [pinValue, setPinValue] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const modalPinInputRef = useRef(null);

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
  useEffect(() => {
    if (showPinModal) {
      setTimeout(() => {
        modalPinInputRef.current?.focus();
      }, 100);
    }
  }, [showPinModal]);

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
                  onPress={() => pinInputRef.current?.focus()}
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
              onPress={()=>{navigation.navigate('Main')}}
              style={{ marginTop: 30, alignItems: 'center' }}
            />

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Don’t have an account?{' '}
                <TouchableOpacity onPress={createOne}>
                  <Text style={styles.link}>Create one</Text>
                </TouchableOpacity>
              </Text>

              <Text style={styles.footerText}>
                <Text style={styles.link}>Terms & Condition</Text> |{' '}
                <Text style={styles.link}>Privacy Policy</Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>

      {/* PIN MODAL */}
      <Modal
        visible={showPinModal}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setShowPinModal(false)}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              {pinStep === 'success' ? (
                <>
                  <View style={styles.successBadge}>
                    <Text style={styles.successCheck}>✓</Text>
                  </View>

                  <Text style={styles.successTitle}>
                    Your Login PIN has been{'\n'}Created Successfully.
                  </Text>

                  <Text style={styles.successDesc}>
                    Continue to the app and make the most out of your journey
                    with us.
                  </Text>

                  <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() => setShowPinModal(false)}
                  >
                    <Text style={styles.continueText}>Continue</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.modalTitle}>
                    {pinStep === 'create' ? 'Create a Login PIN' : 'Re-Enter PIN'}
                  </Text>

                  <Text style={styles.modalDesc}>
                    Your PIN is a short, secure code that allows faster login.
                  </Text>

                  <View style={styles.modalPinRow}>
                    {[0, 1, 2, 3].map((index) => (
                      <TouchableOpacity
                        key={index}
                        activeOpacity={1}
                        onPress={() => modalPinInputRef.current?.focus()}
                        style={styles.pinBoxModal}
                      >
                        <Text style={styles.pinDigit}>
                          {(pinStep === 'create' ? pinValue : confirmPin)[index] || ''}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <TextInput
                    ref={modalPinInputRef}
                    keyboardType="number-pad"
                    maxLength={4}
                    autoFocus={true}
                    showSoftInputOnFocus
                    style={styles.hiddenInput}
                    value={pinStep === 'create' ? pinValue : confirmPin}
                    onChangeText={handleModalPinChange}
                  />

                  <View style={styles.modalBtnRow}>
                    <TouchableOpacity
                      style={styles.skipBtn}
                      onPress={() => setShowPinModal(false)}
                    >
                      <Text style={styles.skipText}>Skip for now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.continueBtn}>
                      <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </ScreenWrapper>
  );
}

// ----------- STYLES -----------
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { color: '#fff', fontSize: 28, fontWeight: '700', marginTop: 10, fontFamily: Typography.fontFamily.bold },
  subTitle: { color: '#9c9c9c', marginBottom: 20, fontFamily: Typography.fontFamily.regular },

  switchContainer: { flexDirection: 'row', backgroundColor: '#1b1b1b', borderRadius: 30, marginBottom: 20, marginTop: 15 },
  switchBtn: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 30 },
  switchActive: { backgroundColor: '#fff' },
  switchTextActive: { color: '#000', fontWeight: '700', fontFamily: Typography.fontFamily.bold },
  switchText: { color: '#aaa', fontFamily: Typography.fontFamily.semibold },

  smallSwitch: { flexDirection: 'row', backgroundColor: '#1b1b1b', borderRadius: 25, marginBottom: 16, width: '60%' },
  smallBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 25 },

  phoneRow: { flexDirection: 'row', gap: 10 },
  countryBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1b1b1b', borderRadius: 12, paddingHorizontal: 12, height: 52 },
  countryText: { color: '#fff', marginRight: 6 },
  arrow: { color: '#ff3b3b', fontSize: 10 },

  label: { color: '#9c9c9c', marginTop: 10, fontFamily: Typography.fontFamily.regular },
  forgot: { alignItems: 'flex-end', marginTop: 6 },
  forgotText: { color: '#fff', fontFamily: Typography.fontFamily.medium },

  pinRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30, alignItems: 'center', marginHorizontal: 40 },
  pinBox: { width: 55, height: 55, borderRadius: 14, borderWidth: 1, borderColor: '#3d3d3d', justifyContent: 'center', alignItems: 'center' },
  pinText: { color: '#fff', fontSize: 18 },

  hiddenInput: { position: 'absolute', opacity: 0 },

  footer: { alignItems: 'center', marginTop: 30 },
  footerText: { color: '#9c9c9c', marginTop: 8, fontFamily: Typography.fontFamily.medium },
  link: { color: '#fff', textDecorationLine: 'underline' },

  modalOverlay: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  modalCard: { width: '100%', backgroundColor: '#060605', paddingVertical: 30, paddingHorizontal: 24, alignItems: 'center', borderTopRightRadius: 28, borderTopLeftRadius: 28, shadowColor: '#000', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.35, shadowRadius: 24, elevation: 35 },
  modalTitle: { color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 8, textAlign: 'center' },
  modalDesc: { color: '#9c9c9c', fontSize: 14, textAlign: 'center', lineHeight: 20, marginBottom: 28 },
  modalPinRow: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginBottom: 30 },
  pinBoxModal: { width: 56, height: 56, borderRadius: 16, borderWidth: 1, borderColor: '#6b6b6b', justifyContent: 'center', alignItems: 'center' },
  pinDigit: { color: '#fff', fontSize: 18, fontWeight: '600' },
  modalBtnRow: { flexDirection: 'row', width: '100%', gap: 12 },
  skipBtn: { flex: 1, height: 54, borderRadius: 30, borderWidth: 1, borderColor: '#5a5a5a', justifyContent: 'center', alignItems: 'center' },
  skipText: { color: '#fff', fontSize: 14 },
  continueBtn: { flex: 1, height: 54, borderRadius: 30, backgroundColor: '#ff3b3b', justifyContent: 'center', alignItems: 'center' },
  continueText: { color: '#fff', fontSize: 15, fontWeight: '600' },

  successBadge: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#ff3b3b', justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  successCheck: { color: '#fff', fontSize: 32, fontWeight: '700' },
  successTitle: { color: '#fff', fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 12 },
  successDesc: { color: '#9c9c9c', fontSize: 14, textAlign: 'center', marginBottom: 30 },
});
