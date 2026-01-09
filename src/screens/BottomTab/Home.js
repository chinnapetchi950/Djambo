import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenWrapper from '../../components/ScreenWrapper';

export default function Home({ navigation }) {
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* ================= HEADER ================= */}
        <ImageBackground
          style={{ height: 200, width: '100%' }}
          source={require('../../../assets/images/headerTop.png')}
        >
          <View style={styles.header}>
            <View style={styles.profileRow}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/100' }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.hello}>Hello David 👋</Text>
                <Text style={styles.welcome}>Welcome Back</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.bell}>
              <Ionicons name="notifications" size={20} color="#FFD400" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* ================= BALANCE CARD ================= */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance (FCFA)</Text>
          <Text style={styles.balanceValue}>45,000</Text>

          <View style={styles.balanceActions}>
            <ActionButton icon="download-outline" label="Deposit" />
            <ActionButton icon="arrow-up-outline" label="Withdrawal" />
          </View>
        </View>

        {/* ================= SEARCH + FILTER ================= */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={16} color="#aaa" />
            <TextInput
              placeholder="Search for player"
              placeholderTextColor="#777"
              style={styles.searchInput}
            />
          </View>

          <FilterButton label="Bet" />
          <FilterButton label="Currency" />
        </View>

        {/* ================= ACTIVE GUIO ================= */}
        <Text style={styles.sectionTitle}>Active GUIO</Text>

        <View style={styles.activeCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1601933470928-c8a1f8d5f2ad',
            }}
            style={styles.activeImage}
          />

          <View style={styles.activeOverlay}>
            <Text style={styles.waiting}>Waiting to start</Text>

            <Text style={styles.gameTitle}>TIA Direct</Text>
            <Text style={styles.gameInfo}>Bet: €10</Text>
            <Text style={styles.gameInfo}>Players: 3 / 4 joined</Text>

            <TouchableOpacity style={styles.rejoinBtn}>
              <Text style={styles.rejoinText}>Rejoin Game</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ================= QUICK ACTIONS ================= */}
        <View style={styles.quickRow}>
          <QuickCard title="Create GUIO" />
          <QuickCard title="Join GUIO" />
          <QuickCard title="Invite" />
        </View>

        {/* ================= AVAILABLE GAMES ================= */}
        <Text style={styles.sectionTitle}>Available Games</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <GameCard
            number="1"
            title="Player 123"
            subtitle="FIVE"
            min="500 FCFA"
          />
          <GameCard
            number="2"
            title="Card Master"
            subtitle="TIA DIRECT"
            min="5,000 FCFA"
          />
        </ScrollView>

        {/* ================= RECENT ACTIVITY ================= */}
        <View style={styles.recentHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <ActivityRow
          title="FIVE (FAPFAP)"
          amount="+5,000 FCFA"
          status="Won"
          time="2h Ago"
        />
        <ActivityRow
          title="TIA DIRECT"
          amount="-2,000 FCFA"
          status="Lost"
          time="2 Days Ago"
        />
        <ActivityRow
          title="TIA AGARAM"
          amount="+5,000 FCFA"
          status="Won"
          time="2h Ago"
        />
      </ScrollView>
    </ScreenWrapper>
  );
}

/* ================= SMALL COMPONENTS ================= */

const ActionButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.actionBtn}>
    <Ionicons name={icon} size={16} color="#fff" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const FilterButton = ({ label }) => (
  <TouchableOpacity style={styles.filterBtn}>
    <Text style={styles.filterText}>{label}</Text>
    <Ionicons name="chevron-down" size={14} color="#aaa" />
  </TouchableOpacity>
);

const QuickCard = ({ title }) => (
  <View style={styles.quickCard}>
    <Text style={styles.quickText}>{title}</Text>
  </View>
);

const GameCard = ({ number, title, subtitle, min }) => (
  <View style={styles.gameCard}>
    <Text style={styles.gameNumber}>{number}</Text>
    <Text style={styles.gameName}>{title}</Text>
    <Text style={styles.gameSub}>{subtitle}</Text>
    <Text style={styles.gameMin}>Min: {min}</Text>
  </View>
);

const ActivityRow = ({ title, amount, status, time }) => (
  <View style={styles.activityRow}>
    <View>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text
        style={[
          styles.activityAmount,
          status === 'Won' ? styles.win : styles.loss,
        ]}
      >
        {amount}
      </Text>
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <Text
        style={[styles.status, status === 'Won' ? styles.win : styles.loss]}
      >
        {status}
      </Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  </View>
);

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { paddingBottom: 140 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },
  hello: { color: '#fff', fontSize: 16, fontWeight: '600' },
  welcome: { color: '#aaa', fontSize: 12 },
  bell: { padding: 8, borderRadius: 20, backgroundColor: '#1c1c1e' },

  balanceCard: {
    backgroundColor: '#111',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
  },
  balanceLabel: { color: '#aaa' },
  balanceValue: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 10,
  },
  balanceActions: { flexDirection: 'row' },

  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  actionText: { color: '#fff', marginLeft: 6 },

  searchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 30,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  searchInput: { color: '#fff', marginLeft: 6, flex: 1 },

  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginLeft: 6,
  },
  filterText: { color: '#fff', marginRight: 4 },

  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 14,
  },

  activeCard: { borderRadius: 20, overflow: 'hidden' },
  activeImage: { height: 180, width: '100%' },
  activeOverlay: { position: 'absolute', bottom: 0, padding: 16 },
  waiting: { color: '#FFD400', marginBottom: 6 },
  gameTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
  gameInfo: { color: '#ccc', fontSize: 12 },
  rejoinBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  rejoinText: { color: '#000', fontWeight: '600' },

  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  quickCard: {
    width: '30%',
    height: 90,
    backgroundColor: '#1c1c1e',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickText: { color: '#fff', fontSize: 12 },

  gameCard: {
    width: 160,
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
  },
  gameNumber: { fontSize: 42, color: '#ff3b3b', fontWeight: '800' },
  gameName: { color: '#fff', fontWeight: '600' },
  gameSub: { color: '#aaa', fontSize: 12 },
  gameMin: { color: '#ccc', fontSize: 11, marginTop: 6 },

  recentHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  viewAll: { color: '#aaa' },

  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1c1c1e',
    padding: 14,
    borderRadius: 14,
    marginTop: 10,
  },
  activityTitle: { color: '#fff', fontWeight: '600' },
  activityAmount: { fontSize: 13 },
  win: { color: '#32d74b' },
  loss: { color: '#ff453a' },
  status: { fontSize: 12 },
  time: { color: '#aaa', fontSize: 11 },
});
