import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Typography } from "../../theme/typography";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Row = ({ title, icon, image, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Image source={image} style={styles.rowImage} resizeMode="contain"/>
    <Text style={styles.text}>{title}</Text>
    <Ionicons name="chevron-forward" size={wp("5%")} color="#fff" />
  </TouchableOpacity>
);

const Header = ({ title, onBack }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.inputBox} onPress={onBack}>
      <Ionicons name="chevron-back" size={wp("6%")} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

export default function Legal({ navigation }) {
  return (
    <ScreenWrapper title="Legal & App Info">
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.container}
      >
        <Header title="Legal & App Info" onBack={() => navigation.goBack()} />

        <Row image={require('../../../assets/images/Play_game.png')} title="Terms & Conditions" />
        <Row image={require('../../../assets/images/ticket.png')} title="Privacy Policy" />
        <Row image={require('../../../assets/images/ticket.png')} title="Responsible Gaming Policy" />
        <Row image={require('../../../assets/images/myticket.png')} title="About DJAMBO" />
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("2%"),
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
    gap: wp("4%"),
  },
  rowImage: {
    width: wp("6%"),
    height: wp("6%"),
  },
  text: {
    flex: 1,
    color: "#fff",
    fontSize: wp("4.2%"),
    fontWeight: '600',
    fontFamily: Typography.fontFamily.medium,
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
