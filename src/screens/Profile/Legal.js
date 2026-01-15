import React from "react";
import { Text,View,Image, TouchableOpacity, StyleSheet,ImageBackground } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Typography } from "../../theme/typography";

const Row = ({ title, icon,image, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
 <Image source={image}/>
    <Text style={styles.text}>{title}</Text>
   
    <Ionicons name="chevron-forward" size={20} color="#fff" />

  </TouchableOpacity>
);

export default function Legal({navigation}) {
  return (
    <ScreenWrapper title="Legal & App Info">
          <ImageBackground
                                source={require("../../../assets/images/profile_bg.png")}
                                style={styles.container}
                              >     
                                    <Header title="Legal & App Info" onBack={() => navigation.goBack()} />
      <Row  image={require('../../../assets/images/Play_game.png')} title="Terms & Conditions" />
      <Row  image={require('../../../assets/images/ticket.png')}title="Privacy Policy" />
      <Row  image={require('../../../assets/images/ticket.png')}title="Responsible Gaming Policy" />
      <Row  image={require('../../../assets/images/myticket.png')}title="About DJAMBO" />
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
    padding: 15,
    paddingBottom: 40,
  }, 
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 19,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
    gap: 16,
  },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 18,
//     borderBottomWidth: 0.5,
//     borderBottomColor: "#333",
//   },
   text: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    fontWeight:'600',
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
