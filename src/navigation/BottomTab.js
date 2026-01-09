// import React from 'react';
// import { View, StyleSheet, Platform } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import Home from '../screens/BottomTab/Home';
// import Game from '../screens/BottomTab/Game';
// import Wallet from '../screens/BottomTab/Wallet';
// import Profile from '../screens/BottomTab/Profile';

// const Tab = createBottomTabNavigator();
// const TabIcon = ({ focused, icon, label }) => {
//   return (
//     <View style={styles.tabSlot}>
//       <View style={[styles.tabItem, focused && styles.activeTab]}>
//         <Ionicons
//           name={icon}
//           size={22}
//           color={focused ? '#ff3b3b' : '#bbb'}
//         />
//         {focused && <Text style={styles.tabLabel}>{label}</Text>}
//       </View>
//     </View>
//   );
// };
// export default function BottomTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarShowLabel: false,

//         tabBarStyle: styles.tabBar,
//         tabBarItemStyle: styles.tabItem,

//         tabBarIcon: ({ focused }) => {
//           let icon = 'home';

//           if (route.name === 'Game') icon = 'game-controller';
//           if (route.name === 'Wallet') icon = 'wallet';
//           if (route.name === 'Profile') icon = 'person';

//           return (
//             <View style={[styles.iconContainer, focused && styles.activePill]}>
              
//               <Ionicons
//                 name={icon}
//                 size={22}
//                 color={focused ? '#ff3b3b' : '#aaa'}
//               />
//             </View>
//           );
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Game" component={Game} />
//       <Tab.Screen name="Wallet" component={Wallet} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     position: 'absolute',
//     left: 16,
//     right: 16,
//     bottom: Platform.OS === 'ios' ? 24 : 16,
//     height: 68,
//     borderRadius: 40,
//     backgroundColor: '#120707',
//     borderTopWidth: 0,
//     elevation: 20,
//   },

//   tabItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   iconContainer: {
//     width: 48,
//     height: 48,
//     marginTop: 20,
//     borderRadius: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   activePill: {
//     backgroundColor: 'rgba(255,59,59,0.18)',
//   },
// });
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/BottomTab/Home';
import Game from '../screens/BottomTab/Game';
import Wallet from '../screens/BottomTab/Wallet';
import Profile from '../screens/BottomTab/Profile';

const Tab = createBottomTabNavigator();

const tabs = [
  { name: 'Home', icon: 'home', label: 'Home', component: Home },
  { name: 'Game', icon: 'game-controller', label: 'Games', component: Game },
  { name: 'Wallet', icon: 'wallet', label: 'Wallet', component: Wallet },
  { name: 'Profile', icon: 'person', label: 'Profile', component: Profile },
];

function TabButton({ item, onPress }) {
  const isFocused = useIsFocused(); // 🔥 REAL ACTIVE STATE

  return (
    <TouchableOpacity onPress={onPress} style={[ isFocused ? styles.activeTab : styles.tabButton]}>
      {isFocused ? (
        <View style={styles.activePill}>
          <Ionicons name={item.icon} size={20} color="#ff3b3b" />
          <Text style={styles.activeText}>{item.label}</Text>
        </View>
      ) : (
        <Ionicons name={item.icon} size={22} color="#A9A4B0" />
      )}
    </TouchableOpacity>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {tabs.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}


/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: Platform.OS === 'ios' ? 24 : 16,
    height: 68,
    borderRadius: 40,
    backgroundColor: '#120707',
    flexDirection: 'row',
    justifyContent: 'space-around', // 👈 this reduces big gaps
    alignItems: 'center',
    borderTopWidth: 0,
    elevation: 20,
  },
  activeTab: {
    // backgroundColor: 'rgba(255,59,59,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    //marginHorizontal: 30,
    //minWidth: 70,
   // backgroundColor:'red',
  
  },

  activePill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10, // smaller pill width
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,59,59,0.18)',
  },

  activeText: {
    marginLeft: 4, // smaller gap between icon and text
    color: '#ff3b3b',
    fontSize: 12,
    fontWeight: '600',
  },
});

