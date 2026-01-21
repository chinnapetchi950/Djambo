import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ScreenWrapper from '../../components/ScreenWrapper';
import LogoutModal from '../../components/LogoutModal';
import BalanceStatusModal from '../../components/Balancemodal';

/* ------------------ DATA ------------------ */
const PLAYERS = [
  { id: '1', name: 'You', status: 'Ready', avatar: 'https://i.pravatar.cc/100' },
  { id: '2', name: 'Player 2', status: 'Waiting', avatar: 'https://i.pravatar.cc/101' },
  { id: '3', name: 'Player 3', status: 'Empty', avatar: require('../../../assets/images/placeHolder.png') },
  { id: '4', name: 'Player 4', status: 'Empty', avatar: require('../../../assets/images/placeHolder.png') },
];

/* ------------------ SCREEN ------------------ */
const WaitingRoomScreen = ({ navigation,route }) => {
    const gameType=route?.params?.gametype

  const [isReady, setIsReady] = useState(true);
  const [balanceMatched, setBalanceMatched] = useState(false);
  const [showBalanceModal,setShowBalanceModal]=useState(false)
const [isLeave,setisLeave]=useState(false)
  const renderPlayer = ({ item }) => {
    const statusColor =
      item.status === 'Ready'
        ? '#00C853'
        : item.status === 'Waiting'
        ? '#FFC107'
        : '#9E9E9E';

    const avatarSource =
      typeof item.avatar === 'string'
        ? { uri: item.avatar }
        : item.avatar;

    return (
      <View style={styles.playerCard}>
        <Image source={avatarSource} style={styles.avatarImg} />

        {/* Name overlay */}
        <View style={styles.namePill}>
          <Text style={styles.playerName}>{item.name}</Text>
        </View>

        <Text style={[styles.playerStatus, { color: statusColor }]}>
          {item.status}
        </Text>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <ImageBackground
        source={require('../../../assets/images/profile_bg.png')}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* HEADER */}
          <Text style={styles.title}>GUIO Waiting Room</Text>

          {/* GAME INFO */}
          <ImageBackground
            source={require('../../../assets/images/guio_bg.png')}
            style={styles.card}
            imageStyle={{ borderRadius: wp('4%') }}
          >
            <InfoRow label="Game Name" value= {gameType==='five'?"FIVE (FAPFAP)":gameType==='tia'?'TIA DIRECT':'TIA AGARAM'} />
            <InfoRow label="Bet" value="10 FCFA" />
            <InfoRow
              label="Status"
              value="• Waiting For Players"
              valueStyle={styles.waitingText}
            />
          </ImageBackground>

          {/* PLAYERS */}
          <ImageBackground
            source={require('../../../assets/images/guio_Card_bd.png')}
            resizeMode="stretch"
            style={styles.playersBg}
          >
            <View style={styles.playersInner}>
              <Text style={styles.sectionTitle}>Players</Text>

              <FlatList
                data={PLAYERS}
                renderItem={renderPlayer}
                keyExtractor={(item) => item.id}
                numColumns={4}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ marginTop: wp('3%') }}
              />

              <TouchableOpacity
                style={[
                  styles.primaryBtn,
                  { backgroundColor: isReady ? '#FF3B3B' : '#444',marginHorizontal:wp('2%') },
                ]}
                onPress={() =>navigation.navigate('FiveGameScreen')}
              >
                <Text style={styles.primaryBtnText}>Ready to Play</Text>
              </TouchableOpacity>

              <Text style={styles.helperText}>
                Game starts when all players are ready
              </Text>
            </View>
          </ImageBackground>

          {/* BALANCE */}
           {/* <ImageBackground
            source={require('../../../assets/images/guio_Card_bd.png')}
            resizeMode="stretch"
            style={styles.playersBg}
          ></ImageBackground> */}
           <ImageBackground
            source={require('../../../assets/images/guio_Card_bd.png')}
            resizeMode="stretch"
            style={styles.playersBg}
          >
            <View style={[styles.playersInner,{padding:wp('4%')}]}>
          {/* <View style={styles.card}> */}
            <View style={styles.rowBetween}>

              <View style={styles.row}>
                <View >
                  <Image
                    source={require('../../../assets/images/balance.png')}
                    style={styles.icon}
                  />
                  
                </View>
                <View>

                
                <Text style={styles.balanceAmount}>10 FCFA</Text>
                <Text style={styles.balanceLabel}>
                  Visible balance on table
                </Text>
                 </View>
              </View>

              <View style={{ flexDirection:'row',alignItems:'center', alignItems: 'flex-end',marginBottom:hp('1%') }}>
                <Text style={styles.safeBalance}>🟢  Safe Balance</Text>
                <TouchableOpacity onPress={()=>setShowBalanceModal(true)}>
 <Image
                  source={require('../../../assets/images/info.png')}
                  style={styles.infoIcon}
                />
                </TouchableOpacity>
               
              </View>
            </View>

            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => setBalanceMatched(true)}
            >
              <Text style={styles.secondaryBtnText}>Refill Balance</Text>
            </TouchableOpacity>
          {/* </View> */}
          </View>
          </ImageBackground>

          {!balanceMatched && (
            <Text style={styles.errorText}>
              Balance must match before bet to start
            </Text>
          )}

          {/* ACTIONS */}
           <View style={styles.actionRow}>
                      <ActionButton label="Leave Group" outlined onPress={()=>setisLeave(true)} />
                      <ActionButton  onPress={()=>navigation.navigate('Available')}label="Invite Friends" filled />
                    </View>
          {/* <View style={styles.bottomRow}>
            <TouchableOpacity
              style={styles.outlineBtn}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.outlineBtnText}>Leave Group</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.primaryBtn, { width: '48%' }]}>
              <Text style={styles.primaryBtnText}>Invite Friends</Text>
            </TouchableOpacity>
          </View> */}

        </ScrollView>
      </ImageBackground>
      <LogoutModal
  visible={isLeave}
  onCancel={() =>setisLeave(false)}
  onConfirm={()=>setisLeave(false)}
