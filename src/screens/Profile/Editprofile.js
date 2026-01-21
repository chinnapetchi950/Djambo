import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Modal,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Typography } from "../../theme/typography";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppInput from "../../components/AppInput";
import ActionButtons from "../../components/Rowbuttons";

const InputField = ({
  label,
  value,
  onChangeText,
  editable = true,
  rightIcon,
  onPress,
  placeholder,
}) => (
  <View style={styles.fieldWrapper}>
    <Text style={styles.label}>{label}</Text>

    <View style={[styles.inputContainer, !editable && styles.disabled]}>
      {editable ? (
       <TextInput
  value={value}
  onChangeText={onChangeText}
  placeholder={placeholder || label}
  placeholderTextColor="#6E6E6E" // your placeholder color
  style={{ flex: 1, color: "#fff", fontSize: wp("4%") }}
/>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          disabled={!onPress}
          style={{ flex: 1 }}
        >
          <Text style={styles.input}>{value}</Text>
        </TouchableOpacity>
      )}

      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  </View>
);


const DropdownModal = ({ visible, title, data, onSelect, onClose }) => (
  <Modal transparent animationType="fade" visible={visible}>
    <TouchableOpacity style={styles.overlay} onPress={onClose}>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownTitle}>{title}</Text>

        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dropdownItem}
            onPress={() => {
              onSelect(item);
              onClose();
            }}
          >
            <Text style={styles.dropdownText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </TouchableOpacity>
  </Modal>
);

const EditProfile = ({ navigation }) => {
  const currencies = ["FCFA", "USD", "EUR", "INR"];
  const languages = ["English", "French", "Spanish"];

  const [showCurrency, setShowCurrency] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  const [currency, setCurrency] = useState("FCFA");
  const [language, setLanguage] = useState("English");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <ScreenWrapper>
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: hp("18%") }}>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.inputBox}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={wp("6%")} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Edit Profile</Text>
          </View>

          {/* FORM */}
          <InputField
            label="Username"
            placeholder={'game master x'}
            value={username}
            onChangeText={setUsername}
          />
          <InputField             placeholder={'david@email.com'}
 label="Email Address" value={email} onChangeText={setEmail} />
          <InputField
            label="Mobile Number"
            placeholder="**********"
            value=''

            editable={true}
            rightIcon={
              <Image
                source={require("../../../assets/images/mobile_verify.png")}
                style={{ width: wp("6%"), height: hp("3%"), resizeMode: "contain" }}
              />
            }
          />

          <Text style={styles.helperText}>
            OTP required to change verified mobile
          </Text>

          <InputField label="Country" placeholder="Cameroon" editable={true} />
          <InputField
            label="Select Preferred Currency"
            value={currency}
            editable={false}
            onPress={() => setShowCurrency(true)}
            rightIcon={<Ionicons name="chevron-down" size={wp("4%")} color="#aaa" />}
          />

          <InputField
            label="Language"
            value={language}
            editable={false}
            onPress={() => setShowLanguage(true)}
            rightIcon={<Ionicons name="chevron-down" size={wp("4%")} color="#aaa" />}
          />
        </ScrollView>

        {/* MODALS */}
        <DropdownModal
          visible={showCurrency}
          title="Select Currency"
          data={currencies}
          onSelect={setCurrency}
          onClose={() => setShowCurrency(false)}
        />

        <DropdownModal
          visible={showLanguage}
          title="Select Language"
          data={languages}
          onSelect={setLanguage}
          onClose={() => setShowLanguage(false)}
        />
        <View style={{marginHorizontal:hp('2%')}}>

       
<ActionButtons
  leftLabel="Cancel"
  onLeftPress={() =>{}}
  rightLabel="Save"
  onRightPress={() => {}}
/>
 </View>
        {/* ACTION BUTTONS */}
        {/* <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: { flex: 1 },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("3%"),
    paddingHorizontal: wp("3%"),
    paddingTop: hp("3%"),
    paddingBottom: hp("2%"),
  },
  backBtn: {
    width: wp("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: wp("5.5%"),
    color: "#fff",
    fontFamily: Typography.fontFamily.semibold,
  },

  /* FORM */
  fieldWrapper: {
    marginHorizontal: wp("3%"),
    marginTop: hp("2%"),
  },
  label: {
    color: "#fff",
    marginBottom: hp("0.8%"),
    fontSize: wp("3.6%"),
    fontFamily: Typography.fontFamily.semibold,
  },
  inputBox: {
    height: hp("6.5%"),
    minHeight: hp("6.3%"),
    borderRadius: wp("3%"),
    paddingHorizontal: wp("4%"),
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  input: {
    flex: 1,
    color: "#6E6E6E",
    alignItems:'center',
    marginTop:hp('2%'),
    //alignSelf:'center',
    fontSize: wp("4%"),
  },
  disabled: { opacity: 0.6 },
  // rightIcon: { marginLeft: wp("2%") },
  helperText: {
    marginLeft: wp("5%"),
    marginTop: hp("0.8%"),
    color: "#aaa",
    fontSize: wp("3.2%"),
  },

  /* FOOTER */
  footer: {
    position: "absolute",
    bottom: hp("4%"),
    left: wp("5%"),
    right: wp("5%"),
    flexDirection: "row",
    gap: wp("3%"),
  },
  cancelBtn: {
    flex: 1,
    height: hp("6.5%"),
    minHeight: hp("6.5%"),
    borderRadius: wp("8%"),
    borderWidth: 0.8,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelText: { color: "#fff", fontSize: wp("4%") },
  saveBtn: {
    flex: 1,
    height: hp("6.5%"),
    minHeight: hp("6.5%"),
    borderRadius: wp("8%"),
    backgroundColor: "#ff3b3b",
    justifyContent: "center",
    alignItems: "center",
  },
  saveText: { color: "#fff", fontSize: wp("4%"), fontWeight: "600" },

  /* MODAL */
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    padding: wp("5%"),
  },
  dropdown: {
    backgroundColor: "#1c1c1e",
    borderRadius: wp("4%"),
    padding: wp("4%"),
  },
  dropdownTitle: {
    color: "#fff",
    fontSize: wp("4.2%"),
    fontWeight: "600",
    marginBottom: hp("1.5%"),
  },
  dropdownItem: {
    paddingVertical: hp("1.8%"),
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  dropdownText: {
    color: "#fff",
    fontSize: wp("4%"),
  },
  inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.08)",
  borderRadius: wp("3%"),
  height: hp("6.5%"),
  paddingHorizontal: wp("4%"),
},

rightIcon: {
  marginLeft: wp("2%"),
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
