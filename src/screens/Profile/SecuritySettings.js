import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Typography } from "../../theme/typography";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DeviceCard = ({ icon, image, title, status, time, active }) => (
  <View style={styles.deviceCard}>
    {image ? (
      <View style={styles.deviceIcon}>
        <Image source={image} style={{ width: '70%', height: '70%' }} resizeMode="contain" />
      </View>
    ) : (
      <View style={styles.deviceIcon}>{icon}</View>
    )}
    <View style={{ flex: 1 }}>
      <Text style={styles.deviceTitle}>
        {title}
        <Text style={{ color: active ? "#00FF40" : "#ff3b3b" }}>
          {" "}
          ({status})
        </Text>
      </Text>
      <View style={styles.rowView}>
        <Image tintColor={'#fff'} source={require('../../../assets/images/location.png')} style={styles.iconSmall} />
        <Text style={styles.deviceSub}>Douala, Cameroon</Text>
      </View>
      <View style={[styles.rowView, { marginLeft: -2 }]}>
        <Ionicons name="time-outline" size={wp("5%")} color={'#fff'} />
        <Text style={styles.deviceSub}>{time}</Text>
      </View>
    </View>
  </View>
);

const SecuritySettings = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: hp("20%") }}>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.inputBox} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={wp("6%")} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Security & Login Settings</Text>
          </View>

          {/* OPTIONS */}
          <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')} style={styles.row}>
            <Image style={styles.iconSmall} source={require('../../../assets/images/password.png')} />
            <Text style={styles.rowText}>Change Password</Text>
            <Ionicons name="chevron-forward" size={wp("5%")} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ChangePIN')} style={styles.row}>
            <Image style={{ width: wp("6%"), height: hp("2.5%") }} source={require('../../../assets/images/pin.png')} />
            <Text style={styles.rowText}>Change PIN</Text>
            <Ionicons name="chevron-forward" size={wp("5%")} color="#fff" />
          </TouchableOpacity>

          {/* DEVICES */}
          <DeviceCard
            icon={<Ionicons name="phone-portrait" size={wp("6%")} color="#00FF40" />}
            title="iPhone 14 Pro"
            status="Current"
            time="Active now"
            active
          />

          <DeviceCard
            icon={<Ionicons name="phone-portrait" size={wp("6%")} color="#ff3b3b" />}
            title="iPhone 16 Pro"
            status="Logged Out"
            time="2h ago"
          />

          <DeviceCard
            title="iPhone 16 Pro"
            image={require('../../../assets/images/lab.png')}
            status="Logged Out"
            time="2h ago"
          />
        </ScrollView>

        {/* LOGOUT ALL */}
        <TouchableOpacity style={styles.logoutAll}>
          <Text style={styles.logoutText}>Logout from all devices</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default SecuritySettings;

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("3%"),
    paddingHorizontal: wp("4%"),
    paddingTop: hp("3%"),
    paddingBottom: hp("1%"),
  },

  headerTitle: {
    fontSize: wp("5%"),
    color: "#fff",
    fontWeight: '700',
    fontFamily: Typography.fontFamily.bold,
  },

  rowView: {
    flexDirection: 'row',
    gap: wp("2%"),
    alignItems: 'center',
    marginTop: hp("0.8%"),
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("2.5%"),
    paddingHorizontal: wp("4%"),
    marginHorizontal: wp("1.5%"),
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
    gap: wp("3%"),
  },

  rowText: {
    flex: 1,
    color: "#fff",
    fontSize: wp("4%"),
    fontWeight: '600',
    fontFamily: Typography.fontFamily.semibold,
  },

  deviceCard: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.08)",
    marginTop: hp("2%"),
    marginHorizontal: wp("3%"),
    padding: wp("4%"),
    borderRadius: wp("4%"),
    gap: wp("3%"),
  },

  deviceIcon: {
    width: wp("12%"),
    height: wp("12%"),
    borderRadius: wp("6%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
  },

  deviceTitle: {
    color: "#fff",
    fontSize: wp("4%"),
    fontWeight: "600",
  },

  deviceSub: {
    color: "#fff",
    fontSize: wp("3.5%"),
  },

  logoutAll: {
    position: "absolute",
    bottom: hp("3%"),
    left: wp("4%"),
    right: wp("4%"),
    height: hp("6.5%"),
    borderRadius: wp("8%"),
    backgroundColor: "#ff3b3b",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: wp("4%"),
    fontWeight: "600",
  },

  inputBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: wp("2%"),
    paddingHorizontal: wp("3%"),
    height: hp("6.5%"),
    flexDirection: "row",
    alignItems: "center",
  },

  iconSmall: {
    width: wp("5%"),
    height: wp("5%"),
    resizeMode: "contain",
  },
});
