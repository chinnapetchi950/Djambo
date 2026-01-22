
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
  Image
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BlurView } from "@react-native-community/blur";
import ScreenWrapper from "../../components/ScreenWrapper";

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

export default function Wallet({navigation}) {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.bg}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Wallet Details</Text>
            <View>
              <Ionicons name="notifications" size={wp("6%")} color="#FFD400" />
              <View style={styles.dot} />
            </View>
          </View>
 <ImageBackground
            source={require("../../../assets/images/balance_card_bg.png")}
            style={styles.walletCard}
            imageStyle={styles.walletBg}
          >
          {/* BALANCE CARD */}
          <LinearGradient
            colors={["#FF5A5F", "#FF2D00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.balanceCard}
          >
            <BalanceItem value="€127.50" label="EUR" />
            <Divider />
            <BalanceItem value="$85.20" label="USD" />
            <Divider />
            <BalanceItem value="78,450" label="FCFA" />
          </LinearGradient>

                     <Text
              style={[
                styles.totalValue,
                { color: "#00AD09", textAlign: "center", marginTop: hp("0.6%") },
              ]}
            >
              Safe Balance
            </Text>

            <Text style={styles.totalText}>
              Total (EUR equivalent):{" "}
              <Text style={styles.totalValue}>€247.83</Text>
            </Text>
</ImageBackground>
          {/* ACTION BUTTONS */}
          <View style={styles.actions}>
            <ActionBtn onPress={()=>navigation.navigate('DepositScreen',{name:'deposit'})} icon= {require('../../../assets/images/deposit.png')}label="Deposit" />
            <ActionBtn onPress={()=>navigation.navigate('DepositScreen',{name:'withdraw'})}icon={require('../../../assets/images/withdraw.png')}label="Withdrawal" />
            <ActionBtn onPress={()=>navigation.navigate('CurrencyConversionScreen')} icon={require('../../../assets/images/currency.png')} label="Convert Currency" />
          </View>

          {/* ACTIVE GAME BALANCE */}
          <Text style={styles.section}>Active Game Balance</Text>

          <GlassCard style={styles.gameCard}>
            <Row label="Visible Balance" value="10 FCFA" />
            <Row label="Required Balance" value="150 FCFA" />

            <View style={styles.statusRow}>
              <Text style={styles.label}>Status</Text>
              <View style={styles.status}>
                <View style={styles.yellowDot} />
                <Text style={styles.low}>Low Balance</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.refillBtn}>
              <Text style={styles.refillText}>Refill Balance</Text>
            </TouchableOpacity>
          </GlassCard>

          {/* TRANSACTIONS */}
          <View style={styles.txHeader}>
            <Text style={styles.section}>Transactions</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>

          <Transaction type="Deposit" amount="50.00 FCFA" />
          <Transaction type="Win" amount="10.00 FCFA" />
          <Transaction type="Win" amount="10.00 FCFA" />

          <View style={{ height: hp("12%") }} />
        </ScrollView>
      </ImageBackground>
    </ScreenWrapper>
  );
}

/* ---------- COMPONENTS ---------- */

const BalanceItem = ({ value, label }) => (
  <View style={styles.balanceItem}>
    <Text style={styles.balanceValue}>{value}</Text>
    <Text style={styles.balanceLabel}>{label}</Text>
  </View>
);

const Divider = () => <View style={styles.divider} />;

const ActionBtn = ({ icon, label,onPress }) => (
  <GlassCard style={styles.actionBtn}>
    <TouchableOpacity onPress={onPress}>
<Image
      source={icon}
      style={styles.actionIcon}
      resizeMode="contain"
    />
    <Text style={[styles.actionText,{marginRight:label==='Deposit'?wp('8%'):label==='Withdrawal'?wp('1%'):0}]}>{label}</Text>
    </TouchableOpacity>
    
  </GlassCard>
);


const Row = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const Transaction = ({ type, amount }) => (
  <GlassCard style={styles.txCard}>
    <View>
      <Text style={styles.txType}>{type}</Text>
      <Text style={styles.txAmount}>{amount}</Text>
    </View>
    <View>
      <Text style={styles.txDate}>02 Dec 2025</Text>
      <Text style={styles.txTime}>11:30 AM</Text>
    </View>
  </GlassCard>
);

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  bg: { flex: 1, paddingHorizontal: wp("2.5%") },

  header: {
    marginTop: hp("2%"),
    marginBottom:hp('3.4%'),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: wp("6%"),
    fontWeight: "700",
  },
  dot: {
    width: wp("2%"),
    height: wp("2%"),
    backgroundColor: "red",
    borderRadius: 10,
    position: "absolute",
    right: 0,
    top: 0,
  },

   balanceCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: wp("6%"),
    paddingVertical: hp("2.5%"),
    paddingHorizontal: wp("4%"),
  },
  balanceItem: { flex: 1, alignItems: "center" },
  balanceValue: { color: "#fff", fontSize: wp("5%"), fontWeight: "700" },
  balanceLabel: { color: "#fff", opacity: 0.9, marginTop: 4 },
  divider: {
    width: 1,
    height: "70%",
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  safe: { color: "#00AD09", textAlign: "center", marginTop: hp("1%") },
  total: { color: "#fff", textAlign: "center", marginBottom: hp("3%") },
  bold: { fontWeight: "700" },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("3%"),
  },
actionBtn: {
  width: wp("30%"),
  height: hp("11%"),
  alignItems: "center",
  justifyContent: "center",
},

actionIcon: {
  width: wp("6%"),
  height: wp("6%"),
  alignSelf:'flex-start'
},

actionText: {
  color: "#fff",
  marginTop: hp("1.2%"),
  fontSize: wp("3.8%"),
  textAlign: 'left',
  fontWeight:'500'
},


  section: {
    color: "#fff",
    fontSize: wp("6%"),
    fontWeight: "700",
    marginBottom: hp("2%"),
  },

  glass: {
    borderRadius: wp("5%"),
    padding: wp("4%"),
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  androidGlass: {
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  gameCard: { marginBottom: hp("4%") },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("1%"),
  },
  label: { color: "#FFF",fontWeight:'500' },
  value: { color: "#fff", fontWeight: "600" },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("2%"),
  },
  status: { flexDirection: "row", alignItems: "center" },
  yellowDot: {
    width: 8,
    height: 8,
    backgroundColor: "#FFD400",
    borderRadius: 10,
    marginRight: 8,
  },
  low: { color: "#FFD400", fontWeight: "700" },

  refillBtn: {
    backgroundColor: "#fff",
    paddingVertical: hp("1.5%"),
    borderRadius: wp("4%"),
  },
  refillText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: wp("4%"),
  },

  txHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:wp('1%')
    // marginBottom: hp("%"),
  },
  viewAll: { color: "#fff", textDecorationLine: "underline" },

  txCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("1.2%"),
  },
  txType: { color: "#fff", fontWeight: "700",fontSize:wp('3.8%') },
  txAmount: { color: "#00FF57", marginTop: 4 },
  txDate: { color: "#fff", textAlign: "right" },
  txTime: { color: "#fff", textAlign: "right" },
    walletCard: {
    borderRadius: wp("6%"),
    marginBottom: hp("3%"),
    elevation: 6,
  },
  walletBg: { borderRadius: wp("6%") },
    totalText: {
    textAlign: "center",
    color: "#fff",
    fontSize: wp("4.2%"),
    marginVertical: hp("1%"),
    marginBottom: hp("3%"),
  },

  totalValue: {
    color: "#fff",
    fontSize: wp("4.2%"),
    fontWeight: "700",
  },
});
