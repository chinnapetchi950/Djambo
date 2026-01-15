import React, { useState } from "react";
import { View, Text, StyleSheet, Switch,ImageBackground ,TouchableOpacity} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Typography } from "../../theme/typography";
import Ionicons from "react-native-vector-icons/Ionicons";

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

export default function Notification({navigation}) {
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
    padding: 11,
    paddingBottom: 40,
  }, 
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontFamily: Typography.fontFamily.semibold,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 4,
  },
   inputBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
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
});
