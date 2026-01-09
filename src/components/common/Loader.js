import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { Colors } from '../../theme/colors';

export default function Loader({ visible = false }) {
  if (!visible) return null;
  return (
    <Modal transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#111',
  },
});
