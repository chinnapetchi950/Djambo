
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Home from '../screens/BottomTab/Home';
import Game from '../screens/BottomTab/Game';
import Wallet from '../screens/BottomTab/Wallet';
import Profile from '../screens/BottomTab/Profile';
import { Typography } from '../theme/typography';

const Tab = createBottomTabNavigator();

const tabs = [
  { name: 'Home', icon: require('../../assets/images/homeicon.png'), iconFill: require('../../assets/images/homefill.png'), label: 'Home', component: Home },
  { name: 'Game', icon: require('../../assets/images/game.png'), iconFill: require('../../assets/images/gamefill.png'), label: 'Games', component: Game },
  { name: 'Wallet', icon: require('../../assets/images/wallet.png'), iconFill: require('../../assets/images/walletfill.png'), label: 'Wallet', component: Wallet },
  { name: 'Profile', icon: require('../../assets/images/profileicon.png'), iconFill: require('../../assets/images/profilefill.png'), label: 'Profile', component: Profile },
];

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const tab = tabs.find(t => t.name === route.name);

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            activeOpacity={0.85}
            style={focused ? styles.activePill : styles.inactiveTab}
          >
            <Image
              source={focused ? tab.iconFill : tab.icon}
              style={focused ? styles.activeIcon : styles.inactiveIcon}
              resizeMode="contain"
            />

            {focused && (
              <Text style={styles.activeText}>{tab.label}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <MyTabBar {...props} />}
    >
      {tabs.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hp('10%'),               // 🔥 responsive height
    backgroundColor: '#110503',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',  // 🔥 auto spacing
    paddingHorizontal: wp('4%'),
    elevation: 10,
  },

  activePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2d0909',
    height: hp('6%'),
    paddingHorizontal: wp('4%'),
    borderRadius: hp('6%') / 2,
  },

  inactiveTab: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  inactiveIcon: {
    width: wp('7%'),
    height: wp('7%'),
    tintColor: '#fff',
  },

  activeIcon: {
    width: wp('7%'),
    height: wp('7%'),
    tintColor: '#ff3b3b',
  },

  activeText: {
    marginLeft: wp('2%'),
    color: '#ff3b3b',
    fontSize: wp('4.0%'),
    fontFamily: Typography.fontFamily.medium,
  },
});


