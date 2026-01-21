import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SearchFilterBar = ({
  searchValue,
  onSearchChange,
  onBetPress,
  onCurrencyPress,
    onBetLayout,

  placeholder = 'Search for player',
}) => {
  return (
    <LinearGradient
        colors={['#333333', '#564343']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons
        style={{marginLeft:wp('3%')}}
          name="search"
          size={wp('4.5%')}
          color="#BDBDBD"
        />
        <TextInput
          value={searchValue}
          onChangeText={onSearchChange}
           placeholder={placeholder}           
          placeholderTextColor="#BDBDBD" 
          style={styles.searchInput}
        />
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={onBetPress}
          onLayout={onBetLayout}
          activeOpacity={0.8}
        >
          <Text style={styles.filterText}>Bet</Text>
          <Ionicons
            name="caret-down-outline"
            size={wp('3.5%')}
            color="#fff"
            style={styles.icon}
          />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.filterBtn}
          onPress={onCurrencyPress}
          activeOpacity={0.8}
        >
          <Text style={styles.filterText}>Currency</Text>
          <Ionicons
            name="caret-down-outline"
            size={wp('3.5%')}
            color="#fff"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SearchFilterBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    //paddingHorizontal: wp('4%'),
    height: hp('6.3%'),
    borderRadius: wp('10%'),
    justifyContent: 'space-between',
        backgroundColor:'transparent'

  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  searchInput: {
    marginLeft: wp('2%'),
    color: '#fff',
    fontSize: wp('3.8%'),
    flex: 1,
  },

  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#343434',
    height: hp('6.2%'),
    borderRadius: wp('6%'),
    //borderWidth: wp('0.07%'),
    // borderColor: '#fff',

    borderRightColor:'#fff',
    borderLeftColor:'#fff',
    marginLeft: wp('9%'),
    paddingHorizontal: wp('2%'),
     borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'#FFF'
  },

  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
   

  },

  filterText: {
    color: '#fff',
    fontSize: wp('3.5%'),
  },

  icon: {
    marginLeft: wp('1%'),
  },

  divider: {
    width: wp('0.3%'),
    height: hp('3%'),
    backgroundColor: '#fff',
    opacity: 0.4,
  },
});
