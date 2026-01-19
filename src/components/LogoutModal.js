import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LogoutModal = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>
            Are you sure that you want to{"\n"}Logout?
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.noButton}
              onPress={onCancel}
              activeOpacity={0.8}
            >
              <Text style={styles.noText}>No</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.yesButton}
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text style={styles.yesText}>Yes</Text>
            </TouchableOpacity>
          </View>
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
    width: "100%",
    backgroundColor: "#0f0f0f",
    borderTopRightRadius:24,
    borderTopLeftRadius:24,
   // borderRadius: 24,
    padding: 15,
    paddingVertical:44,
    alignItems: "center",
  },
//   overlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.85)",
//     justifyContent: 'flex-end',
//     alignItems: "center",
//   },

//   modalBox: {
//     width: "85%",
//     paddingVertical: 32,
//     paddingHorizontal: 20,
//     borderTopLeftRadius:24,
//     borderTopRightRadius:24,
//    // borderRadius: 24,
//     backgroundColor: "#000",
//     alignItems: "center",
//   },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 28,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  noButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  noText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  yesButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FF3B3B",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  yesText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
