import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Typography } from "../../theme/typography";
const SCREEN_WIDTH = Dimensions.get("window").width;
const GAP = 12;

// 2 column cards
const STAT_CARD_WIDTH = (SCREEN_WIDTH - (GAP * 3)) / 2;

// 3 column cards
const KORA_CARD_WIDTH = (SCREEN_WIDTH - (GAP * 4)) / 3;
const StatCard = ({ icon, value, label }) => {
  return (
    <View style={styles.statCardWrapper}>
      <ImageBackground
        source={require("../../../assets/images/cardbg_game.png")}
        style={styles.statCard}
        imageStyle={{ borderRadius: 18 }}
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
              <Ionicons name="chevron-back" size={24} color="#fff" />
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
              <Text style={styles.earningIcon}>
                <Image source={require('../../../assets/images/earns.png')}></Image>
              </Text>
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
  imageStyle={{ borderRadius: 22 }}
>
  <View style={styles.favoriteLeftBlock}>
    <View style={styles.favoriteIconWrap}>
      <Image
        source={require('../../../assets/images/Five.png')}
        style={{ width: 26, height: 26 }}
        resizeMode="contain"
      />
    </View>
  </View>

  <View>
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
      imageStyle={{ borderRadius: 16 }}
    >
      <Text style={styles.koraValue}>{item.value}</Text>
      <Text style={styles.koraLabel}>{item.label}</Text>
    </ImageBackground>
  ))}
</View>

        

          {/* Footer */}
          <View style={styles.footerInfo}>
            <Text style={styles.footerText}>
              All statistics are updated in real-time based on your gameplay
              activity
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
    paddingHorizontal: 16,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  backBtn: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 10,
    borderRadius: 12,
  },

  headerText: {
    color: "#fff",
    fontSize: 22,
    marginLeft: 14,
    fontFamily: Typography.fontFamily.semibold,
  },

  /* STAT GRID */
 grid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
},

statCardWrapper: {
  width: "48%",           // 🔥 FIXED (not flexBasis)
  marginBottom: 14,
},

statCard: {
  height: 96,
  padding: 14,
  justifyContent: "space-between",
},


statCardInner: {
  flex: 1,
  borderRadius: 18,
  padding: 14,
  gap:10,
  justifyContent: "space-between",
},

  statCardImage: {
    borderRadius: 18,
  },

  statRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  statIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },

  statValue: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },

  statLabel: {
    color: "#e0e0e0",
    fontSize: 14,
  },

  /* EARNINGS */
  earningCard: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
  },

  earningHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "600",
  },

  earningRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  earningLabel: {
    color: "#aaa",
    fontSize: 14,
  },

  earningValue: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginVertical: 12,
  },

  /* FAVORITE GAME */
  favoriteCard: {
    flexDirection: "row",
    alignItems: "center",
    height: 90,               // 🔥 FIXED LIKE FIGMA
    borderRadius: 22,
    paddingRight: 16,
    marginTop: 20,
    overflow: "hidden",
  },

  favoriteLeftBlock: {
    width: 90,
    height: "100%",
    backgroundColor: "#FF7A2F",
    justifyContent: "center",
    alignItems: "center",
  },

  favoriteIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  favoriteTitle: {
    color: "#fff",
    fontSize: 18,
    marginLeft:10,
    fontWeight: "700",
  },

  favoriteSub: {
    color: "#bbb",
    marginTop: 4,
    fontWeight:'600',
    marginLeft:10,
  },

  /* KORA */
  koraTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 28,
    marginBottom: 14,
  },

 koraRow: {
  flexDirection: "row",
  marginHorizontal: -6,
},

koraCard: {
  flex: 1,               // 🔥 KEY
  marginHorizontal: 6,
  height: 88,
  borderRadius: 16,
  justifyContent: "center",
  alignItems: "center",
},

  koraValue: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  koraLabel: {
    color: "#ddd",
    fontSize: 13,
    marginTop: 6,
    textAlign: "center",
  },

  /* FOOTER */
  footerInfo: {
    backgroundColor: "rgba(60,60,60,0.6)",
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    marginBottom: 40,
  },

  footerText: {
    color: "#ddd",
    textAlign: "center",
    fontSize: 13,
    lineHeight: 18,
  },
});



