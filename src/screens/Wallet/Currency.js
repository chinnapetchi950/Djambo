import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Switch,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "@react-native-community/blur";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ScreenWrapper from "../../components/ScreenWrapper";
import AppButton from "../../components/AppButton";

/* ---------- GLASS ---------- */
const Glass = ({ children, style }) =>
  Platform.OS === "ios" ? (
    <BlurView blurType="dark" blurAmount={18} style={[styles.glass, style]}>
      {children}
    </BlurView>
  ) : (
    <View style={[styles.glass, styles.androidGlass, style]}>{children}</View>
  );

export default function CurrencyConversionScreen({navigation}) {
  const [autoConvert, setAutoConvert] = useState(true);
const currencies = ["FCFA", "USD", "EUR", "INR"];

const [fromCurrency, setFromCurrency] = useState("FCFA");
const [toCurrency, setToCurrency] = useState("USD");
const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <ScreenWrapper>
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.bg}
      >
        {/* HEADER */}
        <View style={styles.header}>
            <TouchableOpacity style={styles.inputBox} onPress={()=>navigation.goBack()}>
                      <Ionicons name="chevron-back" size={wp("7%")} color="#fff" />
                    </TouchableOpacity>
          <Text style={styles.headerTitle}>Currency Conversion</Text>
        </View>

        {/* DROPDOWNS */}
        <View style={styles.row}>
  {/* FROM */}
  <View style={{ width: "48%" }}>
    <Text style={styles.label}>From Currency</Text>
    <TouchableOpacity onPress={() => setOpenDropdown("from")}>
      <Glass style={styles.dropdown}>
        <Text style={styles.dropdownText}>{fromCurrency}</Text>
        <Ionicons size={wp("4%")} name="chevron-down" color="#fff" />
      </Glass>
    </TouchableOpacity>
  </View>

  {/* TO */}
  <View style={{ width: "48%" }}>
    <Text style={styles.label}>To Currency</Text>
    <TouchableOpacity onPress={() => setOpenDropdown("to")}>
      <Glass style={styles.dropdown}>
        <Text style={styles.dropdownText}>{toCurrency}</Text>
        <Ionicons size={wp("4%")} name="chevron-down" color="#fff" />
      </Glass>
    </TouchableOpacity>
  </View>
</View>

 {!!openDropdown && (
            <Glass style={styles.dropdownpop}>
              {currencies.map(item => (
                 <TouchableOpacity
          //key={index}
          style={styles.dropdownItem}
          onPress={() => {
            openDropdown === "from"
              ? setFromCurrency(item)
              : setToCurrency(item);
            setOpenDropdown(null);
          }}
        >
          <Text style={styles.dropdownText2}>{item}</Text>
        </TouchableOpacity>
              ))}
            </Glass>
          )}
        {/* RATE */}
        <Glass style={styles.rateCard}>
          <View>
            <Text style={styles.rate}>1 FCFA = 0.0016 $</Text>
            <Text style={styles.rateLabel}>Live Conversion Rate</Text>
          </View>
          <Ionicons name="sync" size={wp("7%")} color="#fff" />
        </Glass>

        {/* AUTO CONVERT */}
        <Glass style={styles.autoCard}>
          <View>
            <Text style={styles.autoTitle}>Auto Convert</Text>
            <Text style={styles.autoSub}>
              Automatically convert future deposits
            </Text>
          </View>
          <Switch
            value={autoConvert}
            onValueChange={setAutoConvert}
            thumbColor="#fff"
            trackColor={{ false: "#444", true: "#FF3B3B" }}
          />
        </Glass>

        {/* CTA */}
                <AppButton btnstyle={{ marginTop: hp("40%") }} onPress={()=> {}} title={'Confirm Conversion'}/>
        
        {/* <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Confirm Conversion</Text>
        </TouchableOpacity> */}
      </ImageBackground>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, paddingHorizontal: wp("3%") },

  header: {
    marginTop: hp("3%"),
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: wp("6%"),
    fontWeight: "700",
    marginLeft: wp("3%"),
  },

  label: {
    color: "#fff",
    fontSize:wp('3.8%'),
    marginBottom: hp("1%"),
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("5%"),
  },

  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("4%"),
  },
  dropdownText: { color: "#fff", fontSize: wp("4%") },

  rateCard: {
    marginTop: hp("3%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: wp("4%"),
  },
  rate: { color: "#fff", fontSize: wp("5%"), fontWeight: "600" },
  rateLabel: { color: "#FFF", marginTop: 4 },

  autoCard: {
    marginTop: hp("3%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: wp("4%"),
  },
  autoTitle: { color: "#fff", fontSize: wp("4.5%"), fontWeight: "600" },
  autoSub: { color: "#FFF", marginTop: 4 },

  cta: {
    position: "absolute",
    bottom: hp("5%"),
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#FF3B3B",
    paddingVertical: hp("2%"),
    borderRadius: wp("10%"),
    alignItems: "center",
  },
  ctaText: {
    color: "#fff",
    fontSize: wp("5%"),
    fontWeight: "700",
  },

  glass: {
    borderRadius: wp("3%"),
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  androidGlass: {
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  dropdownpop: {
  //backgroundColor: '#1F1F1F',
  borderRadius: wp('3%'),
  marginTop: hp('1%'),
  //marginBottom:hp('1%'),
  overflow: 'hidden',
},

dropdownItem: {
  paddingVertical: hp('1.6%'),
  paddingHorizontal: wp('4%'),
  borderBottomWidth: wp('0.2%'),
  borderBottomColor: '#333',
},

dropdownText2: {
  fontSize: wp('3.8%'),
  color: '#fff',
},
});
