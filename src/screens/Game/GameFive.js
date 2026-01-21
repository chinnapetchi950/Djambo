
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
  SafeAreaView,
  TextInput,
  ScrollView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ScreenWrapper from '../../components/ScreenWrapper';
import LogoutModal from '../../components/LogoutModal';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const CARD_BACK = require('../../../assets/images/card_image.png');

/* ================= PLAYER COMPONENT ================= */

// const Player = ({ name }) => {
//   return (
//     <View style={styles.player}>
//       <Image
//         source={{ uri: 'https://i.pravatar.cc/150' }}
//         style={styles.avatar}
//       />

//       <View style={styles.namePill}>
//         <Text style={styles.playerName}>{name}</Text>
//       </View>

//       <Text style={styles.inPlay}>In Play: 1,250</Text>

//       <View style={styles.cardsRow}>
//         {[...Array(5)].map((_, i) => (
//           <Image key={i} source={CARD_BACK} style={styles.card} />
//         ))}
//       </View>
//     </View>
//   );
// };
const Player = ({ name, isGameStarted }) => {
  const isBottom = name === 'You';
  const istop = name === 'Player 2';
  const isleft = name === 'Player 3';

  return (
    <View style={[styles.player]}>
      {/* 🔴 TURN BOX (ONLY AFTER PLAY CLICK) */}
      {isGameStarted && isBottom && (
        <View style={styles.turnWrapper}>
          <View style={styles.turnBox} />
          {/* <Text style={styles.turnText}>Next Turn</Text> */}
        </View>
      )}

      {/* 🂠 Cards ABOVE avatar for bottom */}
      {isBottom && (
        <View style={styles.cardsRow}>
          {[...Array(5)].map((_, i) => (
            <Image key={i} source={CARD_BACK} style={styles.card} />
          ))}
        </View>
      )}

      {/* 👤 Avatar */}
      {isBottom ? (
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
      ) : istop ? (
        <Image
          source={{ uri: 'https://i.pravatar.cc/101' }}
          style={styles.avatar}
        />
      ) : (
        <Image
          source={require('../../../assets/images/placeHolder.png')}
          style={styles.avatar}
        />
      )}

      {/* 🏷 Name */}
      <View style={styles.namePill}>
        <Text style={styles.playerName}>{name}</Text>
      </View>

      <Text style={styles.inPlay}>In Play: 1,250</Text>

      {/* 🂠 Cards BELOW avatar for others */}
      {!isBottom && (
        <View style={styles.cardsRow}>
          {[...Array(5)].map((_, i) => (
            <Image key={i} source={CARD_BACK} style={styles.card} />
          ))}
        </View>
      )}

      {/* 🔴 TURN BOX BELOW cards for others */}
      {isGameStarted && !isBottom && (
        <View style={styles.turnWrapper}>
          <View style={styles.turnBox} />
          {isGameStarted && !isBottom && istop ? (
            <Text style={styles.timerText}>5 Sec</Text>
          ) : (
            <Text
              style={[styles.turnText, { color: isleft ? '#FFB300' : '#fff' }]}
            >
              Next Turn
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

/* ================= MAIN SCREEN ================= */

export default function FiveGameScreen() {
  // const [showChat, setShowChat] = useState(false);
  const [rulesVisible, setRulesVisible] = useState(false);
  const [winVisible, setWinVisible] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showLeave, setShowLeave] = useState(false);
  const [playCount, setPlayCount] = useState(0);
const [showChat, setShowChat] = useState(false);

  const handleLogout = () => {
    setShowLeave(false);
  };
  const handlePlayPress = () => {
    if (playCount === 0) {
      // First click → Start game
      setIsGameStarted(true);
      setPlayCount(1);
    } else if (playCount === 1) {
      // Second click → Show win modal
      setWinVisible(true);
    }
  };
  return (
    <ScreenWrapper>
      <ImageBackground
        source={require('../../../assets/images/profile_bg.png')}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* ---------- HEADER ---------- */}
          <View style={styles.header}>
            <Text style={styles.title}>FIVE (FAPFAP)</Text>
            <View style={styles.betPill}>
              <Text style={styles.betText}>Bet Amount : 120</Text>
            </View>
          </View>

          {/* ---------- PLAYERS ---------- */}
          <View style={styles.playersWrapper}>
            <View style={styles.topRow}>
              <Player name="Player 2" isGameStarted={isGameStarted} />
            </View>

            <View style={styles.middleRow}>
              <Player name="Player 3" isGameStarted={isGameStarted} />
              <Player name="Player 4"  isGameStarted={isGameStarted}/>
            </View>

            <View style={styles.bottomRow}>
              <Player name="You" isGameStarted={isGameStarted}/>
            </View>
          </View>

          {/* ---------- RULES ---------- */}
          <Text onPress={() => setRulesVisible(true)} style={styles.rulesText}>Read Rule Book</Text>

          {/* ---------- CHAT ---------- */}
          {showChat && (
            <View style={styles.chatBox}>
              <View style={styles.messageRow}>
      <TouchableOpacity style={styles.shareIcon}>
        {/* <Image
          source={require('../../../assets/images/share_icon.png')}
          style={styles.chatIcon}
        /> */}
         <MaterialCommunityIcons
      name="share-outline"
      size={wp('5%')}
      color="#fff"
    />
      </TouchableOpacity>

      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>
          Let's play an another game after this
        </Text>
      </View>

      <Image
        source={{ uri: 'https://i.pravatar.cc/100' }}
        style={styles.chatAvatar}
      />
    </View>

    {/* Input bar */}
    <View style={styles.inputRow}>
      <TextInput
        placeholder="Type.."
        placeholderTextColor="#9E9E9E"
        style={styles.chatInput}
      />

      <TouchableOpacity style={styles.micBtn}>
        {/* <Image
          source={require('../../../assets/images/mic_icon.png')}
          style={styles.chatIcon}
        /> */}
         <MaterialCommunityIcons
      name="microphone-outline"
      size={wp('5%')}
      color="#fff"
    />
      </TouchableOpacity>

      <TouchableOpacity style={styles.sendBtn}>
        {/* <Image
          source={require('../../../assets/images/send_icon.png')}
          style={styles.sendIcon}
        /> */}
         <MaterialCommunityIcons
      name="arrow-up"
      size={wp('5%')}
      color="#fff"
    />
      </TouchableOpacity>
    </View>

  </View>
          )}

          {/* ---------- ACTIONS ---------- */}
          <View style={styles.actionRow}>

  {/* Fold Button */}
  <TouchableOpacity
    activeOpacity={0.8}
    style={styles.foldBtnWrapper}
  >
    <ImageBackground
      source={require('../../../assets/images/fold_bg.png')}
      style={styles.foldBtn}
      resizeMode="stretch"
    >
      {/* <Text style={styles.outlinedText}>Fold</Text> */}
    </ImageBackground>
  </TouchableOpacity>


    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.sideBetBtn}
      //onPress={handleSideBet}
    >
      
        <Text style={styles.sideBetText}>Side Bet</Text>
      {/* </ImageBackground> */}
    </TouchableOpacity>
  {/* )} */}

  {/* Play Button */}
  <TouchableOpacity
    style={styles.playBtn}
    activeOpacity={0.85}
    onPress={handlePlayPress}
  >
    <Text style={styles.playText}>Play</Text>
  </TouchableOpacity>

  {/* Chat Button */}
  <TouchableOpacity
    style={styles.chatBtn}
    activeOpacity={0.8}
    onPress={() => setShowChat(!showChat)}
  >
    <Image source={require('../../../assets/images/chat_icon.png')} />
  </TouchableOpacity>

</View>


          {/* ---------- LEAVE ---------- */}
           <Text onPress={() => setShowLeave(true)} style={styles.leaveText}>
          Leave Game
        </Text>
        </ScrollView>
      </ImageBackground>
              <Modal transparent visible={rulesVisible} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.rulesModalNew}>
              {/* Close */}
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={() => setRulesVisible(false)}
              >
                <Image
                  source={require('../../../assets/images/modalclose.png')}
                />
                {/* <Text style={styles.closeIconText}>✕</Text> */}
              </TouchableOpacity>

              {/* Success Icon */}
              <Image
                source={require('../../../assets/images/successmark.png')}
                style={styles.badgeImage}
              />
              {/* <View style={styles.successIcon}>
        <Text style={styles.successTick}>✓</Text>
      </View> */}

              <Text style={styles.rulesTitle}>FIVE (FAPFAP) — Game Rules</Text>

              {[
                '2–4 players per match',
                'Each player is dealt 5 cards',
                'Game is round-based',
                'No strict action timer',
                'Players complete full round before result',
                'Highest valid combination wins',
                'Bet amount fixed at game start',
                'Cards shuffled server-side',
                'No side bets',
                'Commission deducted from winnings',
                'Wallet updated after result',
              ].map((rule, i) => (
                <Text key={i} style={styles.ruleLine}>
                  • {rule}
                </Text>
              ))}
            </View>
          </View>
        </Modal>

        {/* ---------- WIN MODAL ---------- */}
        {/* ---------- WIN MODAL ---------- */}
        {/* ---------- WIN MODAL ---------- */}
        <Modal transparent visible={winVisible} animationType="fade">
          <View style={styles.winOverlay}>
            {/* GIF BACKGROUND */}
            <FastImage
              source={require('../../../assets/gifs/win_modal.gif')}
              style={styles.gifBg}
              resizeMode="cover"
            >
              {/* White Card on top of GIF */}
              {/* <View style={styles.winCard}>
                <Text style={styles.winTitle}>You Won</Text>

                <View style={styles.row}>
                  <Text style={styles.label}>Amount Won</Text>
                  <Text style={styles.positive}>+20 FCFA</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.row}>
                  <Text style={styles.label}>Commission</Text>
                  <Text style={styles.negative}>-0.20 FCFA</Text>
                </View>

                <View style={styles.walletCard}>
                  <Text style={styles.walletLabel}>Updated Wallet Balance</Text>
                  <Text style={styles.walletValue}>130.30 FCFA</Text>
                </View>

                <View style={styles.btnRow}>
                  <TouchableOpacity style={styles.outlineBtn}>
                    <Text style={styles.outlineText}>Back to Games</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.primaryBtn}>
                    <Text style={styles.primaryText}>Play Again</Text>
                  </TouchableOpacity>
                </View>
              </View> */}
              <View style={styles.winModalNew}>
             
                <Text style={styles.winTitleNew}>You Won</Text>
                <View style={styles.amountRow}>
               
                  <Text style={styles.amountLabel}>Amount Won</Text>
                  <Text style={styles.amountValue}>+20 FCFA</Text>
                </View>
                                <View style={styles.divider} />

                <View style={styles.amountRow}>
                  
                  <Text style={styles.amountLabel}>Commission</Text>
                  <Text style={styles.amountNegative}>-0.20 FCFA</Text>
                </View>
                <View style={styles.walletCard}>
                 
                  <Text style={styles.walletLabel}>
                    Updated Wallet Balance
                  </Text>
                  <Text style={styles.walletValue}>130.30 FCFA</Text>
                </View>
                <View style={styles.winActionRow}>
                
                  <TouchableOpacity  style={styles.backBtn}>
                   
                    <Text style={styles.backText}>Back to Games</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>setWinVisible(false)}style={styles.playAgainBtn}>
                    
                    <Text style={styles.playAgainText}>Play Again</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </FastImage>
          </View>
        </Modal>
         <LogoutModal
          visible={showLeave}
          onCancel={() => setShowLeave(false)}
          onConfirm={handleLogout}
          title={
            <>
              Are you sure that you want {'\n'}
              to leave the game?
            </>
          }
        />
    </ScreenWrapper>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1 },

  scrollContent: {
    minHeight: hp('100%'),
   //addingBottom: hp('1%')
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2%'),
  },
  title: {
    color: '#fff',
    fontSize: wp('6%'),
    fontWeight: '700',
  },
  betPill: {
    backgroundColor: '#022403',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.8%'),
    borderRadius: wp('6%'),
  },
  betText: { color: '#00AD09', fontWeight: '600' },

  /* PLAYERS */
  playersWrapper: {
    marginTop: hp('6%'),
  },
  topRow: {
    alignItems: 'center',
    marginTop:hp('-4%'),
    marginBottom: hp('5%'),
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('3%'),
    marginBottom: hp('6%'),
  },
  bottomRow: {
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  player: {
    alignItems: 'center',
  },
  avatar: {
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('8%'),
  },
    namePill: {
    marginTop: hp('-1%'),
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.5%'),
    borderRadius: wp('5%'),
  },
  // namePill: {
  //   marginTop: hp('-1%'),
  //   backgroundColor: 'rgba(255,255,255,0.2)',
  //   paddingHorizontal: wp('4%'),
  //   paddingVertical: hp('0.4%'),
  //   borderRadius: wp('5%'),
  // },
  playerName: { color: '#fff', fontWeight: '600' },
  inPlay: { color: '#aaa', fontSize: wp('3.8%'),marginTop:5, },

  cardsRow: {
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  card: {
    width: wp('5.2%'),
    height: wp('10%'),
    marginHorizontal: wp('0.3%'),
    resizeMode: 'contain',
  },

  /* RULES */
  rulesText: {
    alignSelf: 'center',
    color: '#f00',
    fontSize: wp('4%'),
    marginBottom: hp('3%'),
  },

  /* CHAT */
  chatBox: {
    paddingHorizontal: wp('5%'),
    marginBottom: hp('4%'),
  },
  messageBubble: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: wp('4%'),
    borderRadius: wp('5%'),
    marginBottom: hp('1.5%'),
  },
  messageText: { color: '#fff', fontSize: wp('3.8%') },
  chatInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: wp('10%'),
    paddingHorizontal: wp('4%'),
  },
  chatInput: {
    flex: 1,
    color: '#fff',
    height: hp('6%'),
  },
  sendBtn: {
    backgroundColor: '#FF2D2D',
    width: hp('4.5%'),
    height: hp('4.5%'),
    borderRadius: hp('2.25%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ACTIONS */
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
    marginBottom: hp('3%'),
  },
  // foldBtn: {
  //   borderWidth: 1,
  //   borderColor: '#fff',
  //   flex:1,
  //   paddingVertical: hp('1.4%'),
  //   paddingHorizontal: wp('8%'),
  //   borderRadius: wp('8%'),
  // },
  foldText: { color: '#fff', fontWeight: '600' },
  // playBtn: {
  //   backgroundColor: '#FA2630',
  //   paddingVertical: hp('1.6%'),
  //   paddingHorizontal: wp('10%'),
  //   borderRadius: wp('8%'),
  // },
  playText: { color: '#fff', fontWeight: '700' },
 

  /* LEAVE */
  leaveText: {
    alignSelf: 'center',
    color: '#f00',
    textDecorationLine: 'underline',
    marginBottom: hp('3%'),
  },
  foldBtnWrapper: {
    width: wp('28%'),
    height: hp('6.5%'),
    borderRadius: hp('4%'),
  },

  foldBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  outlinedText: {
    color: '#fff',
    fontSize: wp('4.2%'),
    fontWeight: '600',
    textShadowColor: 'rgba(255,255,255,0.4)',
    textShadowOffset: { widthural: 0, height: 0 },
    textShadowRadius: 4,
  },

  /* ================= Play Button ================= */
  playBtn: {
    width: wp('25%'),
    height: hp('6.0%'),
    backgroundColor: '#FA2630',
    borderRadius: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },

  playText: {
    color: '#fff',
    fontSize: wp('4.4%'),
    fontWeight: '700',
  },

  /* ================= Chat Button ================= */
  chatBtn: {
    width: hp('6.5%'),
    height: hp('6.5%'),
    borderRadius: hp('3.25%'),
    backgroundColor: '#FA2630',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: hp('1.5%'),
},

shareIcon: {
  marginRight: wp('2%'),
},

messageBubble: {
  flex: 1,
  backgroundColor: '#221C1B',
  borderRadius: wp('6%'),
  paddingHorizontal: wp('4%'),
  paddingVertical: hp('1.2%'),
},

messageText: {
  color: '#fff',
  fontSize: wp('3.8%'),
},

chatAvatar: {
  width: wp('9%'),
  height: wp('9%'),
  borderRadius: wp('4.5%'),
  marginLeft: wp('2%'),
},

inputRow: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#221C1B',
  borderRadius: wp('10%'),
  paddingHorizontal: wp('4%'),
  height: hp('6%'),
},

chatInput: {
  flex: 1,
  color: '#fff',
  fontSize: wp('3.8%'),
},

micBtn: {
  marginHorizontal: wp('2%'),
},

sendBtn: {
  width: hp('4.5%'),
  height: hp('4.5%'),
  borderRadius: hp('2.25%'),
  backgroundColor: '#FF2D2D',
  justifyContent: 'center',
  alignItems: 'center',
},

chatIcon: {
  width: wp('4.5%'),
  height: wp('4.5%'),
  resizeMode: 'contain',
},

sendIcon: {
  width: wp('4%'),
  height: wp('4%'),
  tintColor: '#fff',
},
  turnWrapper: {
    alignItems: 'center',
    marginTop: hp('1%'),
  },

  turnBox: {
    width: wp('7%'),
    height: wp('9%'),
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dashed',
    borderRadius: wp('1%'),
  },

  turnText: {
    marginTop: hp('0.4%'),
    color: '#FFB300',
    fontSize: wp('3.2%'),
    fontWeight: '600',
  },
    timerBox: {
    width: wp('8%'),
    height: wp('10%'),
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dashed',
  },
  timerText: { color: '#f00', marginTop: hp('1%') },
    winModalNew: {
    width: wp('90%'),
    backgroundColor: '#fff',
    borderRadius: wp('6%'),
    paddingBottom: wp('1%'),
    paddingLeft: wp('3%'),
    paddingRight:wp('2%')
  },

  winTitleNew: {
    fontSize: wp('6%'),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: hp('2%'),
  },

  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('0.8%'),
  },

  amountLabel: {
    fontSize: wp('4%'),
    color: '#000',
  },

  amountValue: {
    fontSize: wp('4%'),
    fontWeight: '700',
    color: '#000',
  },

  amountNegative: {
    fontSize: wp('4%'),
    fontWeight: '700',
    color: '#E53935',
  },

  walletCard: {
    backgroundColor: '#000',
    borderRadius: wp('4%'),
    paddingVertical: hp('2%'),
    marginVertical: hp('2.5%'),
    alignItems: 'center',
  },

  walletLabel: {
    color: '#fff',
    fontSize: wp('3.8%'),
  },

  walletValue: {
    color: '#fff',
    fontSize: wp('6%'),
    fontWeight: '700',
    marginTop: hp('0.5%'),
  },

  winActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  backBtn: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#FF3B3B',
    borderRadius: wp('8%'),
    paddingVertical: hp('1.4%'),
    alignItems: 'center',
  },

  backText: {
    color: '#000',
    fontWeight: '600',
  },

  playAgainBtn: {
    width: '48%',
    backgroundColor: '#FF3B3B',
    borderRadius: wp('8%'),
    paddingVertical: hp('1.4%'),
    alignItems: 'center',
  },

  playAgainText: {
    color: '#fff',
    fontWeight: '700',
  },
  winOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)', // dim outside
    justifyContent: 'center',
    alignItems: 'center',
  },

  gifBg: {
    width: wp('92%'),
    borderRadius: wp('6%'),
    overflow: 'hidden', // 🔥 REQUIRED for rounded corners
    paddingVertical: hp('3%'),
    alignItems: 'center',
  },

  winCard: {
    width: '88%',
    backgroundColor: '#fff',
    borderRadius: wp('6%'),
    padding: wp('6%'),
  },
    rulesModalNew: {
    width: wp('100%'),
    backgroundColor: '#000',
    // borderRadius: wp('5%'),
    borderTopRightRadius: wp('5%'),
    borderTopLeftRadius: wp('5%'),
    padding: wp('6%'),
    alignItems: 'center',
  },

  closeIcon: {
    position: 'absolute',
    top: hp('2%'),
    right: wp('5%'),
  },

  closeIconText: {
    color: '#fff',
    fontSize: wp('5%'),
  },

  successIcon: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    backgroundColor: '#FF2D2D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  successTick: {
    color: '#fff',
    fontSize: wp('8%'),
    fontWeight: '700',
  },

  rulesTitle: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: '700',
    marginBottom: hp('2%'),
    textAlign: 'center',
  },

  ruleLine: {
    color: '#ccc',
    fontSize: wp('3.8%'),
    marginBottom: hp('1%'),
    alignSelf: 'flex-start',
  },
    badgeImage: {
    width: 70,
    height: 70,
    marginTop: wp('5%'),
    marginBottom: wp('5%'),
  },
    modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sideBetBtn: {
width: wp('25%'),
    height: hp('6.0%'),
    backgroundColor: '#00AD09',
    borderRadius: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00AD09',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
},

sideBetBtnBg: {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
},

sideBetText: {
  color: '#fff',
  fontWeight: '700',
  fontSize: wp('4%'),
},

});
