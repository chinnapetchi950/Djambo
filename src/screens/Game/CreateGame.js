import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ScreenWrapper from '../../components/ScreenWrapper';
const GAME_TYPES = [
  'FIVE (FAPFAP)',
  'TIA DIRECT',
  'TIA AGARAM',
];

const BET_AMOUNTS = ['500', '1000', '2000', '5000'];

const CURRENCIES = ['FCFA', 'EUR', 'USD'];

const MAX_PLAYERS = ['2 Players', '3 Players', '4 Players'];
const CreateGUIOScreen = ({ navigation }) => {
  const [identifyMode, setIdentifyMode] = useState('open');
  const [betAmount, setBetAmount] = useState('500');
  const [showGame, setShowGame] = useState(false);
const [showCurrency, setShowCurrency] = useState(false);
const [showPlayer, setShowPlayer] = useState(false);

const [gameType, setGameType] = useState('');
const [currency, setCurrency] = useState('FCFA');
const [maxPlayer, setMaxPlayer] = useState('');

const Dropdown = ({ data, onSelect }) => {
  return (
    <View style={styles.dropdown}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.dropdownItem}
          onPress={() => onSelect(item)}
        >
          <Text style={styles.dropdownText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

  return (
    <ScreenWrapper >
      <ImageBackground
        source={require('../../../assets/images/profile_bg.png')}
        style={styles.background}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.inputCard} onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={wp('6%')}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Create New GUIO</Text>
          </View>

          {/* Game Type */}
         <Text style={styles.label}>Game Type</Text>
<TouchableOpacity
  style={styles.inputCard}
  onPress={() => setShowGame(!showGame)}
>
  <Text style={gameType ? styles.inputText : styles.placeholder}>
    {gameType || 'Select a game'}
  </Text>
  <Ionicons name="chevron-down" size={wp('5%')} color="#aaa" />
</TouchableOpacity>

{showGame && (
  <Dropdown
    data={GAME_TYPES}
    onSelect={(item) => {
      setGameType(item);
      setShowGame(false);
    }}
  />
)}


          {/* Bet + Currency */}
          <View style={styles.row}>
            <View style={styles.half}>
              <Text style={styles.label}>Bet Amount</Text>
              <View style={styles.inputCard}>
                <TextInput
                  value={betAmount}
                  onChangeText={setBetAmount}
                  keyboardType="numeric"
                  style={styles.inputText}
                  placeholder="500"
                  placeholderTextColor="#777"
                />
              </View>
            </View>

            <View style={styles.half}>
             <Text style={styles.label}>Currency</Text>
<TouchableOpacity
  style={styles.inputCard}
  onPress={() => setShowCurrency(!showCurrency)}
>
  <Text style={styles.inputText}>{currency}</Text>
  <Ionicons name="chevron-down" size={wp('5%')} color="#aaa" />
</TouchableOpacity>



            </View>
          </View>
{showCurrency && (
  <Dropdown
    data={CURRENCIES}
    onSelect={(item) => {
      setCurrency(item);
      setShowCurrency(false);
    }}
  />
)}
          {/* Maximum Player */}
        <Text style={styles.label}>Maximum Player</Text>
<TouchableOpacity
  style={styles.inputCard}
  onPress={() => setShowPlayer(!showPlayer)}
>
  <Text style={maxPlayer ? styles.inputText : styles.placeholder}>
    {maxPlayer || 'Choose Player'}
  </Text>
  <Ionicons name="chevron-down" size={wp('5%')} color="#aaa" />
</TouchableOpacity>

{showPlayer && (
  <Dropdown
    data={MAX_PLAYERS}
    onSelect={(item) => {
      setMaxPlayer(item);
      setShowPlayer(false);
    }}
  />
)}


          {/* Identify Mode */}
          <Text style={styles.label}>Identify Mode</Text>

          <TouchableOpacity
            style={styles.radioCard}
            onPress={() => setIdentifyMode('open')}
          >
            <View style={styles.radioRow}>
              <View
                style={[
                  styles.radioOuter,
                  identifyMode === 'open' && styles.radioActive,
                ]}
              >
                {identifyMode === 'open' && <View style={styles.radioInner} />}
              </View>
              <View>
                <Text style={styles.radioTitle}>Open</Text>
                <Text style={styles.radioDesc}>
                  Show player names and avatars
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioCard}
            onPress={() => setIdentifyMode('anonymous')}
          >
            <View style={styles.radioRow}>
              <View
                style={[
                  styles.radioOuter,
                  identifyMode === 'anonymous' && styles.radioActive,
                ]}
              >
                {identifyMode === 'anonymous' && (
                  <View style={styles.radioInner} />
                )}
              </View>
              <View>
                <Text style={styles.radioTitle}>Anonymous</Text>
                <Text style={styles.radioDesc}>
                  Hide player identities
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Create Button */}
          <TouchableOpacity style={styles.createBtn}>
            <Text style={styles.createText}>Create GUIO</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default CreateGUIOScreen;
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },

  background: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: wp('3%'),
    paddingBottom: hp('4%'),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },

  headerTitle: {
    fontSize: wp('6%'),
    color: '#fff',
    fontWeight: '700',
    marginLeft: wp('3%'),
  },

  label: {
    fontSize: wp('4%'),
    color: '#fff',
    marginBottom: hp('1%'),
    marginTop: hp('2%'),
  },

  inputCard: {
    height: hp('6.5%'),
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: wp('3.5%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  placeholder: {
    fontSize: wp('3.8%'),
    color: '#777',
  },

  inputText: {
    fontSize: wp('3.8%'),
    color: '#fff',
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },

  half: {
    width: '48%',
  },

  radioCard: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: wp('3.5%'),
    padding: wp('4%'),
    marginTop: hp('1.5%'),
  },

  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  radioOuter: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('2.5%'),
    borderWidth: wp('0.4%'),
    borderColor: '#FF3B3B',
    marginRight: wp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioActive: {
    borderColor: '#FF3B3B',
  },

  radioInner: {
    width: wp('2.5%'),
    height: wp('2.5%'),
    borderRadius: wp('1.25%'),
    backgroundColor: '#FF3B3B',
  },

  radioTitle: {
    fontSize: wp('4.2%'),
    color: '#fff',
    fontWeight: '600',
  },

  radioDesc: {
    fontSize: wp('3.5%'),
    color: '#999',
    marginTop: hp('0.5%'),
  },

  createBtn: {
    height: hp('7%'),
    backgroundColor: '#FF3B3B',
    borderRadius: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('8%'),
  },

  createText: {
    fontSize: wp('4.5%'),
    color: '#fff',
    fontWeight: '700',
  },
  dropdown: {
  backgroundColor: '#1F1F1F',
  borderRadius: wp('3%'),
  marginTop: hp('1%'),
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
