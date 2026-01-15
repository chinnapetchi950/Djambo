import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Modal
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Typography } from "../../theme/typography";

const InputField = ({
  label,
  value,
  editable = true,
  rightIcon,
  onPress,
}) => (
  <View style={styles.fieldWrapper}>
    <Text style={styles.label}>{label}</Text>

    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={!onPress}
      style={[styles.inputBox, !editable && styles.disabled]}
    >
      <Text style={styles.input}>{value}</Text>

      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </TouchableOpacity>
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
            <Text style={styles.headerTitle}>Edit Profile</Text>
          </View>

          {/* FORM */}
          <InputField label="Username" value="game master x" />
          <InputField label="Email Address" value="david@email.com" />
          <InputField
            label="Mobile Number"
            value="**********"
            editable={false}
            rightIcon={
              <Image
                source={require("../../../assets/images/mobile_verify.png")}
                //tintColor="#00FF40"
              />
            }
          />

          <Text style={styles.helperText}>
            OTP required to change verified mobile
          </Text>

          <InputField label="Country" value="Cameroon" editable={false} />
          <InputField
  label="Select Preferred Currency"
  value={currency}
  editable={false}
  onPress={() => setShowCurrency(true)}
  rightIcon={<Ionicons name="chevron-down" size={20} color="#aaa" />}
/>

<InputField
  label="Language"
  value={language}
  editable={false}
  onPress={() => setShowLanguage(true)}
  rightIcon={<Ionicons name="chevron-down" size={20} color="#aaa" />}
/>

        </ScrollView>
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

        {/* ACTION BUTTONS */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 20,
  },

  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight:'700',
    fontFamily: Typography.fontFamily.semibold,
  },

  fieldWrapper: {
    marginHorizontal: 20,
    marginTop: 18,
  },

  label: {
    color: "#fff",
    marginBottom: 6,
    fontSize: 14,
    fontFamily: Typography.fontFamily.semibold,
  },

  inputBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
  },

  disabled: {
    opacity: 0.6,
  },

  input: {
    flex: 1,
    color: "#6E6E6E",
    fontSize: 15,
  },

  rightIcon: {
    marginLeft: 10,
  },

  helperText: {
    marginLeft: 20,
    marginTop: 6,
    color: "#aaa",
    fontSize: 12,
  },

  footer: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: "row",
    gap: 12,
  },

  cancelBtn: {
    flex: 1,
    height: 52,
    borderRadius: 30,
    borderWidth: 0.6,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation:3
  },

  cancelText: {
    color: "#fff",
    fontSize: 16,
  },

  saveBtn: {
    flex: 1,
    height: 52,
    borderRadius: 30,
    backgroundColor: "#ff3b3b",
    justifyContent: "center",
    alignItems: "center",
  },

  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  overlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.6)",
  justifyContent: "center",
  padding: 20,
},

dropdown: {
  backgroundColor: "#1c1c1e",
  borderRadius: 16,
  padding: 16,
},

dropdownTitle: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
  marginBottom: 12,
},

dropdownItem: {
  paddingVertical: 12,
  borderBottomWidth: 0.5,
  borderBottomColor: "#333",
},

dropdownText: {
  color: "#fff",
  fontSize: 15,
},

});
