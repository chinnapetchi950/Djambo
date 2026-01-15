  // import React, { useState } from 'react';
  // import {
  //   View,
  //   Text,
  //   StyleSheet,
  //   ScrollView,
  //   Image,
  //   TouchableOpacity,
  //   TextInput,
  //   ImageBackground,
  // } from 'react-native';
  // import Ionicons from 'react-native-vector-icons/Ionicons';
  // import ScreenWrapper from '../../components/ScreenWrapper';
  // import { Typography } from '../../theme/typography';

  //  export default function Home({ navigation }) {
  //   const [showBet, setShowBet] = useState(false);
  //   const [showCurrency, setShowCurrency] = useState(false);

  //   return (
  //     <ScreenWrapper>
  //     <ImageBackground
  //       source={require('../../../assets/images/home_bg.png')}
  //       style={{  flex: 1,
  //   backgroundColor: '#000',}}
  //       resizeMode="cover"
  //     >
        
  //         <ScrollView
  //           showsVerticalScrollIndicator={false}
  //           contentContainerStyle={styles.container}
  //         >
  //           <>
  //             {/* ================= HEADER ================= */}

  //             <View style={styles.header}>
  //               <View style={styles.profileRow}>
  //                 <Image
  //                   source={{ uri: 'https://i.pravatar.cc/100' }}
  //                   style={styles.avatar}
  //                 />
  //                 <View>
  //                   <Text style={styles.hello}>Hello David 👋</Text>
  //                   <Text style={styles.welcome}>Welcome back</Text>
  //                 </View>
  //               </View>

  //               <TouchableOpacity style={styles.bell}>
  //                 <Ionicons name="notifications" size={20} color="#FFD400" />
  //               </TouchableOpacity>
  //             </View>

  //             {/* ================= WALLET CARD ================= */}
  //             {/* <ImageBackground style={styles.balanceCard} source={require('../../../assets/images/balanceCard.png')}> */}
  //             <View style={styles.balanceCard}>
  //               <Text style={styles.balanceLabel}>Total Balance(FCFA)</Text>
  //               <Text style={styles.balanceValue}>45,000</Text>

  //               <View style={styles.balanceActions}>
  //                 <ActionButton icon="download-outline" label="Deposit" primary />
  //                 <ActionButton icon="arrow-up-outline" label="Withdrawal" />
  //               </View>
  //             </View>
  //             {/* </ImageBackground> */}

  //             {/* ================= SEARCH & FILTER ================= */}
  //             <View style={styles.searchwrapper}>
  //               {/* ================= BAR ================= */}
  //               <View style={styles.searchcontainer}>
  //                 {/* Search */}
  //                 <View style={styles.searchBox}>
  //                   <Ionicons name="search" size={16} color="#aaa" />
  //                   <TextInput
  //                     placeholder="Search for player"
  //                     placeholderTextColor="#fff"
  //                     style={styles.input}
  //                   />
  //                 </View>

  //                 {/* Divider */}
  //                 {/* <View style={styles.divider} /> */}

  //                 {/* Bet */}
  //                 {/* <View style={{flexDirection: 'row', alignItems: 'center', }}> */}

  //                 <View
  //                   style={{
  //                     flexDirection: 'row',
  //                     backgroundColor: '#343434',
  //                     height: 50,
  //                     borderRadius: 25,
  //                     width: '55%',
  //                     alignItems: 'center',
  //                   }}
  //                 >
  //                   <TouchableOpacity
  //                     style={styles.filterBtn}
  //                     onPress={() => {
  //                       setShowBet(!showBet);
  //                       setShowCurrency(false);
  //                     }}
  //                   >
  //                     <Text style={styles.filterText}>Bet</Text>
  //                     <Ionicons name="chevron-down" size={14} color="#aaa" />
  //                   </TouchableOpacity>

  //                   {/* Divider */}
  //                   <View style={styles.divider} />

  //                   {/* Currency */}
  //                   <TouchableOpacity
  //                     style={styles.filterBtn}
  //                     onPress={() => {
  //                       setShowCurrency(!showCurrency);
  //                       setShowBet(false);
  //                     }}
  //                   >
  //                     <Text style={styles.filterText}>Currency</Text>
  //                     <Ionicons name="chevron-down" size={14} color="#aaa" />
  //                   </TouchableOpacity>
  //                 </View>
  //               </View>

  //               {/* ================= DROPDOWNS ================= */}
  //               {showBet && (
  //                 <Dropdown
  //                   data={['€5', '€10', '€20']}
  //                   onClose={() => setShowBet(false)}
  //                 />
  //               )}

  //               {showCurrency && (
  //                 <Dropdown
  //                   data={['FCFA', 'EUR', 'USD']}
  //                   onClose={() => setShowCurrency(false)}
  //                 />
  //               )}
  //             </View>

  //             {/* ================= ACTIVE GUIO ================= */}
  //             <Text style={styles.sectionTitle}>Active GUIO</Text>

  //             <TouchableOpacity activeOpacity={0.9}>
  //               <View style={styles.activeCard}>
  //                 <Image
  //                   source={require('../../../assets/images/active_bg.png')}
  //                   style={styles.activeImage}
  //                 />

  //                 <View style={styles.activeOverlay}>
  //                   <View
  //                     style={{
  //                       backgroundColor: '#2c2701',
  //                       padding: 10,
  //                       borderRadius: 25,
  //                       width: 130,
  //                       alignItems: 'center',
  //                       borderWidth: 1,
  //                     }}
  //                   >
  //                     <Text style={styles.waiting}>Waiting to start</Text>
  //                   </View>

  //                   <Text style={styles.gameTitle}>TIA Direct</Text>
  //                   <Text style={styles.gameInfo}>Bet: €10</Text>
  //                   <Text style={styles.gameInfo}>Players: 3 / 4 joined</Text>

  //                   <TouchableOpacity style={styles.rejoinBtn}>
  //                     <Text style={styles.rejoinText}>Rejoin Game</Text>
  //                   </TouchableOpacity>
  //                 </View>
  //               </View>
  //             </TouchableOpacity>

  //             {/* ================= QUICK ACTIONS ================= */}
  //             <View style={styles.quickRow}>
  //               <QuickCard title="Create GUIO" />
  //               <QuickCard title="Join GUIO" />
  //               <QuickCard title="Invite" />
  //             </View>

  //             {/* ================= AVAILABLE GAMES ================= */}
  //             <Text style={styles.sectionTitle}>Available Games</Text>

  //             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  //               <GameCard
  //                 number="1"
  //                 title="Player 123"
  //                 subtitle="FIVE"
  //                 min="500 FCFA"
  //               />
  //               <GameCard
  //                 number="2"
  //                 title="Card Master"
  //                 subtitle="TIA DIRECT"
  //                 min="5,000 FCFA"
  //               />
  //             </ScrollView>

  //             {/* ================= RECENT ACTIVITY ================= */}
  //             <View style={styles.recentHeader}>
  //               <Text style={styles.sectionTitle}>Recent Activity</Text>
  //               <TouchableOpacity>
  //                 <Text style={styles.viewAll}>View all</Text>
  //               </TouchableOpacity>
  //             </View>

  //             <ActivityRow
  //               title="FIVE (FAPFAP)"
  //               amount="+5,000 FCFA"
  //               status="Won"
  //               time="2h ago"
  //             />
  //             <ActivityRow
  //               title="TIA DIRECT"
  //               amount="-2,000 FCFA"
  //               status="Lost"
  //               time="2 days ago"
  //             />
  //             <ActivityRow
  //               title="TIA AGARAM"
  //               amount="+5,000 FCFA"
  //               status="Won"
  //               time="2h ago"
  //             />
  //           </>
          
  //       </ScrollView>
  //     </ImageBackground>
  //         </ScreenWrapper>

  //   );
  // }

  // /* ================= SMALL COMPONENTS ================= */

  // // const ActionButton = ({ icon, label }) => (
  // //   <TouchableOpacity style={styles.actionBtn}>
  // //     <Ionicons name={icon} size={16} color="#fff" />
  // //     <Text style={styles.actionText}>{label}</Text>
  // //   </TouchableOpacity>
  // // );

  // const FilterButton = ({ label }) => (
  //   <TouchableOpacity style={styles.filterBtn}>
  //     <Text style={styles.filterText}>{label}</Text>
  //     <Ionicons name="chevron-down" size={14} color="#aaa" />
  //   </TouchableOpacity>
  // );

  // const QuickCard = ({ title }) => (
  //   <View style={styles.quickCard}>
  //     <Text style={styles.quickText}>{title}</Text>
  //   </View>
  // );

  // // const GameCard = ({ number, title, subtitle, min }) => (
  // //   <View style={styles.gameCard}>
  // //     <Text style={styles.gameNumber}>{number}</Text>
  // //     <Text style={styles.gameName}>{title}</Text>
  // //     <Text style={styles.gameSub}>{subtitle}</Text>
  // //     <Text style={styles.gameMin}>Min: {min}</Text>
  // //   </View>
  // // );
  // const GameCard = ({ number, title, subtitle, min }) => {
  //   return (
  //     <View style={styles.card}>
  //       {/* Big number */}
  //       <Text style={styles.bigNumber}>{number}</Text>

  //       {/* Content */}
  //       <Text style={styles.title}>{title}</Text>
  //       <Text style={styles.sub}>{subtitle}</Text>
  //       <Text style={styles.min}>Min : {min} FCFA</Text>

  //       {/* Red curve glow */}
  //       <View style={styles.redCurve} />
  //     </View>
  //   );
  // };
  // const ActivityRow = ({ title, amount, status, time }) => (
  //   <View style={styles.activityRow}>
  //     <View>
  //       <Text style={styles.activityTitle}>{title}</Text>
  //       <Text
  //         style={[
  //           styles.activityAmount,
  //           status === 'Won' ? styles.win : styles.loss,
  //         ]}
  //       >
  //         {amount}
  //       </Text>
  //     </View>

  //     <View style={{ alignItems: 'flex-end' }}>
  //       <View
  //         style={{
  //           backgroundColor: status === 'Won' ? '#223b18' : '#471d16',
  //           borderRadius: 25,
  //           padding: 10,
  //           paddingLeft: 18,
  //           paddingRight: 18,
  //         }}
  //       >
  //         <Text
  //           style={[styles.status, status === 'Won' ? styles.win : styles.loss]}
  //         >
  //           {status}
  //         </Text>
  //       </View>

  //       <Text style={styles.time}>{time}</Text>
  //     </View>
  //   </View>
  // );
  // const ActionButton = ({ icon, label, primary }) => (
  //   <TouchableOpacity style={[styles.actionBtn, styles.actionPrimary]}>
  //     <Ionicons name={icon} size={16} color="#fff" />
  //     <Text style={styles.actionText}>{label}</Text>
  //   </TouchableOpacity>
  // );

  // /* ================= STYLES ================= */
  // const Dropdown = ({ data, onClose }) => (
  //   <View style={styles.dropdown}>
  //     {data.map(item => (
  //       <TouchableOpacity
  //         key={item}
  //         style={styles.dropdownItem}
  //         onPress={onClose}
  //       >
  //         <Text style={styles.dropdownText}>{item}</Text>
  //       </TouchableOpacity>
  //     ))}
  //   </View>
  // );
  // const styles = StyleSheet.create({
  //   container: {
  //     paddingBottom: 140,
  //   },

  //   /* ================= HEADER ================= */
  //   headerBg: {
  //     flex: 1,
  //     // height: 240,
  //     // width: '100%',
  //     // //paddingHorizontal: 20,
  //     // paddingTop: 50,
  //   },

  //   header: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     marginHorizontal: 10,
  //     justifyContent: 'space-between',
  //   },

  //   profileRow: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   },

  //   avatar: {
  //     width: 44,
  //     height: 44,
  //     borderRadius: 22,
  //     marginRight: 12,
  //     borderWidth: 1,
  //     borderColor: '#333',
  //   },

  //   hello: {
  //     color: '#fff',
  //     fontSize: 18,
  //     fontWeight: '600',
  //   },

  //   welcome: {
  //     color: '#fff',
  //     fontSize: 14,
  //     marginTop: 2,
  //   },

  //   bell: {
  //     //backgroundColor: '#1c1c1e',
  //     padding: 10,
  //     //borderRadius: 20,
  //   },

  //   /* ================= BALANCE CARD ================= */
  //   balanceCard: {
  //     backgroundColor: '#0f0f10',
  //     borderRadius: 22,
  //     padding: 15,
  //     marginHorizontal: 20,
  //     //marginTop: -110,
  //     marginBottom: 20,
  //   },

  //   balanceLabel: {
  //     color: '#fff',
  //     fontSize: 24,
  //     fontWeight: '700',
  //     fontFamily: Typography.fontFamily.bold,
  //   },

  //   balanceValue: {
  //     color: '#fff',
  //     fontSize: 24,
  //     fontWeight: '700',
  //     fontFamily: Typography.fontFamily.bold,
  //     //marginVertical: 10,
  //   },

  //   balanceActions: {
  //     flexDirection: 'row',
  //     marginTop: 20,
  //   },

  //   actionBtn: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     borderRadius: 30,
  //     paddingVertical: 10,
  //     paddingHorizontal: 40,
  //     marginRight: 12,
  //     borderWidth: 2,
  //     borderColor: '#2a2a2a',
  //     backgroundColor: '#1c1c1e',
  //   },

  //   actionPrimary: {
  //     //backgroundColor: '#E50914',
  //     borderColor: '#fff',
  //   },

  //   actionText: {
  //     color: '#fff',
  //     fontSize: 13,
  //     fontWeight: '600',
  //     marginLeft: 6,
  //   },

  //   /* ================= SEARCH & FILTER ================= */
  //   searchRow: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     marginHorizontal: 20,
  //     marginBottom: 20,
  //   },

  //   searchBox: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     backgroundColor: '#1c1c1e',
  //     borderRadius: 30,
  //     paddingHorizontal: 14,
  //     paddingVertical: 10,
  //     marginRight: 10,
  //   },

  //   searchInput: {
  //     color: '#fff',
  //     marginLeft: 6,
  //     flex: 1,
  //     fontSize: 13,
  //   },

  //   filterBtn: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     backgroundColor: '#1c1c1e',
  //     borderRadius: 30,
  //     paddingHorizontal: 14,
  //     paddingVertical: 10,
  //     marginLeft: 6,
  //   },

  //   filterText: {
  //     color: '#fff',
  //     fontSize: 12,
  //     marginRight: 4,
  //   },

  //   /* ================= SECTIONS ================= */
  //   sectionTitle: {
  //     color: '#fff',
  //     fontSize: 18,
  //     fontWeight: '600',
  //     marginHorizontal: 20,
  //     //marginVertical: 14,
  //   },

  //   /* ================= ACTIVE GUIO ================= */
  //   activeCard: {
  //     marginHorizontal: 20,
  //     borderRadius: 20,
  //     marginTop:10,
  //     overflow: 'hidden',
  //     backgroundColor: '#111',
  //   },

  //   activeImage: {
  //     height: 190,
  //     width: '100%',
  //   },

  //   activeOverlay: {
  //     position: 'absolute',
  //     bottom: 0,
  //     padding: 16,
  //     // width: '100%',
  //     // backgroundColor: 'rgba(0,0,0,0.45)',
  //   },

  //   waiting: {
  //     color: '#FFD400',
  //     fontSize: 12,
  //     marginBottom: 6,
  //   },

  //   gameTitle: {
  //     color: '#fff',
  //     fontSize: 18,
  //     fontWeight: '700',
  //   },

  //   gameInfo: {
  //     color: '#ccc',
  //     fontSize: 12,
  //     marginTop: 2,
  //   },

  //   rejoinBtn: {
  //     backgroundColor: '#fff',
  //     alignSelf: 'flex-start',
  //     paddingHorizontal: 22,
  //     paddingVertical: 8,
  //     borderRadius: 20,
  //     marginTop: 12,
  //   },

  //   rejoinText: {
  //     color: '#000',
  //     fontWeight: '600',
  //     fontSize: 13,
  //   },

  //   /* ================= QUICK ACTIONS ================= */
  //   quickRow: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     marginHorizontal: 20,
  //     marginVertical: 22,
  //   },

  //   quickCard: {
  //     width: '30%',
  //     height: 90,
  //     backgroundColor: '#1c1c1e',
  //     borderRadius: 18,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },

  //   quickText: {
  //     color: '#fff',
  //     fontSize: 14,
  //     fontWeight: '500',
  //     textAlign: 'auto',
  //     marginTop: 40,
  //   },

  //   /* ================= AVAILABLE GAMES ================= */
  //   gameCard: {
  //     width: 160,
  //     backgroundColor: '#0f0f10',
  //     borderRadius: 18,
  //     padding: 16,
  //     marginLeft: 20,
  //     marginBottom: 10,
  //   },

  //   gameNumber: {
  //     fontSize: 44,
  //     color: '#E50914',
  //     fontWeight: '800',
  //     lineHeight: 46,
  //   },

  //   gameName: {
  //     color: '#fff',
  //     fontWeight: '600',
  //     marginTop: 4,
  //   },

  //   gameSub: {
  //     color: '#aaa',
  //     fontSize: 12,
  //     marginTop: 2,
  //   },

  //   gameMin: {
  //     color: '#ccc',
  //     fontSize: 11,
  //     marginTop: 8,
  //   },

  //   /* ================= RECENT ACTIVITY ================= */
  //   recentHeader: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     marginHorizontal: 10,
  //     marginTop: 20,
  //     marginBottom: 10,
  //   },

  //   viewAll: {
  //     color: '#aaa',
  //     fontSize: 12,
  //   },

  //   activityRow: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     backgroundColor: '#1c1c1e',
  //     padding: 14,
  //     borderRadius: 16,
  //     marginHorizontal: 20,
  //     marginTop: 10,
  //   },

  //   activityTitle: {
  //     color: '#fff',
  //     fontWeight: '600',
  //     fontSize: 13,
  //   },

  //   activityAmount: {
  //     fontSize: 13,
  //     marginTop: 4,
  //   },

  //   win: {
  //     color: '#32d74b',
  //   },

  //   loss: {
  //     color: '#ff453a',
  //   },

  //   status: {
  //     fontSize: 12,
  //     fontWeight: '600',
  //   },

  //   time: {
  //     color: '#aaa',
  //     fontSize: 11,
  //     marginTop: 4,
  //   },
  //   searchwrapper: {
  //     marginHorizontal: 20,
  //     marginBottom: 20,
  //   },

  //   searchcontainer: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     //justifyContent: 'space-between',
  //     backgroundColor: '#2a2a2a',
  //     borderRadius: 30,
  //     height: 49,
  //     paddingHorizontal: 12,
  //   },

  //   searchBox: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   },

  //   input: {
  //     color: '#fff',
  //     fontSize: 13,
  //     marginLeft: 6,
  //     flex: 1,
  //   },

  //   divider: {
  //     width: 1,
  //     height: 22,
  //     backgroundColor: '#444',
  //     marginHorizontal: 6,
  //   },

  //   filterBtn: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     paddingHorizontal: 10,
  //   },

  //   filterText: {
  //     color: '#fff',
  //     fontSize: 13,
  //     marginRight: 4,
  //   },

  //   /* ================= DROPDOWN ================= */
  //   dropdown: {
  //     position: 'absolute',
  //     top: 52,
  //     right: 0,
  //     backgroundColor: '#1c1c1e',
  //     borderRadius: 14,
  //     width: 140,
  //     paddingVertical: 6,
  //     zIndex: 10,
  //     elevation: 5,
  //   },

  //   dropdownItem: {
  //     paddingVertical: 10,
  //     paddingHorizontal: 14,
  //   },

    // dropdownText: {
    //   color: '#fff',
    //   fontSize: 13,
    // },
  //   card: {
  //     width: 180,
  //     height: 200,
  //     borderRadius: 20,
  //     backgroundColor: '#0A0A0A',
  //     padding: 16,
  //     overflow: 'hidden',
  //     borderWidth: 1,
  //     marginHorizontal: 15,
  //     borderColor: 'rgba(255,255,255,0.08)',
  //   },

  //   bigNumber: {
  //     position: 'absolute',
  //     top: -10,
  //     right: 10,
  //     fontSize: 110,
  //     fontWeight: '900',
  //     color: '#E11D2E',
  //     opacity: 0.9,
  //   },

  //   title: {
  //     marginTop: 20,
  //     fontSize: 26,
  //     fontWeight: '700',
  //     color: '#FFFFFF',
  //   },

  //   sub: {
  //     marginTop: 10,
  //     fontSize: 16,
  //     color: '#CFCFCF',
  //   },

  //   min: {
  //     marginTop: 8,
  //     fontSize: 15,
  //     color: '#FFFFFF',
  //   },

  //   redCurve: {
  //     position: 'absolute',
  //     bottom: -60,
  //     right: -60,
  //     width: 200,
  //     height: 200,
  //     borderRadius: 100,
  //     backgroundColor: '#B1121A',
  //     opacity: 0.35,
  //   },
  // });

  import React, { useState } from 'react';
  import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    StatusBar,
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import ScreenWrapper from '../../components/ScreenWrapper';
  import GameSwiper from '../../components/Game';
  import { t } from 'i18next';
  import { Typography } from '../../theme/typography';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';

  const games = [
    { number: '1', title: 'Player 123', subtitle: 'FIVE', player:'2-3 players', min: '500', icon: require('../../../assets/images/game1.png') },
    { number: '2', title: 'Card Master', subtitle: 'TIA DIRECT', player:'2 players', min: '5,000', icon: require('../../../assets/images/game2.png') },
    { number: '3', title: 'Card Master', subtitle: 'TIA DIRECT', player:'2 players', min: '5,000', icon: require('../../../assets/images/game2.png') },
  ];
  export default function Home() {
    const [showBet, setShowBet] = useState(false);
    const [showCurrency, setShowCurrency] = useState(false);

    return (
      <>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        {/* ===== BACKGROUND ===== */}
        <ImageBackground
          source={require('../../../assets/images/home_bg.png')}
          style={styles.bg}
          resizeMode="cover"
        >
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>

            {/* ===== HEADER ===== */}
             <Header />
            {/* <View style={styles.header}>
              <View style={styles.profileRow}>
                <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
                <View>
                  <Text style={styles.hello}>Hello David 👋</Text>
                  <Text style={styles.welcome}>Welcome back</Text>
                </View>
              </View>

              <TouchableOpacity>
                 
                          <Ionicons name="notifications" size={22} color="#FFD200" />
                          <View style={styles.badgen} />
                        
              </TouchableOpacity>
            </View> */}

            {/* ===== WALLET CARD ===== */}
              <ImageBackground
      source={require('../../../assets/images/balanceCard.png')}
      style={styles.walletCard}
      imageStyle={styles.walletBg}
    >
      <Text style={styles.walletLabel}>Total Balance(FCFA)</Text>
      <Text style={styles.walletValue}>45,000</Text>

      <View style={styles.walletActions}>
        <ActionButton
          icon={require('../../../assets/images/deposit.png')}
          label="Deposit   "
        />
        <ActionButton
          icon={require('../../../assets/images/withdraw.png')}
          label="Withdrawal"
        />
      </View>
    </ImageBackground>

            {/* ===== SEARCH BAR ===== */}
        <>
         <LinearGradient
        colors={['#333333', '#564343']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.searchBar}
      >
        {/* Search */}
        <View style={{flexDirection:'row',alignItems:'center' }}>
        <Ionicons name="search" size={18} color="#BDBDBD" />
        <TextInput
          placeholder="Search for player"
          placeholderTextColor="#fff"
          style={styles.searchInput}
        />
        </View>

        {/* <View style={styles.divider} /> */}

        {/* Bet */}
 <View
                    style={{
                      flexDirection: 'row',
                      //backgroundColor: '#1c1c1e',
                       backgroundColor: '#343434',
                      height: 50,
                      borderRadius: 30,
                      width: '55%',
                      borderWidth: 0.2,
                      borderColor: '#fff',
                      marginLeft:-176,
                      alignItems: 'center',
                    }}
                  >
                    <TouchableOpacity
                      style={styles.filterBtn}
                      onPress={() => {
                        setShowBet(!showBet);
                        setShowCurrency(false);
                      }}
                    >
                      <Text style={styles.filterText}>Bet</Text>
                      <Ionicons style={{ marginLeft: 4 }} name="caret-down-outline" size={14} color="#fff" />
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.divider} />

                    {/* Currency */}
                    <TouchableOpacity
                      style={[styles.filterBtn,
                        {marginRight:62,marginLeft:-10}
                      ]}
                      onPress={() => {
                        setShowCurrency(!showCurrency);
                        setShowBet(false);
                      }}
                    >
                      <Text style={styles.filterText}>Currency</Text>
                      <Ionicons style={{ marginLeft: 4 }} name="caret-down-outline" size={14} color="#aaa" />
                    </TouchableOpacity>
                  </View>
       
        
      </LinearGradient>

      {showBet && <Dropdown data={['€5', '€10', '€20']} />}
      {showCurrency && <Dropdown data={['FCFA', 'EUR', 'USD']} />}
    </>

            {/* ===== ACTIVE GUIO ===== */}
            <Text style={[styles.sectionTitle,{marginHorizontal:12}]}>Active GUIO</Text>

           <View style={styles.activeCard}>
      <ImageBackground
        source={require('../../../assets/images/active_bg.png')}
        style={styles.activeImg}
        imageStyle={styles.activeImgRadius}
      >
        {/* Dark overlay */}
        <View style={styles.overlay} />

        <View style={styles.activeOverlay}>
          {/* Status badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Waiting to start</Text>
          </View>

          <Text style={styles.activeTitle}>TIA Direct</Text>
          <Text style={styles.activeInfo}>Bet: €10</Text>
          <Text style={styles.activeInfo}>Players: 3 / 4 joined</Text>

          <TouchableOpacity activeOpacity={0.85} style={styles.rejoinBtn}>
            <Text style={styles.rejoinText}>Rejoin Game</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>


            {/* ===== QUICK ACTIONS ===== */}
            <View style={styles.quickRow}>
              <QuickCard title="Create GUIO" icon={require('../../../assets/images/card_bg.png')} />
              <QuickCard title="Join GUIO" icon={require('../../../assets/images/card_bg2.png')} />
              <QuickCard title="Invite" icon={require('../../../assets/images/card_bg_3.png')}/>
            </View>

            {/* ===== AVAILABLE GAMES ===== */}
            <Text style={[styles.sectionTitle,{marginHorizontal:12}]}>Available Games</Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
  <GameSwiper data={games} />
          </View>

            {/* ===== RECENT ACTIVITY ===== */}
            <View style={styles.rowBetween}>
              <Text style={styles.sectionTitle}>Recent Activity</Text>
              <Text  underlayColor="#fff" style={styles.viewAll}>View all</Text>
            </View>

            <ActivityRow title="FIVE (FAPFAP)" amount="+5,000 FCFA" status="Won" time="2h ago" />
            <ActivityRow title="TIA DIRECT" amount="-2,000 FCFA" status="Lost" time="2 days ago" />
            <ActivityRow title="TIA AGARAM" amount="+5,000 FCFA" status="Won" time="2h ago" />

          </ScrollView>
        </ImageBackground>
      </>
    );
  }

  /* ================= COMPONENTS ================= */

 const ActionButton = ({ icon, label, onPress }) => (
  <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.actionBtn}>
    <Image source={icon} style={styles.actionIcon} />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

  const QuickCard = ({ title,icon,onPress }) => (
    // <View style={styles.quickCard}>
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.quickCardWrap}
    >
      <ImageBackground
        source={icon}
        resizeMode="cover"
        style={styles.quickCard}
        imageStyle={styles.quickCardImage}
      >
        {/* Dark gradient overlay */}
        <View style={styles.overlay} />

        {/* Title */}
        <Text style={styles.quickText}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
    // </View>
  );

  const GameCard = ({ number, title, subtitle, min,icon }) => (
  <View style={styles.gameCardWrapper}>
        <ImageBackground
          source={icon} // <-- your bg
          resizeMode="cover"
          style={styles.gameCard}
          imageStyle={styles.gameCardImage}
        >
          {/* Big number */}
          {/* <Text style={styles.bigNumber}>{number}</Text> */}

          {/* Content */}
          <Text style={styles.gameTitle}>{title}</Text>
          <Text style={styles.gameSub}>{subtitle}</Text>
          <Text style={styles.gameMin}>Min : {min} FCFA</Text>

          {/* Red glow */}
          {/* <View style={styles.redGlow} /> */}
        </ImageBackground>
      </View>
  );

  const ActivityRow = ({ title, amount, status, time }) => (
    <View style={styles.activityRow}>
      <View>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={[styles.amount, status === 'Won' ? styles.win : styles.loss]}>
          {amount}
        </Text>
      </View>

      <View style={{ alignItems: 'flex-end',alignContent:'center',justifyContent:'center',flexDirection:'column' }}>
        <View style={[styles.statusBadge, status === 'Won' ? styles.winBg : styles.lossBg]}>
          <Text style={[styles.statusText, status === 'Won' ? styles.win : styles.loss]}>
            {status}
          </Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );

  const Dropdown = ({ data }) => (
     <View style={styles.dropdown}>
      {data.map(item => (
        <TouchableOpacity
          key={item}
          style={styles.dropdownItem}
          ///onPress={onClose}
        >
          <Text style={styles.dropdownText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
    // <View style={styles.dropdown}>
    //   {data.map(item => (
    //     <Text key={item} style={styles.dropdownItem}>{item}</Text>
    //   ))}
    // </View>
  );

  /* ================= STYLES ================= */

  const styles = StyleSheet.create({
    bg: { flex: 1 },
    container: { paddingBottom: 140 },
    scrollContent: { paddingHorizontal: 20 },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 50,
    },

    
    profileRow: { flexDirection: 'row', alignItems: 'center' },
    avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },

    hello: { color: '#fff', fontSize: 18, fontWeight: '600' },
    welcome: { color: '#fff', fontSize: 14 },
 badgen: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF2D2D',
  },
  //   walletCard: {
  //   marginHorizontal: 16,
  //   //marginTop: 24,
  //   marginTop: -190,
  //   borderRadius: 22,
  //   padding: 20,
  //   marginBottom: 20,
  // },
walletCard: {
  marginHorizontal: 16,
  marginTop: -100,       // ✅ correct overlap
  borderRadius: 22,
  padding: 20,
  marginBottom: 20,
  elevation: 6,         // Android shadow
  shadowColor: '#000',  // iOS shadow
  shadowOpacity: 0.25,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 6 },
},
  walletBg: {
    borderRadius: 22,
  },

  walletLabel: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    // marginBottom: 6,
  },

  walletValue: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
  },

  walletActions: {
    flexDirection: 'row',
    marginTop: 20,
  },

  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 34,
    marginRight: 14,
  },

  actionIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  actionText: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontSize: 15,
    fontWeight: '600',
  },

   searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 52,
    marginHorizontal: 12,
    borderRadius: 32,
    paddingHorizontal: 16,
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

    sectionTitle: { color: '#fff', fontSize: 20, fontWeight: '700',fontFamily:Typography.fontFamily.semibold,marginBottom:15 },

     activeCard: {
    marginHorizontal: 10,
    borderRadius: 22,
    overflow: 'hidden',
  },

  activeImg: {
    height: 210,
    width: '100%',
    justifyContent: 'flex-end',
  },

  activeImgRadius: {
    borderRadius: 22,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  activeOverlay: {
    padding: 16,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#2E2600',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 10,
  },

  badgeText: {
    color: '#FFD400',
    fontSize: 14,
    fontWeight: '600',
  },

  activeTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },

  activeInfo: {
    color: '#D1D1D1',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },

  rejoinBtn: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 12,
    borderRadius: 22,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  rejoinText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },

    quickRow: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10,marginTop:15},

    // quickCard: {
    //   width: '30%',
    //   height: 90,
    //   //backgroundColor: '#1C1C1E',
    //   //borderRadius: 18,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },

    // quickText: { color: '#fff' },
    quickCardWrap: {
    width: 118,
    height: 118,
    borderRadius: 16,
    marginBottom: 15,
    overflow: 'hidden',
  },

  quickCard: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12,
  },

  quickCardImage: {
    borderRadius: 16,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  quickText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    zIndex: 2,
  },

    gameCard: {
      width: 180,
      height: 210,
      backgroundColor: '#0A0A0A',
      borderRadius: 20,
      padding: 16,
      marginLeft: 10,
      overflow: 'hidden',
    },

    bigNumber: {
      position: 'absolute',
      top: -10,
      right: 10,
      fontSize: 110,
      fontWeight: '900',
      color: '#E11D2E',
    },

    gameTitle: { color: '#fff', fontSize: 22, fontWeight: '700', marginTop: 40 },
    gameSub: { color: '#ccc', marginTop: 6 },
    gameMin: { color: '#fff', marginTop: 8 },

    

    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 12,
      alignItems: 'center',
    },

    viewAll: { color: '#FFF',fontSize: 12, textDecorationLine: 'underline',fontWeight:'500' },

    activityRow: {
      backgroundColor: '#1C1C1E',
      marginHorizontal: 10,
      marginTop: 10,
      padding: 9,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    activityTitle: { fontSize: 14, color: '#fff', fontWeight: '600' ,marginLeft:2},
    amount: { marginTop: 4, marginLeft: 2 },

    win: { color: '#32D74B' },
    loss: { color: '#FF453A' },

    statusBadge: {
      borderRadius: 20,
      paddingHorizontal: 24,
      paddingVertical: 3,
    },

    winBg: { backgroundColor: '#223B18' },
    lossBg: { backgroundColor: '#471D16' },

    statusText: { fontSize: 12, fontWeight: '600' },
    time: { color: '#aaa', fontSize: 11, marginTop: 4 ,marginRight:12},

      dropdown: {
      position: 'absolute',
      top: 360,
      right: 20,
      backgroundColor: '#1c1c1e',
      borderRadius: 14,
      width: 140,
      paddingVertical: 6,
      zIndex: 10,
      elevation: 5,
    },

    dropdownItem: {
      paddingVertical: 10,
      paddingHorizontal: 14,
    },

    dropdownText: {
      color: '#fff',
      fontSize: 13,
    },
  });
