

  import React, { useState,useEffect,useRef } from 'react';
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
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import ScreenWrapper from '../../components/ScreenWrapper';
  import GameSwiper from '../../components/Game';
  import { t } from 'i18next';
  import { Typography } from '../../theme/typography';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import ActionButtons from '../../components/Rowbuttons';
import SearchFilterBar from '../../components/SearchFilter';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

  const games = [
    { number: '1', title: 'Player 123', subtitle: 'FIVE', player:'2-3 players', min: '500', icon: require('../../../assets/images/game1.png') },
    { number: '2', title: 'Card Master', subtitle: 'TIA DIRECT', player:'2 players', min: '5,000', icon: require('../../../assets/images/game2.png') },
    { number: '3', title: 'Card Master', subtitle: 'TIA AGARAM', player:'2 players', min: '5,000', icon: require('../../../assets/images/game2.png') },
  ];
  export default function Home({navigation}) {
    const [showBet, setShowBet] = useState(false);
    const [showCurrency, setShowCurrency] = useState(false);
          const [search,setSearch]=useState('')
    
    //PIn
  const [showPinModal, setShowPinModal] = useState(true);
  const [pinStep, setPinStep] = useState('create'); // create | confirm | success
  const [pinValue, setPinValue] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const modalPinInputRef = useRef(null);
  const handleModalPinChange = (text) => {
      if (!/^\d*$/.test(text)) return;
  //modalPinInputRef.current?.focus()
      if (pinStep === 'create') {
        setPinValue(text);
        if (text.length === 4){
setPinStep('confirm');
        } else{
setPinStep('create');
        }
      } else if (pinStep === 'confirm') {
        setConfirmPin(text);
        if (text.length === 4 && text === pinValue) {
          setPinStep('success');
        }
      }
    };
  
    // Focus modal PIN input when modal opens
//    useEffect(() => {
//   if (showPinModal) {
//     const timer = setTimeout(() => {
//       modalPinInputRef.current?.focus();
//     }, 300);

//     return () => clearTimeout(timer);
//   }
// }, [showPinModal]);
const openPinKeyboard = () => {
  if (!modalPinInputRef.current) return;

  modalPinInputRef.current.blur(); // 👈 reset focus

  setTimeout(() => {
    modalPinInputRef.current.focus(); // 👈 reopen keyboard
  }, 50);
};

    return (
      <>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        {/* ===== BACKGROUND ===== */}
        <ImageBackground
          source={require('../../../assets/images/home_bg.png')}
          style={styles.bg}
          resizeMode="cover"
        >
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}
  keyboardShouldPersistTaps="handled">

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

         <View style={{marginHorizontal:'2%',marginBottom:'4%'}}>  {/* ===== SEARCH BAR ===== */}
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
</View> 
<View style={styles.dropdownWrapper}>
  {/* <TouchableOpacity style={styles.selectBtn}>
    <Text style={{ color: '#fff' }}>Bet</Text>
  </TouchableOpacity> */}

{showBet && <Dropdown  onclose={()=>{setShowBet(false)}} data={['€5', '€10', '€20']} />}
{showCurrency && <Dropdown onclose={()=>{setShowCurrency(false)}} data={['FCFA', 'EUR', 'USD']} />}
</View>

            {/* ===== ACTIVE GUIO ===== */}
            <Text style={[styles.sectionTitle,{marginHorizontal:wp('3%')}]}>Active GUIO</Text>

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
<View style={{marginBottom:hp('1%'),marginHorizontal:wp('1%')}}>
 <Text style={styles.activeTitle}>TIA Direct</Text>
          <Text style={styles.activeInfo}>Bet: €10</Text>
          <Text style={styles.activeInfo}>Players: 3 / 4 joined</Text>
</View>
         

          <TouchableOpacity onPress={()=>navigation.navigate('GameLoader')} activeOpacity={0.85} style={styles.rejoinBtn}>
            <Text style={styles.rejoinText}>Rejoin Game</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>


            {/* ===== QUICK ACTIONS ===== */}
            <View style={styles.quickRow}>
              <QuickCard onPress={()=>navigation.navigate('CreateGUIOScreen')} title="Create GUIO" icon={require('../../../assets/images/card_bg.png')} />
              <QuickCard onPress={()=>navigation.navigate('Available')}title="Join GUIO" icon={require('../../../assets/images/card_bg2.png')} />
              <QuickCard title="Invite" icon={require('../../../assets/images/card_bg_3.png')}/>
            </View>

            {/* ===== AVAILABLE GAMES ===== */}
            <Text style={[styles.sectionTitle,{marginHorizontal:wp('3%'),marginTop:hp('2%')}]}>Available Games</Text>
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
              <Modal
        visible={showPinModal}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setShowPinModal(false)}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Pressable  onPress={() => setShowPinModal(false)} style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              {pinStep === 'success' ? (
                <>
                  {/* <View style={styles.successBadge}> */}
  <Image source={require('../../../assets/images/successmark.png')} style={styles.badgeImage} />                    
                  {/* </View> */}

                  <Text style={styles.successTitle}>
                    Your Login PIN has been{'\n'}Created Successfully.
                  </Text>

                  <Text style={styles.successDesc}>
                    Continue to the app and make the most out of your journey
                    with us.
                  </Text>

                  {/* <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() => setShowPinModal(false)}
                  >
                    <Text style={styles.continueText}>Continue</Text>
                  </TouchableOpacity> */}
                </>
              ) : (
                <>
                  <Text style={styles.modalTitle}>
                    {pinStep === 'create' ? 'Create a Login PIN' : 'Re-Enter PIN'}
                  </Text>

                  <Text style={styles.modalDesc}>
                    Your PIN is a short, secure code that allows faster login. You can use this PIN instead of your password whenever you sign in.
                  </Text>

                  <View style={styles.modalPinRow}>
                    {[0, 1, 2, 3].map((index) => (
                       <TouchableOpacity
      key={index}
      activeOpacity={0.8}
      style={styles.pinBoxModal}
      onPress={openPinKeyboard}
    >
      <Text style={styles.pinDigit}>
        {(pinStep === 'create' ? pinValue : confirmPin)[index] || ''}
      </Text>
    </TouchableOpacity>
                    ))}
                  </View>

                 <TextInput
  ref={modalPinInputRef}
  keyboardType="number-pad"
  maxLength={4}
 // autoFocus
  showSoftInputOnFocus
  style={styles.hiddenInput}
  value={pinStep === 'create' ? pinValue : confirmPin}
  onChangeText={handleModalPinChange}
/>
<View style={styles.modalBtnRow}>
<ActionButtons
  leftLabel="Skip for now"
  onLeftPress={() => setShowPinModal(false)}
  rightLabel="Continue"
  onRightPress={() => {pinStep === 'create' ?setPinStep('confirm'): setPinStep('success')}}
/>
</View>
                  {/* <View style={styles.modalBtnRow}>
                    <TouchableOpacity
                      style={styles.skipBtn}
                      onPress={() => setShowPinModal(false)}
                    >
                      <Text style={styles.skipText}>Skip for now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.continueBtn}>
                      <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>
                  </View> */}
                </>
              )}
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>
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

  /* ================= STYLES ================= */

