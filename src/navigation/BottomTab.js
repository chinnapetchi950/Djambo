
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

// Custom Tab Bar
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const focused = state.index === index;
        const tab = tabs.find(t => t.name === route.name);

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={focused ? styles.activePill : styles.inactiveTab}
            activeOpacity={0.8}
          >
            <Image
              source={focused ? tab.iconFill : tab.icon}
              style={focused ? styles.activeIcon : styles.inactiveIcon}
            />
            {focused && <Text style={styles.activeText}>{tab.label}</Text>}
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
      tabBar={props => <MyTabBar {...props} />} // ✅ Use custom tab bar
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
    //left: 16,
    //right: 16,
    bottom: 0,
    height: 102,
    width:'100%',
    backgroundColor: '#110503',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 12,
    //borderRadius: 32,
    elevation: 10,
  },

  activePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2d0909',
    paddingHorizontal: 18,
    height: 52,
    borderRadius: 52/2,
    marginLeft:48
  },

  inactiveTab: {
    marginLeft: 33, // reduced spacing between inactive icons
    alignItems: 'center',
    justifyContent: 'center',
  },

  inactiveIcon: {
    width: 26,
    height: 26,
  },

  activeIcon: {
    width: 26,
    height: 26,
    tintColor: '#ff3b3b',
  },

  activeText: {
    marginLeft: 10,
    color: '#ff3b3b',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Typography.fontFamily.medium,
  },
});


