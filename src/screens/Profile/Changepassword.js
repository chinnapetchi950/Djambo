import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TextInput, TouchableOpacity,ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../components/AppButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import { Typography } from '../../theme/typography';
import OtpModal from '../../components/Otpmodal';
const PasswordInput = ({ placeholder, value, onChangeText }) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.passcontainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#777"
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => setSecure(!secure)}>
        <Ionicons name={secure ? 'eye-off' : 'eye'} size={20} color="#999" />
      </TouchableOpacity>
    </View>
  );
};
export default function ChangePassword({ navigation }) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  return (
    <ScreenWrapper>
          <ImageBackground
            source={require("../../../assets/images/profile_bg.png")}
            style={styles.container}
          >
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Change Password" onBack={() => navigation.goBack()} />

      <Label text="Current Password" />
      <PasswordInput value={current} onChangeText={setCurrent} />

      <Label text="New Password" />
      <PasswordInput value={next} onChangeText={setNext} />

      <Label text="Confirm New Password" />
      <PasswordInput value={confirm} onChangeText={setConfirm} />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Password Requirements:</Text>
        <Text style={styles.info}>• At least 8 characters long</Text>
        <Text style={styles.info}>• Contains Uppercase & lowercase letters</Text>
        <Text style={styles.info}>• Contains at least One number</Text>
        <Text style={styles.info}>• Contains at least one special character (!@#$%^&*)</Text>
        <Text style={[styles.info, { marginTop: 6 }]}>
          Re-authentication required before Changed
        </Text>
      </View>

      <AppButton btnstyle={{
    marginTop:'45%',
   }} title="Continue" onPress={() => {setShowOtp(true)}} />
   <OtpModal
        visible={showOtp}
        onClose={() => setShowOtp(false)}
        onVerify={() => {
          setShowOtp(false);
          // CALL CHANGE PASSWORD API HERE
        }}
      />
    </ScrollView>
    </ImageBackground>
    </ScreenWrapper>
  );
}

/* ---------- Helpers ---------- */
const Header = ({ title, onBack }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.inputBox} onPress={onBack}>
      <Ionicons name="chevron-back" size={24} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const Label = ({ text }) => <Text style={styles.label}>{text}</Text>;

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingBottom: 40,
  }, 
  passcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    fontFamily:Typography.fontFamily.semibold,
    marginLeft: 12,
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 14,
  },
  infoBox: {
    backgroundColor: '#ffecec',
    borderRadius: 14,
    padding: 16,
    marginTop: 8,
  },
  infoTitle: {
    color: '#ff2d2d',
    fontWeight: '700',
    marginBottom: 6,
    fontFamily:Typography.fontFamily.medium
  },
  info: {
    color: '#000',
    fontSize: 14,
        fontFamily:Typography.fontFamily.medium

  },
    inputBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
  },
});