const styles = StyleSheet.create({
  /* ===== GLOBAL ===== */
  bg: { flex: 1 },

  container: {
    paddingBottom: hp('18%'),
  },

  /* ===== HEADER ===== */
  badgeImage: {
    width: wp('20%'),
    height: wp('20%'),
    marginBottom: hp('2%'),
    resizeMode: 'contain',
  },

  avatar: {
    width: wp('11%'),
    height: wp('11%'),
    borderRadius: wp('5.5%'),
    marginRight: wp('3%'),
  },

  hello: {
    color: '#fff',
    fontSize: wp('4.6%'),
    fontWeight: '600',
  },

  welcome: {
    color: '#fff',
    fontSize: wp('3.6%'),
  },

  badgen: {
    position: 'absolute',
    right: -wp('0.6%'),
    top: -wp('0.6%'),
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    backgroundColor: '#FF2D2D',
  },

  /* ===== WALLET ===== */
  walletCard: {
    marginHorizontal: wp('2%'),
    marginTop: hp('-12%'),
    borderRadius: wp('6%'),
    padding: wp('5%'),
    marginBottom: hp('3%'),
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },

  walletBg: { borderRadius: wp('6%') },

  walletLabel: {
    color: '#fff',
    fontSize: wp('4.8%'),
    fontWeight: '600',
  },

  walletValue: {
    color: '#fff',
    fontSize: wp('8.5%'),
    fontWeight: '800',
  },

  walletActions: {
    flexDirection: 'row',
    marginTop: hp('2.5%'),
  },

  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
    borderRadius: wp('8%'),
    backgroundColor:'#2b2929',
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('6%'),
    marginRight: wp('3%'),
  },

  actionIcon: {
    width: wp('6.5%'),
    height: wp('6.5%'),
  },

  actionText: {
    color: '#fff',
    marginLeft: wp('2%'),
    fontSize: wp('3.8%'),
    fontWeight: '600',
  },

  /* ===== SECTION ===== */
  sectionTitle: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: '700',
    fontFamily: Typography.fontFamily.semibold,
    marginBottom: hp('2%'),
  },

  /* ===== ACTIVE GAME ===== */
  activeCard: {
    marginHorizontal: wp('2%'),
    borderRadius: wp('6%'),
    overflow: 'hidden',
  },

  activeImg: {
    height: hp('26%'),
    width: '100%',
    justifyContent: 'flex-end',
  },

  activeImgRadius: { borderRadius: wp('4%') },

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  activeOverlay: { padding: wp('4%') },

  badge: {
    backgroundColor: '#2E2600',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.9%'),
    borderRadius: wp('5%'),
    marginBottom: hp('1.5%'),
    alignSelf: 'flex-start',
  },

  badgeText: {
    color: '#FFD400',
    fontSize: wp('3.4%'),
    fontWeight: '600',
  },

  activeTitle: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: '700',
    
  },

  activeInfo: {
    color: '#D1D1D1',
    fontSize: wp('3.6%'),
    marginTop:hp('0.5%')
  },

  rejoinBtn: {
    backgroundColor: '#fff',
    marginTop: hp('1%'),
    marginBottom:hp('1%'),
    borderRadius: wp('6%'),
    width:wp('37%'),
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('1.1%'),
  },

  rejoinText: {
    color: '#000',
    fontSize: wp('3.6%'),
    alignSelf:'center',
    fontWeight: '600',
  },

  /* ===== QUICK ACTIONS ===== */
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('3%'),
    marginTop: hp('2%'),
  },

  quickCardWrap: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('4%'),
    overflow: 'hidden',
  },

  quickCard: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: wp('3%'),
  },

  quickCardImage: { borderRadius: wp('4%') },

  quickText: {
    color: '#fff',
    fontSize: wp('3.5%'),
    fontWeight: '600',
    textAlign:'center'
  },

  /* ===== GAME CARD ===== */
  gameCardWrapper: {
    marginRight: wp('3%'),
  },

  gameCard: {
    width: wp('44%'),
    height: hp('26%'),
    borderRadius: wp('5%'),
    padding: wp('4%'),
    overflow: 'hidden',
  },

  gameCardImage: { borderRadius: wp('5%') },

  gameTitle: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: '700',
    marginTop: hp('4%'),
  },

  gameSub: {
    color: '#ccc',
    fontSize: wp('3.5%'),
  },

  gameMin: {
    color: '#fff',
    fontSize: wp('3.4%'),
    marginTop: hp('1%'),
  },

  /* ===== ACTIVITY ===== */
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('3%'),
    alignItems: 'center',
  },

  viewAll: {
    color: '#fff',
    fontSize: wp('4%'),
    textDecorationLine: 'underline',
  },

  activityRow: {
    backgroundColor: '#1C1C1E',
    marginHorizontal: wp('3%'),
    marginTop: hp('1.5%'),
    padding: wp('3.5%'),
    borderRadius: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  activityTitle: {
    fontSize: wp('3.6%'),
    color: '#fff',
    fontWeight: '600',
  },

  amount: { marginTop: hp('0.5%') },

  win: { color: '#32D74B' },
  loss: { color: '#FF453A' },

  statusBadge: {
    borderRadius: wp('6%'),
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('0.4%'),
  },

  winBg: { backgroundColor: '#223B18' },
  lossBg: { backgroundColor: '#471D16' },

  statusText: {
    fontSize: wp('3%'),
    fontWeight: '600',
  },

  time: {
    color: '#fff',
    fontSize: wp('2.8%'),
    marginTop: hp('0.5%'),
    alignSelf:'center'
  },

  /* ===== DROPDOWN ===== */
 dropdownWrapper: {
  position: 'absolute', // ✅ correct
  right: wp('2%'),
  top: hp('40%'),       // adjust based on SearchFilterBar position
  zIndex: 999,
  elevation: 20,
},

  dropdown: {
    width: wp('48%'),
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

  /* ===== MODAL / PIN ===== */
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  modalCard: {
    width: '100%',
    backgroundColor: '#060605',
    paddingVertical: hp('4%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    borderTopLeftRadius: wp('4%'),
    borderTopRightRadius: wp('4%'),
  },

  modalTitle: {
    color: '#fff',
    fontSize: wp('6%'),
    fontWeight: '700',
    marginBottom: hp('1%'),
    textAlign: 'center',
  },

  modalDesc: {
    color: '#979797',
    fontSize: wp('3.6%'),
    textAlign: 'center',
    lineHeight: hp('2.6%'),
    marginBottom: hp('3%'),
  },

  modalPinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: hp('1%'),
  },

  pinBoxModal: {
    width: wp('14%'),
    height: wp('14%'),
    marginTop:hp('1%'),
    borderRadius: wp('4%'),
    borderWidth: 1,
    borderColor: '#6b6b6b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pinDigit: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '600',
  },

  modalBtnRow: { width: '100%', marginTop: hp('2%') },

  continueBtn: {
    height: hp('6.5%'),
    borderRadius: wp('8%'),
    backgroundColor: '#ff3b3b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: '600',
  },

  successTitle: {
    color: '#fff',
    fontSize: wp('6%'),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: hp('1.5%'),
  },

  successDesc: {
    color: '#9c9c9c',
    fontSize: wp('3.8%'),
    textAlign: 'center',
    marginBottom: hp('4%'),
  },

  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
});

