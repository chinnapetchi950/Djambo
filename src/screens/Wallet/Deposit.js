import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
  TextInput,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BlurView } from "@react-native-community/blur";
import ScreenWrapper from "../../components/ScreenWrapper";
import AppButton from "../../components/AppButton";
import CustomSuccessModal from "../../components/SuccessModal";
/* ---------- GLASS CARD ---------- */
const GlassCard = ({ children, style }) => {
  if (Platform.OS === "ios") {
    return (
      <BlurView blurType="dark" blurAmount={15} style={[styles.glass, style]}>
        {children}
      </BlurView>
    );
  }
  return <View style={[styles.glass, styles.androidGlass, style]}>{children}</View>;
};

const CURRENCIES = ["FCFA", "USD", "EUR"];
const PAYMENTS = [
  { id: "mtn", label: "MTN MoMo", icon: require("../../../assets/images/mtn.png") },
  { id: "paypal", label: "PayPal", icon: require("../../../assets/images/paypal.png") },
  { id: "orange", label: "Orange Money", icon: require("../../../assets/images/orange.png") },
];

export default function DepositScreen({navigation,route}) {
    const name=route?.params?.name
  const [currency, setCurrency] = useState('Choose currency');
  const [showCurrency, setShowCurrency] = useState(false);
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("mtn");
const [visible, setVisible] = useState(false);



  return (
    <ScreenWrapper>
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.bg}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.inputBox} onPress={()=>navigation.goBack()}>
                  <Ionicons name="chevron-back" size={wp("6%")} color="#fff" />
                </TouchableOpacity>
            <Text style={styles.headerTitle}>{name==='deposit'?'Deposit Funds': 'Withdraw Funds'}</Text>
            <View style={{ width: wp("34%") }} />
          </View>

          {/* SELECT CURRENCY */}
          <Text style={styles.label}>Select Currency</Text>
          <TouchableOpacity onPress={() => setShowCurrency(!showCurrency)}>
            <GlassCard style={styles.inputCard}>
              <View style={styles.rowBetween}>
                <Text style={styles.input}>{currency}</Text>
                <Ionicons
                  name={showCurrency ? "chevron-up" : "chevron-down"}
                  size={wp("5%")}
                  color="#fff"
                />
              </View>
            </GlassCard>
          </TouchableOpacity>

          {showCurrency && (
            <GlassCard style={styles.dropdown}>
              {CURRENCIES.map(item => (
                 <TouchableOpacity
          //key={index}
          style={styles.dropdownItem}
           onPress={() => {
                    setCurrency(item);
                    setShowCurrency(false);
                  }}
        >
          <Text style={styles.dropdownText}>{item}</Text>
        </TouchableOpacity>
              ))}
            </GlassCard>
          )}

          {/* AMOUNT */}
          <Text style={styles.label}>Enter Amount</Text>
          <GlassCard style={styles.inputCard}>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              placeholder="500"
              placeholderTextColor="rgba(255,255,255,0.5)"
              style={styles.input}
              keyboardType="numeric"
            />
          </GlassCard>

          {/* QUICK AMOUNTS */}
          <View style={styles.amountRow}>
            {[50, 100, 1000, 1500].map(val => (
              <TouchableOpacity key={val} onPress={() => setAmount(String(val))}>
                <GlassCard style={styles.amountBtn}>
                  <Text style={styles.amountText}>{val}</Text>
                </GlassCard>
              </TouchableOpacity>
            ))}
          </View>

          {/* PAYMENT MODE */}
          <Text style={styles.label}>Payment Mode</Text>

          {PAYMENTS.map(item => (
            <PaymentOption
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={payment === item.id}
              onPress={() => setPayment(item.id)}
            />
          ))}

          <View style={{ height: hp("14%") }} />
        </ScrollView>

        {/* CTA */}
        <AppButton
                    btnstyle={{ marginBottom: hp("4%") }}
                    title={name==='deposit'?'Continue to Payment':"Next"}
                    onPress={() =>  name==='deposit'?setVisible(true):navigation.navigate('WithdrawOTPScreen')}
                  />
        {/* <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Continue to Payment</Text>
        </TouchableOpacity> */}
      </ImageBackground>
      <CustomSuccessModal
  visible={visible}
  title={"Your deposit has been completed successfully."}
  data={[
    { label: "Amount Deposited:", value: "500" },
    { label: "Payment Method:", value: "MTN MoMo" },
  ]}
  secondaryText="Go to Wallet"
  primaryText="Done"
  onSecondary={() => navigation.navigate("Main",{screen:'Wallet'})}
  onPrimary={() => setVisible(false)}
