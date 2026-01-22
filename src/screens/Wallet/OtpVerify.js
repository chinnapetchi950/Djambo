import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "@react-native-community/blur";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ScreenWrapper from "../../components/ScreenWrapper";
import AppButton from "../../components/AppButton";
import CustomSuccessModal from "../../components/SuccessModal";
/* ---------- GLASS ---------- */
const Glass = ({ children, style }) =>
  Platform.OS === "ios" ? (
    <BlurView blurType="dark" blurAmount={18} style={[styles.glass, style]}>
      {children}
    </BlurView>
  ) : (
    <View style={[styles.glass, styles.androidGlass, style]}>{children}</View>
  );

export default function WithdrawOTPScreen({navigation}) {
  const [otp, setOtp] = useState("");
const [visible, setVisible] = useState(false);

  return (
    <ScreenWrapper>
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.bg}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.inputBox} onPress={()=>navigation.goBack()}>
            <Ionicons name="chevron-back" size={wp("7%")} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Withdraw Funds</Text>
        </View>

        <Text style={styles.title}>Security Verification</Text>
        <Text style={styles.subtitle}>
          Enter OTP sent to your registered mobile number
        </Text>

        {/* OTP */}
        <View style={styles.otpRow}>
          {[...Array(6)].map((_, i) => (
            <Glass key={i} style={styles.otpBox}>
              <TextInput
                value={otp[i] || ""}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(v) => {
                  const newOtp = otp.split("");
                  newOtp[i] = v;
                  setOtp(newOtp.join(""));
                }}
                style={styles.otpText}
              />
            </Glass>
          ))}
        </View>

        <TouchableOpacity>
          <Text style={styles.resend}>Resend OTP</Text>
        </TouchableOpacity>

        {/* CTA */}
        <AppButton btnstyle={{ marginTop: hp("50%") }} onPress={()=> setVisible(true)} title={'Verify OTP'}/>
        
      </ImageBackground>
      
      <CustomSuccessModal
        visible={visible}
        title={'Your withdrawal has been completed successfully.'}
        data={[
          { label: 'Amount withdrawal:', value: "500 FCFA" },
          { label: "Payment Method:", value: "MTN MoMo" },
        ]}
        secondaryText="Go to Wallet"
        primaryText="Done"
        onSecondary={() => navigation.navigate("Main",{screen:'Wallet'})}
        onPrimary={() => setVisible(false)}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, paddingHorizontal: wp("3%") },

  header: {
    marginTop: hp("3%"),
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: wp("6%"),
    fontWeight: "700",
    marginLeft: wp("3%"),
  },

  title: {
    color: "#fff",
    fontSize: wp("7%"),
    fontWeight: "700",
    marginTop: hp("6%"),
    textAlign: "center",
  },
  subtitle: {
    color: '#FFF',
    textAlign: "center",
    marginTop: hp("1%"),
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("5%"),
  },
  otpBox: {
    width: wp("13%"),
    height: wp("13%"),
    justifyContent: "center",
    alignItems: "center",
  },
  otpText: {
    color: "#fff",
    fontSize: wp("5%"),
    fontWeight: "600",
    textAlign: "center",
  },

  resend: {
    color: "#FF3B3B",
    textAlign: "center",
    marginTop: hp("3%"),
    fontWeight: "600",
  },

  cta: {
    position: "absolute",
    bottom: hp("5%"),
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#FF3B3B",
    paddingVertical: hp("2%"),
    borderRadius: wp("10%"),
    alignItems: "center",
  },
  ctaText: {
    color: "#fff",
    fontSize: wp("5%"),
    fontWeight: "700",
  },

  glass: {
    borderRadius: wp("4%"),
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  androidGlass: {
    backgroundColor: "rgba(255,255,255,0.08)",
  },
   inputBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: wp("2%"),
    paddingHorizontal: wp("2.3%"),
    height: hp("6.0%"),
    flexDirection: "row",
    alignItems: "center",
  },
});
