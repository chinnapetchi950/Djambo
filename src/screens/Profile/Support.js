import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Typography } from "../../theme/typography";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RowItem = ({ title, icon, image, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Image source={image} style={styles.rowImage} resizeMode="contain" />
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

export default function Support({ navigation }) {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.container}
      >
        <Header title="Support & Help" onBack={() => navigation.goBack()} />

        <RowItem
          icon="play-circle-outline"
          image={require('../../../assets/images/Play_game.png')}
          title="Game Rules and Tutorial"
          onPress={() => navigation.navigate("GameRules")}
        />
        <RowItem
          icon="headset-outline"
          image={require('../../../assets/images/ticket.png')}
          title="Raise Support Ticket"
          onPress={() => {}}
        />
        <RowItem
          icon="help-circle-outline"
          image={require('../../../assets/images/myticket.png')}
          title="My Support Ticket"
          onPress={() => {}}
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
