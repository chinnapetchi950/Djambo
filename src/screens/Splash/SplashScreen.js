import React, { useEffect } from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '../../theme/typography';
export default function SplashScreen({ navigation }) {
 
  useEffect(() => {
if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
      StatusBar.setHidden(false);
    }
    StatusBar.setBarStyle('dark-content');
    // Navigate after delay (optional)
    setTimeout(() => navigation.replace('Auth'), 3000);

    return () => {
      // Restore status bar when leaving splash
      //StatusBar.setHidden(false, 'fade');
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safe}>
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
      <Image style={{width:'62%',height:46}} source={require('../../../assets/images/splash_logo.png')}/>
      {/* <Text style={styles.title}>DJAMBO</Text> */}
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
    fontFamily: Typography.fontFamily.bold,
  },
  safe: { flex: 1 },
});

