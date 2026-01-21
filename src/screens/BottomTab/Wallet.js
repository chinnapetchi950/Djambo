import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ScreenWrapper from "../../components/ScreenWrapper";

export default function Wallet({ navigation }) {
  return (
    <ScreenWrapper>
      
      {/* <ScrollView contentContainerStyle={styles.container}>
        {/* HEADER */}
        {/* <View style={styles.header}>
          <Text style={styles.headerTitle}>Wallet Details</Text>
          <TouchableOpacity>
            <Ionicons name="notifications" size={22} color="#FFD400" />
            <View style={styles.badge} />
          </TouchableOpacity>
        </View> */}

        {/* BALANCE CARD */}
        {/* <View style={styles.balanceCard}>
          <BalanceItem value="€127.50" label="EUR" />
          <Divider />
          <BalanceItem value="$85.20" label="USD" />
          <Divider />
          <BalanceItem value="78,450" label="FCFA" />
        </View> */}

        {/* <Text style={styles.totalText}>
          Total (EUR equivalent): <Text style={styles.totalValue}>€247.83</Text>
        </Text> */}

        {/* ACTION BUTTONS */}
        {/* <View style={styles.actionRow}>
          <ActionButton icon="download-outline" label="Deposit" />
          <ActionButton icon="arrow-up-outline" label="Withdrawal" />
          <ActionButton icon="swap-horizontal-outline" label="Convert Currency" />
        </View> */}

        {/* ACTIVE GAME BALANCE */}
        {/* <Text style={styles.sectionTitle}>Active Game Balance</Text>

        <View style={styles.gameBalanceCard}>
          <InfoRow label="Visible Balance" value="10 FCFA" />
          <InfoRow label="Required Balance" value="150 FCFA" />
          <InfoRow
            label="Status"
            value="Low Balance"
            valueStyle={{ color: "#FFD400" }}
          />

          <TouchableOpacity style={styles.refillBtn}>
            <Text style={styles.refillText}>Refill Balance</Text>
          </TouchableOpacity>
        </View> */}

        {/* TRANSACTIONS */}
        {/* <View style={styles.transactionHeader}>
          <Text style={styles.sectionTitle}>Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <TransactionItem type="Deposit" amount="+50.00 FCFA" />
        <TransactionItem type="Win" amount="+10.00 FCFA" />
        <TransactionItem type="Win" amount="+10.00 FCFA" />
      </ScrollView> */} 
    </ScreenWrapper>
  );
}

/* COMPONENTS */

const BalanceItem = ({ value, label }) => (
  <View style={styles.balanceItem}>
    <Text style={styles.balanceValue}>{value}</Text>
    <Text style={styles.balanceLabel}>{label}</Text>
  </View>
);

const Divider = () => <View style={styles.verticalDivider} />;

const ActionButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.actionBtn}>
    <Ionicons name={icon} size={22} color="#fff" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const InfoRow = ({ label, value, valueStyle }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={[styles.infoValue, valueStyle]}>{value}</Text>
  </View>
);

const TransactionItem = ({ type, amount }) => (
  <View style={styles.transactionCard}>
    <View>
      <Text style={styles.transactionType}>{type}</Text>
      <Text style={styles.transactionAmount}>{amount}</Text>
    </View>
    <View>
      <Text style={styles.transactionDate}>02 Dec 2025</Text>
      <Text style={styles.transactionTime}>11:30 AM</Text>
    </View>
  </View>
);

/* STYLES */

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  badge: {
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 4,
    position: "absolute",
    top: 0,
    right: 0,
  },

  balanceCard: {
    backgroundColor: "#FF3B3B",
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 12,
  },

  balanceItem: {
    alignItems: "center",
    flex: 1,
  },

  balanceValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  balanceLabel: {
    color: "#fff",
    marginTop: 4,
    opacity: 0.9,
  },

  verticalDivider: {
    width: 1,
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  totalText: {
    color: "#aaa",
    textAlign: "center",
    marginVertical: 12,
  },

  totalValue: {
    color: "#fff",
    fontWeight: "700",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  actionBtn: {
    backgroundColor: "#222",
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
  },

  actionText: {
    color: "#fff",
    marginTop: 6,
    fontSize: 13,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
  },

  gameBalanceCard: {
    backgroundColor: "#1c1c1c",
    borderRadius: 18,
    padding: 16,
    marginTop: 12,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  infoLabel: {
    color: "#aaa",
  },

  infoValue: {
    color: "#fff",
    fontWeight: "600",
  },

  refillBtn: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    marginTop: 14,
  },

  refillText: {
    textAlign: "center",
    fontWeight: "700",
  },

  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 10,
  },

  viewAll: {
    color: "#fff",
    textDecorationLine: "underline",
  },

  transactionCard: {
    backgroundColor: "#222",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  transactionType: {
    color: "#fff",
    fontWeight: "700",
  },

  transactionAmount: {
    color: "#00FF57",
    marginTop: 4,
  },

  transactionDate: {
    color: "#aaa",
    textAlign: "right",
  },

  transactionTime: {
    color: "#aaa",
    textAlign: "right",
    marginTop: 2,
  },
});
