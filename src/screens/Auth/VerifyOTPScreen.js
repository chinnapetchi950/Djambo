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
    }, 1800);
  };

  const formatTime = s => `01:${s < 10 ? `0${s}` : s}`;

  return (
    <ScreenWrapper>
       <ImageBackground
                        source={require('../../../assets/images/login_bg.png')}
                        style={styles.container}
                      >
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
          onPress={() => inputRef.current?.focus()}
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
  container: { padding: 10, flex: 1 },
  badgeImage:{
    width: 70,
    height: 70,
    marginBottom: 18,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 12,
  },

  subText: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 28,
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  otpBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  otpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },

  hiddenInput: {
    position: 'absolute',
    opacity: 0,
  },

  timerText: {
    color: '#aaa',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 30,
  },
  timerRed: {
    color: '#ff3b3b',
    fontWeight: '600',
  },
  resend: {
    color: '#ff3b3b',
    marginBottom: 30,
  },

  /* MODAL */
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successCard: {
    width: '80%',
    backgroundColor: '#0f0f0f',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
  },
  badge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ff3b3b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  successTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  successDesc: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
  },
});
