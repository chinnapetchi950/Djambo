import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenWrapper from '../../components/ScreenWrapper';

const PAGE_SIZE = 6;
const STATUS_CONFIG = [
  { label: 'Waiting', color: '#FFD400' },
  { label: 'Almost Full', color: '#FFA500' },
  { label: 'Full', color: '#FF3B3B' },
];


const Available = ({ navigation,route }) => {
    const headerTitle = route?.params?.headerTitle
    const join=route?.params?.join
const MOCK_DATA = Array.from({ length:join?3: 30 }, (_, i) => {
  const statusIndex = i % STATUS_CONFIG.length;

  return {
    id: i + 1,
    status: STATUS_CONFIG[statusIndex].label,
    statusColor: STATUS_CONFIG[statusIndex].color,
    name: `Player ${i + 1}`,
    game:  route?.params?.headerTitle ?`${headerTitle}`:join&&i==0?'FIVE (FAPFAP)':join&&i==1?'TIA DIRECT':'TIA AGARAM',
    bet: '€10',
    players:
      STATUS_CONFIG[statusIndex].label === 'Full' ? '4/4' : '3/4',
    identity: i % 2 === 0 ? 'Anonymous' : 'Open',
  };
});
  const [page, setPage] = useState(1);
  const [data, setData] = useState(MOCK_DATA.slice(0, PAGE_SIZE));
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMore = () => {
    if (loadingMore) return;

    setLoadingMore(true);
    const nextPage = page + 1;
    const nextData = MOCK_DATA.slice(0, nextPage * PAGE_SIZE);

    if (nextData.length > data.length) {
      setTimeout(() => {
        setData(nextData);
        setPage(nextPage);
        setLoadingMore(false);
      }, 400);
    } else {
      setLoadingMore(false);
    }
  };

  const renderItem = ({ item }) => (
    <GuiCard {...item} />
  );

  return (
    <ScreenWrapper>
      <ImageBackground
        source={require('../../../assets/images/profile_bg.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListHeaderComponent={
             <View style={styles.header}>
                        <TouchableOpacity style={styles.inputCard} onPress={() => navigation.goBack()}>
                          <Ionicons
                            name="chevron-back"
                            size={wp('6%')}
                            color="#fff"
                          />
                        </TouchableOpacity>
<Text style={styles.headerTitle}>
  {headerTitle ? `Available ${headerTitle}` : 'Available GUIOs'}
</Text>
                      </View>
            // <View style={styles.header}>
            //   <TouchableOpacity style={styles.inputCard} onPress={() => navigation.goBack()}>
            //     <Ionicons name="chevron-back" size={wp('7%')} color="#fff" />
            //   </TouchableOpacity>

            //   <Text style={styles.title}>Available GUIOs</Text>

            //   {/* Empty spacer to keep title centered */}
            //   <View style={{ width: wp('7%') }} />
            // </View>
          }
          ListFooterComponent={
            loadingMore ? (
              <Text style={styles.loadingText}>Loading more...</Text>
            ) : null
          }
        />
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default Available;
const GuiCard = ({ status, statusColor, name, game, bet, players, identity }) => (
  <View style={styles.guiCard}>
    <Text style={[styles.status, { color: statusColor }]}>• {status}</Text>

    <View style={styles.guiRow}>
      <View style={{ flex: 1 }}>
        <Text style={styles.guiName}>
          {name} <Text style={styles.guiGame}>({game})</Text>
        </Text>
        <Text style={styles.guiMeta}>Bet: {bet} | Players: {players}</Text>
        <Text style={styles.guiMeta}>Identity: {identity}</Text>
      </View>

      <TouchableOpacity style={styles.joinBtn}>
        <Text style={styles.joinText}>Join</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

  container: {
    //flex:1,
    paddingHorizontal: wp('4%'),
    paddingBottom: hp('6%'),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('3.5%'),
  },

  headerTitle: {
    fontSize: wp('5.8%'),
    color: '#fff',
    fontWeight: '700',
    marginLeft: wp('3%'),
  },

//   title: {
//     fontSize: wp('5.8%'),
//     fontWeight: '700',
//     color: '#fff',
//   },

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
    marginTop: hp('0.6%'),
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

  loadingText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: wp('3.5%'),
    marginVertical: hp('2%'),
  },
   inputCard: {
    height: hp('5.8%'),
    backgroundColor: '#221C1B',
    borderRadius: wp('3.5%'),
    paddingHorizontal: wp('3>4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
