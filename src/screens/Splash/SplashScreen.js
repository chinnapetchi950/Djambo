import React, { useEffect } from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SplashScreen({ navigation }) {
  //   useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     StatusBar.setBackgroundColor('transparent');
  //     StatusBar.setTranslucent(true);
  //     StatusBar.setHidden(false);
  //   }
  //   StatusBar.setBarStyle('dark-content');
  // }, []);
  useEffect(() => {
    // Hide status bar
if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
      StatusBar.setHidden(false);
    }
    StatusBar.setBarStyle('dark-content');
    // Navigate after delay (optional)
    setTimeout(() => navigation.replace('Auth'), 2000);

    return () => {
      // Restore status bar when leaving splash
      //StatusBar.setHidden(false, 'fade');
    };
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        translucent
        backgroundColor="#000"
        barStyle="light-content"
        hidden={false}
      /> 
 <ImageBackground
      source={require('../../../assets/images/splash_bg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>DJAMBO</Text>
    </ImageBackground>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '700',
  },
});

// import React, { useEffect } from 'react';
// import {
//   ImageBackground,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   View,
// } from 'react-native';

// export default function SplashScreen() {
//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       StatusBar.setBackgroundColor('transparent');
//       StatusBar.setTranslucent(true);
//       StatusBar.setHidden(false);
//     }
//     StatusBar.setBarStyle('dark-content');
//   }, []);

//   return (
//     <View style={styles.root}>
//       {/* <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle="dark-content"
//         hidden={false}
//       /> */}

//       <ImageBackground
//         source={require('../../../assets/images/splash_bg.png')}
//         style={styles.container}
//         resizeMode="cover"
//       >
//         <Text style={styles.title}>DJAMBO</Text>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#fff', // IMPORTANT: prevents black screen
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//     // IMPORTANT: push content below status bar height
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   title: {
//     color: '#000',
//     fontSize: 36,
//     fontWeight: '700',
//   },
// });