/>
    </ScreenWrapper>
  );
}

/* ---------- PAYMENT OPTION ---------- */
const PaymentOption = ({ icon, label, active, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <GlassCard style={styles.paymentCard}>
      <View style={styles.paymentLeft}>
        <Image source={icon} style={styles.paymentIcon} resizeMode="contain" />
        <Text style={styles.paymentText}>{label}</Text>
      </View>
      <View style={[styles.radio, active && styles.radioActive]} />
    </GlassCard>
  </TouchableOpacity>
);

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  bg: { flex: 1, paddingHorizontal: wp("2.5%") },

  header: {
    marginTop: hp("3%"),
    marginBottom: hp("3.5%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: wp("6%"),
    fontWeight: "700",
  },

  label: {
    color: "#fff",
    fontSize: wp("4.2%"),
    fontWeight:'600',
    marginBottom: hp("1%"),
  },

  inputCard: {
    paddingVertical: hp("1.8%"),
    paddingHorizontal: wp("4%"),
    marginBottom: hp("2%"),
  },

  input: {
    color: "#fff",
    fontSize: wp("4%"),
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

//   dropdown: {
//     marginBottom: hp("2%"),
//     padding: wp("3%"),
//   },
//   dropdownItem: {
//   paddingVertical: hp('1.6%'),
//   paddingHorizontal: wp('4%'),
//   borderBottomWidth: wp('0.2%'),
//   borderBottomColor: '#333',
// },
//   dropdownItem: {
//     color: "#fff",
//     paddingVertical: hp("1%"),
//     fontSize: wp("4%"),
    
//   },

  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("3%"),
  },
  amountBtn: {
    width: wp("22%"),
    paddingVertical: hp("1.4%"),
    alignItems: "center",
  },
  amountText: {
    color: "#fff",
    fontWeight: "600",
  },

  paymentCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("4%"),
    marginBottom: hp("1.5%"),
  },
  paymentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentIcon: {
    width: wp("8%"),
    height: wp("8%"),
    marginRight: wp("3%"),
  },
  paymentText: {
    color: "#fff",
    fontSize: wp("4%"),
  },

  radio: {
    width: wp("4.5%"),
    height: wp("4.5%"),
    borderRadius: wp("2.25%"),
    borderWidth: 2,
    borderColor: "#FF3B3B",
  },
  radioActive: {
    backgroundColor: "#FF3B3B",
  },

  cta: {
    position: "absolute",
    bottom: hp("4%"),
    alignSelf: "center",
    width: "92%",
    backgroundColor: "#FF3B3B",
    paddingVertical: hp("2%"),
    borderRadius: wp("8%"),
    alignItems: "center",
  },
  ctaText: {
    color: "#fff",
    fontSize: wp("4.5%"),
    fontWeight: "700",
  },

  glass: {
    borderRadius: wp("3%"),
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  androidGlass: {
    backgroundColor: "rgba(255,255,255,0.08)",
  },
   inputBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: wp("2%"),
    paddingHorizontal: wp("3%"),
    height: hp("6.5%"),
    flexDirection: "row",
    alignItems: "center",
  },
   dropdown: {
  //backgroundColor: '#1F1F1F',
  borderRadius: wp('3%'),
  //marginTop: hp('1%'),
  marginBottom:hp('2%'),
  overflow: 'hidden',
},

dropdownItem: {
  paddingVertical: hp('1.6%'),
  paddingHorizontal: wp('4%'),
  borderBottomWidth: wp('0.2%'),
  borderBottomColor: '#333',
},

dropdownText: {
  fontSize: wp('3.8%'),
  color: '#fff',
},
});
