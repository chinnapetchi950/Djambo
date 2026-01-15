import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput,TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import AppButton from '../../components/AppButton';
import Ionicons from "react-native-vector-icons/Ionicons";
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
export default function ChangePIN({navigation}) {
  const [pin, setPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  return (
       <ScreenWrapper>
              <ImageBackground
                source={require("../../../assets/images/profile_bg.png")}
                style={styles.container}
              >
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Change PIN" onBack={() => navigation.goBack()} />

      <Text style={styles.label}>Current PIN</Text>
      <PasswordInput value={pin} onChangeText={setPin} />

      <Text style={styles.label}>New PIN</Text>
      <PasswordInput value={newPin} onChangeText={setNewPin} />

      <Text style={styles.label}>Confirm New PIN</Text>
      <PasswordInput value={confirmPin} onChangeText={setConfirmPin} />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>PIN Security:</Text>
        <Text style={styles.info}>• 4–6 digits</Text>
        <Text style={styles.info}>• Used for withdrawals</Text>
        <Text style={styles.info}>• OTP verification required</Text>
      </View>

      <AppButton btnstyle={{
    marginTop:'58%',
   }}title="Continue" onPress={() => {setShowOtp(true)}} />
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
const Header = ({ title, onBack }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.inputBox} onPress={onBack}>
      <Ionicons name="chevron-back" size={24} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);
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
        fontFamily:Typography.fontFamily.medium,

  },
  info: {
    color: '#000',
    fontSize: 14,
        fontFamily:Typography.fontFamily.medium,

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
