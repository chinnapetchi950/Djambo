
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BlurView } from "@react-native-community/blur";

const SearchFilterBar = ({
  searchValue,
  onSearchChange,
  onBetPress,
  onCurrencyPress,
  onBetLayout,
  placeholder = "Search for player",
}) => {
  return (
    <GlassCard style={styles.container}>
      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons
        style={{marginLeft:wp('3%')}}
          name="search"
          size={wp("4.5%")}
          color="rgba(255,255,255,0.7)"
        />
        <TextInput
          value={searchValue}
          onChangeText={onSearchChange}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.5)"
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
    </GlassCard>
  );
};

export default SearchFilterBar;
const GlassCard = ({ children, style }) => {
  if (Platform.OS === "ios") {
    return (
      <BlurView
        blurType="dark"
        blurAmount={15}
        style={[styles.glass, style]}
      >
        {children}
      </BlurView>
    );
  }
  return (
    <View style={[styles.glass, styles.androidGlass, style]}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: hp("6.3%"),
    //paddingHorizontal: wp("4%"),
    justifyContent: 'space-between',
    borderRadius: wp("8%"),
    marginBottom: hp("2%"),
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  searchInput: {
    marginLeft: wp("2%"),
    color: "#fff",
    fontSize: wp("3.8%"),
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
    marginLeft: wp('8%'),
    alignSelf:'flex-end',
    paddingHorizontal: wp('2.5%'),
     borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'#FFF'
  },

  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
  },

  filterText: {
    color: "#fff",
    fontSize: wp("3.4%"),
    marginRight: wp("1%"),
  },
icon: {
    marginLeft: wp('1%'),
  },
  divider: {
    width: wp("0.25%"),
    height: hp("2.5%"),
    backgroundColor: "#fff",
    opacity: 0.3,
  },

  /* ---- Glass ---- */
  glass: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  androidGlass: {
    backgroundColor: "rgba(255,255,255,0.08)",
  },
});
