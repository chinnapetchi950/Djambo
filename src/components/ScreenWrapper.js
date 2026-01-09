import React from 'react';
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../theme/colors';

export default function ScreenWrapper({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]} edges={['top', 'bottom', 'left', 'right']}>
      <StatusBar
        translucent={Platform.OS === 'android'}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
