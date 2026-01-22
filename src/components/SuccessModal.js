import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "../theme/colors";

/**
 * props:
 * visible: boolean
 * title: string
 * data: [{ label: string, value: string }]
 * primaryText: string
 * secondaryText: string
 * onPrimary: function
 * onSecondary: function
 */

export default function CustomSuccessModal({
  visible,
  title,
  data = [],
  primaryText = "Done",
  secondaryText = "Go Back",
  onPrimary,
  onSecondary,
}) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>

          {/* TITLE */}
          <Text style={styles.title}>{title}</Text>

          {/* DATA ROWS */}
          {data.map((item, index) => (
            <View key={index}>
              <View style={styles.row}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
              {index !== data.length - 1 && <View style={styles.divider} />}
            </View>
          ))}

          {/* ACTIONS */}
          <View style={styles.actions}>
            {secondaryText && (
              <TouchableOpacity
                style={styles.outlineBtn}
                onPress={onSecondary}
              >
                <Text style={styles.outlineText}>{secondaryText}</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={onPrimary}
            >
              <Text style={styles.primaryText}>{primaryText}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: 'flex-end',
    alignItems: "center",
  },

  card: {
   width: "100%",
    backgroundColor: "#FFF",
    borderTopRightRadius:24,
    borderTopLeftRadius:24,
   // borderRadius: 24,
    padding: 15,
    paddingVertical:44,
    //alignItems: "center",
  },
  
  title: {
    fontSize: wp("6.5%"),
    fontWeight: "700",
    textAlign: "center",
    marginBottom: hp("3%"),
    color: "#000",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp("1.2%"),
  },

  label: {
    color: "#000",
    fontSize: wp("4%"),
     fontWeight: "500",
  },

  value: {
    color: "#000",
    fontSize: wp("4%"),
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#E6E6E6",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("4%"),
  },

  outlineBtn: {
    width: "48%",
    paddingVertical: hp("1.6%"),
    borderRadius: wp("8%"),
    borderWidth: 1.5,
    borderColor: "#FF3B3B",
    alignItems: "center",
  },

  outlineText: {
    color: "#000",
    fontWeight: "600",
    fontSize: wp("4%"),
  },

  primaryBtn: {
    width: "48%",
    paddingVertical: hp("1.6%"),
    borderRadius: wp("8%"),
    backgroundColor:Colors.primary,
    alignItems: "center",
  },

  primaryText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: wp("4%"),
  },
});
