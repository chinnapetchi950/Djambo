import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, ImageBackground, TouchableOpacity } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Typography } from "../../theme/typography";
import Ionicons from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SwitchRow = ({ title, subtitle, value, onChange }) => (
  <View style={styles.card}>
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={{ false: "#444", true: "#ff3b3b" }}
      thumbColor="#fff"
    />
  </View>
);

const Header = ({ title, onBack }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.inputBox} onPress={onBack}>
      <Ionicons name="chevron-back" size={wp("6%")} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

export default function Notification({ navigation }) {
  const [email, setEmail] = useState(true);
  const [invite, setInvite] = useState(false);
  const [security, setSecurity] = useState(false);

  return (
    <ScreenWrapper>
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.container}
      >
        <Header title="Notification" onBack={() => navigation.goBack()} />

        <SwitchRow
          title="Email Notifications"
          subtitle="Receive notifications via email"
          value={email}
          onChange={setEmail}
        />
        <SwitchRow
          title="Game Invites"
          subtitle="Get notified when someone invites you"
          value={invite}
          onChange={setInvite}
        />
        <SwitchRow
          title="Security Alerts"
          subtitle="Important account notifications"
          value={security}
          onChange={setSecurity}
        />
      </ImageBackground>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp("4%"),
    paddingTop: hp("2%"),
    paddingBottom: hp("5%"),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("1.5%"),
    borderRadius: wp("3%"),
    marginBottom: hp("1.5%"),
  },
  title: {
    color: "#fff",
    fontSize: wp("4.2%"),
    fontFamily: Typography.fontFamily.semibold,
  },
  subtitle: {
    color: "#aaa",
    fontSize: wp("3.5%"),
    marginTop: hp("0.5%"),
  },
  inputBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: wp("2%"),
    paddingHorizontal: wp("3%"),
    height: hp("6%"),
    flexDirection: "row",
    alignItems: "center",
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
});
