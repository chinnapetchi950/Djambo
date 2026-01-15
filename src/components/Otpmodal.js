import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Typography } from '../theme/typography';

const OtpModal = ({ visible, onClose, onVerify }) => {
  const [timer, setTimer] = useState(27);

  useEffect(() => {
    if (!visible) return;
    setTimer(27);
  }, [visible]);

  useEffect(() => {
    if (timer === 0) return;
    const t = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Verify Your Identity</Text>
          <Text style={styles.subtitle}>
            Enter the OTP sent to your registered mobile number
          </Text>

          <View style={styles.otpRow}>
            {[6, 8, 4, 1, 1, 1].map((n, i) => (
              <View key={i} style={styles.otpBox}>
                <Text style={styles.otpText}>{n}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.resend}>
            Resend OTP in{' '}
            <Text style={{ color: '#ff2d2d' }}>{timer} sec</Text>
          </Text>

          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.cancel} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verify} onPress={onVerify}>
              <Text style={styles.verifyText}>Verify OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OtpModal;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: 'flex-end',
    alignItems: "center",
  },

  container: {
    width: "100%",
    backgroundColor: "#0f0f0f",
    borderTopRightRadius:24,
    borderTopLeftRadius:24,
   // borderRadius: 24,
    padding: 15,
    paddingVertical:44,
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontFamily:Typography.fontFamily.bold,
    fontWeight: "700",
    marginBottom: 6,
  },

  subtitle: {
    color: "#aaa",
    fontSize: 13,
    textAlign: "center",
        fontFamily:Typography.fontFamily.regular,

    marginBottom: 22,
  },

  otpRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },

  otpBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  otpText: {
    color: "#fff",
    fontSize: 18,
        fontFamily:Typography.fontFamily.bold,

    fontWeight: "600",
  },

  resend: {
    color: "#aaa",
    fontSize: 13,
        fontFamily:Typography.fontFamily.semibold,

    marginBottom: 24,
  },

  btnRow: {
    flexDirection: "row",
    width: "100%",
    gap: 14,
  },

  cancel: {
    flex: 1,
    height: 48,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#444",
    justifyContent: "center",
    alignItems: "center",
  },

  cancelText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },

  verify: {
    flex: 1,
    height: 48,
    borderRadius: 30,
    backgroundColor: "#ff2d2d",
    justifyContent: "center",
    alignItems: "center",
  },

  verifyText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