title={
    <>
    Do you really want to leave {'\n'}
      Group ? 
    </>
  }/>
  <BalanceStatusModal
  visible={showBalanceModal}
  onClose={() => setShowBalanceModal(false)}
/>
    </ScreenWrapper>
  );
};

export default WaitingRoomScreen;

/* ------------------ SMALL COMPONENT ------------------ */
const InfoRow = ({ label, value, valueStyle }) => (
  <View style={styles.rowBetween}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, valueStyle]}>{value}</Text>
  </View>
);

const ActionButton = ({ label, filled, onPress }) => {
  if (filled) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.actionBtn, styles.filledBtn]}
        activeOpacity={0.8}
      >
        <Text style={styles.filledText}>{label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <ImageBackground
      source={require('../../../assets/images/secondarybtnbg.png')}
      style={styles.actionBtn}
      resizeMode="cover"
    >
      <TouchableOpacity
        onPress={onPress}
        style={styles.fullBtn}
        activeOpacity={0.8}
      >
        <Text style={styles.outlinedText}>{label}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

/* ------------------ STYLES ------------------ */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('2.5%'),
  },
  actionBtn: {
    width: wp('47%'),
    height: hp('6.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    //
  },
  outlinedBtn: {
    borderWidth: wp('0.3%'),
    borderColor: '#fff',
  },
  filledBtn: {
    backgroundColor: '#ff3b3b',
    borderRadius: wp('8%'),
    flex:1,
     height: hp('6.0%'),
    marginTop:2
  },
  outlinedText: {
    fontSize: wp('4%'),
    color: '#fff',
  },
  filledText: {
    fontSize: wp('4%'),
    color: '#fff',
    fontWeight: '600',
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: '700',
    color: '#fff',
    marginTop: hp('4%'),
    marginBottom: wp('2%'),
  },

  card: {
    backgroundColor: '#1C1C1E',
    borderRadius: wp('4%'),
    padding: wp('5%'),
    marginTop: wp('4%'),
  },
 card1: {
    //backgroundColor: 'rgba(0,0,0,0.65)',
    borderRadius: wp('4%'),
    padding: wp('5%'),
    marginTop: wp('4%'),
  },
  playersBg: {
    marginTop: wp('5%'),
    borderRadius: wp('5%'),
    overflow: 'hidden',
  },

  playersInner: {
    backgroundColor: 'rgba(0,0,0,0.65)',
    padding: wp('2%'),
  },

  sectionTitle: {
    fontSize: wp('5.5%'),
    fontWeight: '700',
    color: '#fff',
    marginHorizontal:wp('2%')
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: wp('3%'),
  },

  label: {
    fontSize: wp('4%'),
    color: '#FFF',
  },

  value: {
    fontSize: wp('4.2%'),
    fontWeight: '600',
    color: '#fff',
  },

  waitingText: {
    color: '#FFC107',
  },

  playerCard: {
    width: wp('21%'),
    alignItems: 'center',
  },

  avatarImg: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
  },

  namePill: {
    marginTop: wp('-3%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('0.7%'),
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: wp('4%'),
    zIndex: 2,
  },

  playerName: {
    fontSize: wp('3.2%'),
    color: '#fff',
    fontWeight: '600',
  },

  playerStatus: {
    marginTop: wp('1.5%'),
    fontSize: wp('3.2%'),
    fontWeight: '600',
  },

  primaryBtn: {
    height: hp('6.5%'),
    borderRadius: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('5%'),
  },

  primaryBtnText: {
    fontSize: wp('4%'),
    fontWeight: '700',
    color: '#fff',
  },

  helperText: {
    fontSize: wp('3.8%'),
    color: '#9E9E9E',
    textAlign: 'center',
    marginTop: wp('3%'),
    marginBottom:wp('3%')
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: wp('5%'),
    height: wp('5%'),
    marginRight: wp('2%'),
  },

  infoIcon: {
    width: wp('5%'),
    height: wp('5%'),
    marginTop: wp('2%'),
    marginLeft:wp('4%')
  },

  balanceAmount: {
    fontSize: wp('4.5%'),
    fontWeight: '700',
    color: '#fff',
  },

  balanceLabel: {
    fontSize: wp('3.2%'),
    color: '#9E9E9E',
  },

  safeBalance: {
    fontSize: wp('4.0%'),
    fontWeight: '600',
    color: '#00C853',
  },

  secondaryBtn: {
    height: hp('6%'),
    borderRadius: wp('4%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('4%'),
  },

  secondaryBtnText: {
    fontSize: wp('4%'),
    fontWeight: '700',
    color: '#000',
  },

  errorText: {
    fontSize: wp('3.8%'),
    color: '#FF3B3B',
    textAlign: 'center',
    marginTop: wp('4%'),
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: wp('6%'),
    marginBottom: hp('4%'),
  },

  outlineBtn: {
    width: '48%',
    height: hp('6.5%'),
    borderRadius: wp('8%'),
    borderWidth: wp('0.3%'),
    borderColor: '#FF3B3B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  outlineBtnText: {
    fontSize: wp('3.8%'),
    color: '#fff',
    fontWeight: '600',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('3%'),
    gap:5,
    alignItems:'center'
  },
});
