import React, { useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }

    StatusBar.setBarStyle('light-content');

    const timer = setTimeout(() => {
      navigation.replace('Auth');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar translucent backgroundColor="transparent" />

      <ImageBackground
        source={require('../../../assets/images/splash_bg.png')}
        style={styles.container}
        resizeMode="cover"
      >
        <Image
          source={require('../../../assets/images/splash_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp('65%'),   // responsive width
    height: hp('8%'),   // responsive height
  },
});
