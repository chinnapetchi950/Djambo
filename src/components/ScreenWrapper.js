import React,{useEffect} from 'react';
import {  StyleSheet,StatusBar } from 'react-native';
import { Colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenWrapper({ children }) {
  useEffect(() => {
      // Hide status bar
  if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setTranslucent(true);
        StatusBar.setHidden(false);
      }
      StatusBar.setBarStyle('dark-content');
      // Navigate after delay (optional)
      // setTimeout(() => navigation.replace('Auth'), 2000);
  
      return () => {
        // Restore status bar when leaving splash
        StatusBar.setHidden(false, 'fade');
      };
    }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#000"
        barStyle="light-content"
        hidden={false}
      />
      {children}
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.background,
  },
});
