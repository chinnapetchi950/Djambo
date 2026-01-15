import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import ScreenWrapper from '../../components/ScreenWrapper';

const GAME_TYPES = [
  {
    id: 'FIVE',
    title: 'FIVE (FAPFAP)',
    desc: 'Classic five-card game',
    players: '2-4 Players',
    min: 500,
  },
  {
    id: 'TIA_DIRECT',
    title: 'TIA DIRECT',
    desc: 'Fast Paced direct play',
    players: '2 Players',
    min: 1000,
  },
  {
    id: 'TIA_AGARAM',
    title: 'TIA AGARAM',
    desc: 'Strategic Variant with side bets',
    players: '2-4 Players',
    min: 2000,
  },
];

const GUIOS = [
  {
    id: '1',
    host: 'CardBoss',
    game: 'FIVE (FAPFAP)',
    bet: 5,
    players: 3,
    max: 4,
    identity: 'Anonymous',
  },
  {
    id: '2',
    host: 'Player123',
    game: 'TIA DIRECT',
    bet: 10,
    players: 3,
    max: 4,
    identity: 'Open',
  },
  {
    id: '3',
    host: 'CardBoss',
    game: 'TIA AGARAM',
    bet: 5,
    players: 4,
    max: 4,
    identity: 'Anonymous',
  },
];

export default function Game() {
  const [search, setSearch] = useState('');
  const [selectedGame, setSelectedGame] = useState('FIVE');

  const filteredGuios = GUIOS.filter(g =>
    g.host.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ScreenWrapper>
<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Choose a Game</Text>
        <View>
          <Ionicons name="notifications" size={22} color="#FFD200" />
          <View style={styles.badge} />
        </View>
      </View>

      {/* GAME TYPES */}
      <FlatList
        data={GAME_TYPES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedGame(item.id)}
            activeOpacity={0.9}
          >
            <GameTypeCard item={item} active={selectedGame === item.id} />
          </TouchableOpacity>
        )}
      />

      {/* ACTION BUTTONS */}
      <View style={styles.actionRow}>
        <ActionButton outline title="Create New GUIO" />
        <ActionButton solid title="Join GUIO" />
      </View>

      {/* SEARCH */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#999" />
        <TextInput
          placeholder="Search for player"
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* AVAILABLE GUIOS */}
      <View style={styles.listHeader}>
        <Text style={styles.sectionTitle}>Available GUIOs</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {filteredGuios.map(item => (
        <GuioCard key={item.id} item={item} />
      ))}
    </ScrollView>
    </ScreenWrapper>
    
  );
}
const GameTypeCard = ({ item, active }) => (
  <LinearGradient
    colors={['#0C0C0C', '#120707']}
    style={[
      styles.gameCard,
      active && { borderColor: '#FF2D2D' },
    ]}
  >
    <Text style={styles.gameTitle}>{item.title}</Text>
    <Text style={styles.gameDesc}>{item.desc}</Text>
    <Text style={styles.gameInfo}>{item.players}</Text>
    <Text style={styles.gameInfo}>Min : {item.min} FCFA</Text>
  </LinearGradient>
);
const GuioCard = ({ item }) => {
  const status =
    item.players === item.max
      ? 'Full'
      : item.players === item.max - 1
      ? 'Almost Full'
      : 'Waiting';

  const statusColor =
    status === 'Full' ? '#1ED760' : status === 'Almost Full' ? '#FFA500' : '#FFD200';

  return (
    <View style={styles.guioCard}>
      <Text style={[styles.status, { color: statusColor }]}>• {status}</Text>

      <Text style={styles.guioTitle}>
        {item.host} ({item.game})
      </Text>

      <Text style={styles.guioSub}>
        Bet: €{item.bet} | Players: {item.players}/{item.max}
      </Text>

      <Text style={styles.guioSub}>Identity: {item.identity}</Text>

      <TouchableOpacity
        style={[
          styles.joinBtn,
          status === 'Full' && { opacity: 0.5 },
        ]}
        disabled={status === 'Full'}
      >
        <Text style={styles.joinText}>Join</Text>
      </TouchableOpacity>
    </View>
  );
};
const ActionButton = ({ title, solid }) => (
  <TouchableOpacity
    style={[
      styles.actionBtn,
      solid
        ? { backgroundColor: '#FF2D2D' }
        : { borderWidth: 1, borderColor: '#FF2D2D' },
    ]}
  >
    <Text style={styles.actionText}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },

  badge: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF2D2D',
  },

  gameCard: {
    width: 200,
    borderRadius: 18,
    padding: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  gameTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  gameDesc: {
    color: '#999',
    marginVertical: 6,
  },

  gameInfo: {
    color: '#ccc',
    fontSize: 13,
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  actionBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 6,
  },

  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  searchInput: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  viewAll: {
    color: '#fff',
    textDecorationLine: 'underline',
  },

  guioCard: {
    backgroundColor: '#0F0F0F',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
  },

  status: {
    marginBottom: 6,
  },

  guioTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  guioSub: {
    color: '#aaa',
    marginTop: 4,
  },

  joinBtn: {
    backgroundColor: '#FF2D2D',
    alignSelf: 'flex-end',
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
  },

  joinText: {
    color: '#fff',
    fontWeight: '600',
  },
});
