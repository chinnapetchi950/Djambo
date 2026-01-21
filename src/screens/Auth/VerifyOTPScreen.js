import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Modal,
  Animated,
  Easing,
  Image,
  ImageBackground
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppButton from '../../components/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
export default function VerifyOTP({ navigation, route }) {
  const email = route?.params?.email || 'davidmicheal@gmail.com';
  const phone = route?.params?.phone || '+167975-8###';

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(86);
  const [successVisible, setSuccessVisible] = useState(false);

  const inputRef = useRef(null);
  const scale = useRef(new Animated.Value(0.85)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /* TIMER */
  useEffect(() => {
    if (timer === 0) return;
    const t = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(t);
  }, [timer]);

  /* OTP CHANGE */
  const handleChange = value => {
    if (!/^\d*$/.test(value)) return;

    const digits = value.slice(0, 6).split('');
    setOtp([...digits, '', '', '', '', '', ''].slice(0, 6));

    if (digits.length === 6) {
      Keyboard.dismiss();
    }
  };

  /* VERIFY */
  const handleVerify = () => {
    if (otp.join('').length !== 6) return;

    setSuccessVisible(true);

    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 250,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      setSuccessVisible(false);
      navigation.replace('Main');
    }, 2000);
  };

  const formatTime = s => `01:${s < 10 ? `0${s}` : s}`;
const openPinKeyboard = () => {
  if (!inputRef.current) return;

  inputRef.current.blur(); // 👈 reset focus

  setTimeout(() => {
    inputRef.current.focus(); // 👈 reopen keyboard
  }, 50);
};
  return (
    <ScreenWrapper>
       <ImageBackground
                        source={require('../../../assets/images/login_bg.png')}
                        style={styles.container}
                      >
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity  style={styles.inputBox}onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Verify your Account</Text>
        </View>

        {/* SUB TEXT */}
        <Text style={styles.subText}>
          An OTP has been sent via{'\n'}
          {email} & {phone}
        </Text>

        {/* OTP BOXES */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={openPinKeyboard}
        >
          <View style={styles.otpRow}>
            {otp.map((d, i) => (
              <View key={i} style={styles.otpBox}>
                <Text style={styles.otpText}>{d}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>

        {/* HIDDEN INPUT */}
        <TextInput
          ref={inputRef}
          value={otp.join('')}
          onChangeText={handleChange}
          keyboardType="number-pad"
          maxLength={6}
          autoFocus
          style={styles.hiddenInput}
        />

        {/* TIMER */}
        {timer > 0 ? (
          <Text style={styles.timerText}>
            If you haven't received the OTP within a few minutes,
            you can request a new one in{' '}
            <Text style={styles.timerRed}>{formatTime(timer)}</Text>
          </Text>
        ) : (
          <Text style={styles.resend} onPress={() => setTimer(90)}>
            Resend OTP
          </Text>
        )}

        {/* BUTTON */}
        <AppButton title="Verify & Continue" onPress={handleVerify} />
      </View>
</ImageBackground>
      {/* SUCCESS MODAL */}
      <Modal
        visible={successVisible}
        transparent
        animationType="none"
        statusBarTranslucent
      >
        <View style={styles.backdrop}>
          <Animated.View
            style={[
              styles.successCard,
              { transform: [{ scale }], opacity },
            ]}
          >
            {/* <View style={styles.badge}> */}
              <Image source={require('../../../assets/images/successmark.png')} style={styles.badgeImage} />
              {/* <Ionicons name="checkmark" size={36} color="#fff" /> */}
            {/* </View> */}

            <Text style={styles.successTitle}>
              Your OTP has been{'\n'}successfully verified.
            </Text>

            <Text style={styles.successDesc}>
              Continue to the app and make the most out of your journey with us.
            </Text>
          </Animated.View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    paddingTop: hp('1%'),
  },

  inputBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: wp('3%'),
    paddingHorizontal: wp('4%'),
    height: hp('6.8%'),
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  headerTitle: {
    color: '#fff',
    fontSize: wp('5.5%'),
    fontWeight: '600',
    marginLeft: wp('3%'),
  },

  subText: {
    color: '#aaa',
    fontSize: wp('3.8%'),
    lineHeight: wp('5.5%'),
    marginBottom: hp('3%'),
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
    marginHorizontal: wp('3%'),
  },

  otpBox: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('3%'),
    borderWidth: 1,
    borderColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.04)',
  },

  otpText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '500',
  },

  hiddenInput: {
    position: 'absolute',
    opacity: 0,
  },

  timerText: {
    color: '#aaa',
    fontSize: wp('3.4%'),
    lineHeight: wp('5%'),
    marginBottom: hp('3%'),
  },

  timerRed: {
    color: '#ff3b3b',
    fontWeight: '600',
  },

  resend: {
    color: '#ff3b3b',
    fontSize: wp('3.8%'),
    marginBottom: hp('3%'),
  },

  /* SUCCESS MODAL */
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  successCard: {
    width: wp('90%'),
    backgroundColor: '#0f0f0f',
    borderRadius: wp('6%'),
    paddingVertical: hp('8%'),
    paddingHorizontal: wp('6%'),
    alignItems: 'center',
  },

  badgeImage: {
    width: wp('20%'),
    height: wp('20%'),
    marginBottom: hp('3.4%'),
    resizeMode: 'contain',
  },

  successTitle: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: hp('1%'),
  },

  successDesc: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: wp('3.8%'),
    lineHeight: wp('5%'),
  },
});

