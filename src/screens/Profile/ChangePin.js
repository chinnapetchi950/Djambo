import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AppButton from '../../components/AppButton';
import Ionicons from "react-native-vector-icons/Ionicons";
import ScreenWrapper from '../../components/ScreenWrapper';
import { Typography } from '../../theme/typography';
import OtpModal from '../../components/Otpmodal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PasswordInput = ({ placeholder, value, onChangeText }) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.passContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#777"
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => setSecure(!secure)}>
        <Ionicons name={secure ? 'eye-off' : 'eye'} size={wp("5%")} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

export default function ChangePIN({ navigation }) {
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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header title="Change PIN" onBack={() => navigation.goBack()} />

          <Label text="Current PIN" />
          <PasswordInput value={pin} onChangeText={setPin} placeholder="Enter current PIN" />

          <Label text="New PIN" />
          <PasswordInput value={newPin} onChangeText={setNewPin} placeholder="Enter new PIN" />

          <Label text="Confirm New PIN" />
          <PasswordInput value={confirmPin} onChangeText={setConfirmPin} placeholder="Confirm new PIN" />

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>PIN Security:</Text>
            <Text style={styles.info}>• 4–6 digits</Text>
            <Text style={styles.info}>• Used for withdrawals</Text>
            <Text style={styles.info}>• OTP verification required</Text>
          </View>

          <AppButton
            btnstyle={{ marginTop: hp("19%") }}
            title="Continue"
            onPress={() => setShowOtp(true)}
          />

          <OtpModal
            visible={showOtp}
            onClose={() => setShowOtp(false)}
            onVerify={() => {
              setShowOtp(false);
              // CALL CHANGE PIN API HERE
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
      <Ionicons name="chevron-back" size={wp("6%")} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const Label = ({ text }) => <Text style={styles.label}>{text}</Text>;

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: wp("4%"),
    paddingTop: hp("2%"),
    paddingBottom: hp("10%"),
  },
  passContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: wp("3%"),
    paddingHorizontal: wp("4%"),
    height: hp("7%"),
    marginBottom: hp("2%"),
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: wp("4%"),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp("3%"),
  },
  headerText: {
    color: '#fff',
    fontSize: wp("5%"),
    fontWeight: '700',
    fontFamily: Typography.fontFamily.semibold,
    marginLeft: wp("3%"),
  },
  label: {
    color: '#fff',
    marginBottom: hp("0.5%"),
    fontSize: wp("3.8%"),
  },
  infoBox: {
    backgroundColor: '#ffecec',
    borderRadius: wp("3%"),
    padding: wp("4%"),
    marginTop: hp("1%"),
  },
  infoTitle: {
    color: '#ff2d2d',
    fontWeight: '700',
    marginBottom: hp("0.5%"),
    fontFamily: Typography.fontFamily.medium,
    fontSize: wp("4%"),
  },
  info: {
    color: '#000',
    fontSize: wp("3.5%"),
    fontFamily: Typography.fontFamily.medium,
    lineHeight: hp("2.5%"),
  },
  inputBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: wp("2%"),
    paddingHorizontal: wp("3%"),
    height: hp("6.5%"),
    flexDirection: "row",
    alignItems: "center",
  },
});
