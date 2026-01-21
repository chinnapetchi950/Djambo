import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Typography } from "../../theme/typography";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StatCard = ({ icon, value, label }) => {
  return (
    <View style={styles.statCardWrapper}>
      <ImageBackground
        source={require("../../../assets/images/cardbg_game.png")}
        style={styles.statCard}
        imageStyle={{ borderRadius: wp("4%") }}
      >
        <View style={styles.statRow}>
          <Image source={icon} style={styles.statIcon} />
          <Text style={styles.statValue}>{value}</Text>
        </View>
        <Text style={styles.statLabel}>{label}</Text>
      </ImageBackground>
    </View>
  );
};

export default function GameStatistics({ navigation }) {
  return (
    <ScreenWrapper>
      <ImageBackground
        source={require("../../../assets/images/profile_bg.png")}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={wp("6%")} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Game Statistics</Text>
          </View>

          {/* Stats Grid */}
          <View style={styles.grid}>
            <StatCard icon={require('../../../assets/images/total_games.png')} value="567" label="Total Games" />
            <StatCard icon={require('../../../assets/images/wins.png')} value="312" label="Total Wins" />
            <StatCard icon={require('../../../assets/images/loss.png')} value="567" label="Losses" />
            <StatCard icon={require('../../../assets/images/winrate.png')} value="76%" label="Win Rate" />
          </View> 

          {/* Earnings */}
          <View style={styles.earningCard}>
            <View style={styles.earningHeader}>
              <Image source={require('../../../assets/images/earns.png')} style={{width: wp("7%"), height: wp("7%")}} />
              <Text style={styles.sectionTitle}>Earnings</Text>
            </View>

            <View style={styles.earningRow}>
              <Text style={styles.earningLabel}>Total Won</Text>
              <Text style={styles.earningValue}>2,450,000 FCFA</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.earningRow}>
              <Text style={styles.earningLabel}>Highest Single Win</Text>
              <Text style={styles.earningValue}>185,000 FCFA</Text>
            </View>
          </View>

          {/* Favorite Game */}
          <ImageBackground
            source={require('../../../assets/images/favgame_bg.png')}
            style={styles.favoriteCard}
            imageStyle={{ borderRadius: wp("5%") }}
          >
            <View style={styles.favoriteLeftBlock}>
              <View style={styles.favoriteIconWrap}>
                <Image
                  source={require('../../../assets/images/Five.png')}
                  style={{ width: wp("9%"), height: wp("9%") }}
                  resizeMode="contain"
                />
              </View>
            </View>

            <View style={{ marginLeft: wp("3%") }}>
              <Text style={styles.favoriteTitle}>FIVE (FAPFAP)</Text>
              <Text style={styles.favoriteSub}>Favorite Game</Text>
            </View>
          </ImageBackground>

          {/* KORA Stats */}
          <Text style={styles.koraTitle}>KORA Statistics</Text>
          <View style={styles.koraRow}>
            {[
              { value: "12", label: "Total KORA" },
              { value: "3", label: "Double KORA" },
              { value: "75%", label: "KORA Win Rate" },
            ].map((item, index) => (
              <ImageBackground
                key={index}
                source={require('../../../assets/images/kora_bg.png')}
                style={styles.koraCard}
                imageStyle={{ borderRadius: wp("3.5%") }}
              >
                <Text style={styles.koraValue}>{item.value}</Text>
                <Text style={styles.koraLabel}>{item.label}</Text>
              </ImageBackground>
            ))}
          </View>

          {/* Footer */}
          <View style={styles.footerInfo}>
            <Text style={styles.footerText}>
              All statistics are updated in real-time based on your gameplay activity
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp("4%"),
    paddingBottom: hp("3%"),
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("3%"),
    marginTop:hp('2%')
  },
  backBtn: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: wp("3%"),
    borderRadius: wp("3%"),
  },
  headerText: {
    color: "#fff",
    fontSize: wp("5%"),
    marginLeft: wp("3%"),
    fontFamily: Typography.fontFamily.semibold,
  },

  /* STAT GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statCardWrapper: {
    width: "48%",
    marginBottom: hp("2%"),
  },
  statCard: {
    height: hp("12%"),
    padding: wp("5.4%"),
    justifyContent: "space-between",
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statIcon: {
    width: wp("6%"),
    height: wp("6%"),
    marginRight: wp("2%"),
  },
  statValue: {
    color: "#fff",
    fontSize: wp("5.5%"),
    fontWeight: "700",
  },
  statLabel: {
    color: "#e0e0e0",
    fontSize: wp("3.5%"),
    textAlign:'center',
    marginRight:wp('6%')
  },

  /* EARNINGS */
  earningCard: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    borderRadius: wp("4%"),
    padding: wp("4%"),
    marginTop: hp("2%"),
  },
  earningHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("1.5%"),
  },
  sectionTitle: {
    color: "#fff",
    fontSize: wp("4.5%"),
    marginLeft: wp("2%"),
    fontWeight: "600",
  },
  earningRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp("1%"),
  },
  earningLabel: {
    color: "#aaa",
    fontSize: wp("3.5%"),
  },
  earningValue: {
    color: "#fff",
    fontSize: wp("4%"),
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginVertical: hp("1.5%"),
  },

  /* FAVORITE GAME */
  favoriteCard: {
    flexDirection: "row",
    alignItems: "center",
    height: hp("12%"),
    borderRadius: wp("5%"),
    paddingRight: wp("4%"),
    marginTop: hp("2%"),
    overflow: "hidden",
  },
  favoriteLeftBlock: {
    width: wp("14%"),
    height: "100%",
    backgroundColor: "#FF7A2F",
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteIconWrap: {
    width: wp("12%"),
    height: wp("12%"),
    borderRadius: wp("3%"),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteTitle: {
    color: "#fff",
    fontSize: wp("4.2%"),
    fontWeight: "700",
  },
  favoriteSub: {
    color: "#bbb",
    fontSize: wp("3.5%"),
    marginTop: hp("0.5%"),
  },

  /* KORA */
  koraTitle: {
    color: "#fff",
    fontSize: wp("5%"),
    fontWeight: "700",
    marginTop: hp("3%"),
    marginBottom: hp("1.5%"),
  },
  koraRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  koraCard: {
    flex: 1,
    height: hp("11%"),
    marginHorizontal: wp("1%"),
    borderRadius: wp("3%"),
    justifyContent: "center",
    alignItems: "center",
  },
  koraValue: {
    color: "#fff",
    fontSize: wp("4.5%"),
    fontWeight: "700",
  },
  koraLabel: {
    color: "#ddd",
    fontSize: wp("3.5%"),
    marginTop: hp("0.5%"),
    textAlign: "center",
  },

  /* FOOTER */
  footerInfo: {
    backgroundColor: "rgba(60,60,60,0.6)",
    borderRadius: wp("4%"),
    padding: wp("3%"),
    marginTop: hp("3%"),
    marginBottom: hp("5%"),
  },
  footerText: {
    color: "#ddd",
    textAlign: "center",
    fontSize: wp("3.5%"),
    lineHeight: hp("2.5%"),
  },
});
