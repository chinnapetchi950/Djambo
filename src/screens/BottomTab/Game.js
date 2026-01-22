
import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenWrapper from '../../components/ScreenWrapper';
import LinearGradient from 'react-native-linear-gradient';
import SearchFilterBar from '../../components/SearchFilter';
import { TokenClass } from 'typescript';


const Game = ({navigation}) => {
      const [showBet, setShowBet] = useState(false);
      const [showCurrency, setShowCurrency] = useState(false);
      const [search,setSearch]=useState('')
  return (
    <ScreenWrapper>
      <ImageBackground
        source={require('../../../assets/images/profile_bg.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Choose a Game</Text>
 <TouchableOpacity>
                 
                          <Ionicons name="notifications" size={22} color="#FFD200" />
                          <View style={styles.badgen} />
                        
              </TouchableOpacity>          </View>

          {/* Game Cards */}
          <View style={styles.cardRow}>
            <GameCard
              title="FIVE (FAPFAP)"
              desc="Classic five-card game"
              players="2–4 Players"
              min="Min : 500 FCFA"
              onPress={()=>navigation.navigate('Available', {
  headerTitle: ` FIVE (FAPFAP)`,
})}
            />
            <GameCard
              title="TIA DIRECT"
              desc="Fast Paced direct play"
              players="2 Players"
              min="Min : 1000 FCFA"
              onPress={()=>navigation.navigate('Available', {
  headerTitle: ` TIA DIRECT `,
})}
            />
            <GameCard
              title="TIA AGARAM"
              desc="Strategic Variant with side bets"
              players="2–4 Players"
              min="Min : 2000 FCFA"
              onPress={()=>navigation.navigate('Available', {
  headerTitle: `TIA AGARAM `,
})}
            />
          </View>

          {/* Buttons */}
          <View style={styles.actionRow}>
            <ActionButton label="Create New GUIO" outlined onPress={()=>navigation.navigate('CreateGUIOScreen')} />
            <ActionButton  onPress={()=>navigation.navigate('Available',{join:true})}label="Join GUIO" filled />
          </View>

          {/* Search */}
          
 <SearchFilterBar
  searchValue={search}
  onSearchChange={setSearch}
  onBetPress={() => {
    setShowBet(!showBet);
    setShowCurrency(false);
  }}
  onCurrencyPress={() => {
    setShowCurrency(!showCurrency);
    setShowBet(false);
  }}
/>
         
       
<View style={styles.dropdownWrapper}>
  {/* <TouchableOpacity style={styles.selectBtn}>
    <Text style={{ color: '#fff' }}>Bet</Text>
  </TouchableOpacity> */}

{showBet && <Dropdown  onclose={()=>{setShowBet(false)}} data={['€5', '€10', '€20']} />}
{showCurrency && <Dropdown onclose={()=>{setShowCurrency(false)}} data={['FCFA', 'EUR', 'USD']} />}
</View>


          {/* Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Available GUIOs</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Available')}>
            <Text style={styles.viewAll}>View All</Text>

            </TouchableOpacity>
          </View>

          {/* GUI Cards */}
          <GuiCard
            status="Almost Full"
            statusColor="#FFA500"
            name="John jolly"
            game="FIVE(FAPFAP)"
            bet="€5"
            players="3/4"
            identity="Anonymous"
            onPress={()=>navigation.navigate('GameLoader',{gametype:'five'})}
          />

          <GuiCard
            status="Waiting"
            statusColor="#FFD400"
            name="John Deo"
            game="TIA DIRECT"
            bet="€10"
            players="3/4"
            identity="Open"
            onPress={()=>navigation.navigate('GameLoader',{gametype:'tia'})}
          />
 <GuiCard
            status="Full"
            statusColor="#00C853"
            name="John Deo"
            game="TIA AGARAM"
            bet="€10"
            players="3/4"
            identity="Open"
            onPress={()=>navigation.navigate('GameLoader',{gametype:'agaram'})}
          />
        </ScrollView>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default Game;
const GameCard = ({ title, desc, players, min,onPress }) => (
  <ImageBackground
  
    source={require('../../../assets/images/Gamecard_bg.png')}
    style={styles.gameCard}
    resizeMode="cover"
  >
    <TouchableOpacity onPress={onPress}>
  <Text style={styles.gameTitle}>{title}</Text>
    <Text style={styles.gameDesc}>{desc}</Text>
    <Text style={styles.gameMeta}>{players}</Text>
    <Text style={styles.gameMin}>{min}</Text>
    </TouchableOpacity>
  
  </ImageBackground>
);
const GuiCard = ({ status, statusColor, name, game, bet, players, identity,onPress }) => (
  <View style={styles.guiCard}>
    <Text style={[styles.status, { color: statusColor }]}>• {status}</Text>
    <View style={styles.guiRow}>
      <View>
        <Text style={styles.guiName}>
          {name} <Text style={styles.guiGame}>({game})</Text>
        </Text>
        <Text style={styles.guiMeta}>Bet: {bet} | Players: {players}</Text>
        <Text style={styles.guiMeta}>Identity: {identity}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.joinBtn}>
        <Text style={styles.joinText}>Join</Text>
      </TouchableOpacity>
    </View>
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
        <Text style={styles.filledText}>+ {label}</Text>
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
        <Text style={styles.outlinedText}>+ {label}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
 const Dropdown = ({ data,onclose }) => (
     <View style={styles.dropdown}>
      {data.map(item => (
        <TouchableOpacity
          key={item}
          style={styles.dropdownItem}
          onPress={onclose}
        >
          <Text style={styles.dropdownText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>)

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    paddingHorizontal: wp('3%'),
    paddingBottom: hp('14%'),
  },
 badgen: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF2D2D',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('3%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: '700',
    color: '#fff',
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gameCard: {
    width: wp('30%'),
    padding: wp('4%'),
    borderRadius: wp('4%'),
    overflow: 'hidden',
  },
  gameTitle: {
    fontSize: wp('4.3%'),
    color: '#fff',
    fontWeight: '700',
  },
  gameDesc: {
    fontSize: wp('2.8%'),
    color: '#b5b5b5',
    marginVertical: hp('1%'),
  },
  gameMeta: {
    fontSize: wp('3.4%'),
    color: '#fff',
    marginTop: hp('1%'),
  },
  gameMin: {
    fontSize: wp('3.1%'),
    color: '#FFF',
    marginTop: hp('0.2%'),
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('3%'),
    gap:5,
    alignItems:'center'
  },
  // actionBtn: {
  //   width: wp('23%'),
  //   height: hp('6.5%'),
  //   //borderRadius: wp('8%'),
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // outlinedBtn: {
  //   borderWidth: wp('0.3%'),
  //   borderColor: '#fff',
  // },
  // filledBtn: {
  //   backgroundColor: '#ff3b3b',
  // },
  // outlinedText: {
  //   fontSize: wp('4%'),
  //   color: '#fff',
  // },
  // filledText: {
  //   fontSize: wp('4%'),
  //   color: '#fff',
  //   fontWeight: '600',
  // },

 searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 52,
    alignSelf:'center',
    marginHorizontal: 6,
    borderRadius: 32,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },

  divider: {
    width: 1,
    height: 52,
    backgroundColor: 'rgba(255,255,255,0.25)',
    marginHorizontal: 12,
  },

  filter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      //backgroundColor: '#1c1c1e',
      //borderRadius: 30,
      paddingHorizontal: 14,
      paddingVertical: 10,
      marginLeft: 6,
    },

    filterText: {
      color: '#fff',
      fontSize: 14,
      // marginRight: 4,
    },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:hp('3%'),
    marginBottom: hp('2%'),
    marginHorizontal:wp('1%')
  },
  sectionTitle: {
    fontSize: wp('5%'),
    color: '#fff',
    fontWeight: '700',

  },
  viewAll: {
    fontSize: wp('3.8%'),
    color: '#fff',
    textDecorationLine: 'underline',
  },
  guiCard: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: wp('4%'),
    padding: wp('4%'),
    marginBottom: hp('2%'),
  },
  status: {
    fontSize: wp('3.5%'),
    marginBottom: hp('1%'),
  },
  guiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  guiName: {
    fontSize: wp('4.2%'),
    color: '#fff',
    fontWeight: '600',
  },
  guiGame: {
    fontSize: wp('3.8%'),
    color: '#b5b5b5',
  },
  guiMeta: {
    fontSize: wp('3.5%'),
    color: '#b5b5b5',
    marginTop: hp('0.5%'),
  },
joinBtn: {
    backgroundColor: '#FA2630',
    height: hp('5.5%'),
    paddingHorizontal: wp('8%'),
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('3%'),
  },
  joinText: {
    fontSize: wp('4%'),
    color: '#fff',
    fontWeight: '600',
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
// dropdown: {
//       position: 'absolute',
//       top: 360,
//       right: 20,
//       backgroundColor: '#1c1c1e',
//       borderRadius: 14,
//       width: 140,
//       paddingVertical: 6,
//       zIndex: 10,
//       elevation: 5,
//     },
 dropdownWrapper: {
  position: 'absolute', // ✅ correct
  right: wp('2%'),
  top: hp('40%'),       // adjust based on SearchFilterBar position
  zIndex: 999,
  elevation: 20,
},

// dropdown: {
//   position: 'absolute',
//   bottom: hp('-10.5%'), // 👈 opens ABOVE button (match button height)
//   width: '100%',
//   backgroundColor: '#1F1F1F',
//   borderRadius: wp('3%'),
//   overflow: 'hidden',
//   zIndex: 999,
// },
      dropdown: {
        width: 190,
       
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
