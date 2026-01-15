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

const DeviceCard = ({ icon,image, title, status, time, active }) => (
  <View style={styles.deviceCard}>
    {image?
    <View style={styles.deviceIcon}>
<Image source={image}/>
    </View>
    :
    <View style={styles.deviceIcon}>{icon}</View>}
    <View style={{ flex: 1 }}>
      <Text style={styles.deviceTitle}>
        {title}
        <Text style={{ color: active ? "#00FF40" : "#ff3b3b" }}>
          {" "}
          ({status})
        </Text>
      </Text>
      <View style={styles.rowview}>
  <Image tintColor={'#fff'} source={require('../../../assets/images/location.png')}/>
      <Text style={styles.deviceSub}>Douala, Cameroon</Text>
      </View>
    
      <View style={[styles.rowview,{marginLeft:-2}]}>
        <Ionicons name="time-outline" size={20} color={'#fff'}/>
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
        <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.inputBox} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Security & Login Settings</Text>
          </View>

          {/* OPTIONS */}
          <TouchableOpacity onPress={()=>navigation.navigate('ChangePassword')} style={styles.row}>
            <Image style={{width:20,height:20}} source={require('../../../assets/images/password.png')} ></Image>
            {/* <Ionicons name="lock-closed" size={20} color="#fff" /> */}
            <Text style={styles.rowText}>Change Password</Text>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('ChangePIN')}style={styles.row}>
            <Image  style={{width:28,height:15}} source={require('../../../assets/images/pin.png')} ></Image>
            <Text style={styles.rowText}>Change PIN</Text>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </TouchableOpacity>

          {/* DEVICES */}
          <DeviceCard
            icon={<Ionicons name="phone-portrait" size={26} color="#00FF40" />}
            title="iPhone 14 Pro"
            status="Current"
            time="Active now"
            active
          />

          <DeviceCard
            icon={<Ionicons name="phone-portrait" size={26} color="#ff3b3b" />}
            title="iPhone 16 Pro"
            status="Logged Out"
            time="2h ago"
          />
          <DeviceCard
            // icon={<Ionicons name="phone-portrait" size={26} color="#ff3b3b" />}
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
    gap: 12,
    padding: 20,
  },
rowview:{flexDirection:'row',gap:5,alignItems:'center',marginTop: 8,},
  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight:'700',
    fontFamily: Typography.fontFamily.bold,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginHorizontal:5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
    gap: 12,
  },

  rowText: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontWeight:'600',
    fontFamily:Typography.fontFamily.semibold
  },

  deviceCard: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.08)",
    marginTop: 20,
    marginHorizontal:10,

    padding: 16,
    borderRadius: 18,
    gap: 14,
  },

  deviceIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
  },

  deviceTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  deviceSub: {
    color: "#FFF",
    fontSize: 13,
    marginTop: 2,
  },

  logoutAll: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    height: 54,
    borderRadius: 30,
    backgroundColor: "#ff3b3b",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
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
