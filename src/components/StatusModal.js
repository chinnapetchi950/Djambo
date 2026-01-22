import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const StatusModal = ({
  visible,
  image,           // ← custom image
  title,
  message,
  buttonLabel = "OK",
  onClose,
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalBox}>

          {/* Image / Icon */}
          {image && (
           
              <Image source={image} style={styles.icon} resizeMode="contain" />
           
          )}
          <Text style={styles.title}>{title}</Text>

          {/* {title && <Text style={styles.title}>{title}</Text>} */}

        
        

        </View>
      </Pressable>
    </Modal>
  );
};

export default StatusModal;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  modalBox: {
    width: wp("100%"),
    backgroundColor: "#0b0b0b",
    borderRadius: wp("5%"),
    paddingVertical: hp("4%"),
    paddingHorizontal: wp("6%"),
    alignItems: "center",
  },

  
//   : {
//     width: wp("22%"),
//     height: wp("22%"),
//     borderRadius: wp("11%"),
//    // backgroundColor: "#FFD84D",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: hp("2%"),
//   },

  icon: {
   width: wp('20%'),
    height: wp('20%'),
    marginBottom: hp('4%'),

    resizeMode: 'contain',
  },

  title: {
    color: "#fff",
    fontSize: wp("5%"),
    fontWeight: "700",
    lineHeight:hp('4%'),
    marginBottom: hp("2%"),
    textAlign: "center",
  },

  message: {
    color: "#cfcfcf",
    fontSize: wp("4%"),
    textAlign: "center",
    lineHeight: hp("3%"),
    marginBottom: hp("3%"),
  },

  button: {
    width: "100%",
    height: hp("6%"),
    backgroundColor: "#ff3b3b",
    borderRadius: wp("3%"),
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: wp("4.5%"),
    fontWeight: "700",
  },
});
