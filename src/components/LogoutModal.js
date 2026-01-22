import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import ActionButtons from "./Rowbuttons";

const LogoutModal = ({ visible, onCancel, title, onConfirm, leftLabel,
  rightLabel , }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>{title}</Text>

          <ActionButtons
            leftLabel={leftLabel??"No"}
            onLeftPress={onCancel}
            rightLabel={rightLabel??"Yes"}
            onRightPress={onConfirm}
            containerStyle={{ width: "100%", marginTop: hp("2%") }}
            leftButtonStyle={{ height: hp("6%"), borderRadius: wp("6%") }}
            rightButtonStyle={{ height: hp("6%"), borderRadius: wp("6%") }}
            leftTextStyle={{ fontSize: wp("4%") }}
            rightTextStyle={{ fontSize: wp("4%") }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: 'flex-end',
    alignItems: "center",
  },

  modalBox: {
    width: wp("100%"),
    backgroundColor: "#0f0f0f",
    borderTopRightRadius: wp("4%"),
    borderTopLeftRadius: wp("4%"),
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("5%"),
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: wp("5.5%"),
    fontWeight: "700",
    textAlign: "center",
    lineHeight: hp("4%"),
    marginBottom: hp("2%"),
  },
});
