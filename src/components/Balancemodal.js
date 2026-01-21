import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BalanceStatusModal = ({ visible, onClose }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>

          {/* ❌ Close */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={wp('5%')} color="#fff" />
          </TouchableOpacity>
<View style={{marginTop:hp('4%')}}>

</View>
          {/* 🟢 Safe */}
          <View style={styles.row}>
            {/* <View style={[styles.dot, { backgroundColor: '#19C37D' }]} /> */}
            <Text style={styles.text}>🟢 <Text style={styles.bold}>Safe Balance</Text> – You can play normally.
            </Text>
          </View>

          {/* 🟡 Low */}
          <View style={styles.row}>
            {/* <View style={[styles.dot, { backgroundColor: '#FFC107' }]} /> */}
            <Text style={styles.text}>
             🟡  <Text style={styles.bold}>Low Balance</Text> – Refill suggested to avoid interruption.
            </Text>
          </View>

          {/* 🔴 Critical */}
          <View style={styles.row}>
            {/* <View style={[styles.dot, { backgroundColor: '#FF3B3B' }]} /> */}
            <Text style={styles.text}>
             🔴  <Text style={styles.bold}>Critical Balance</Text> – Gameplay may be restricted.
              Please add funds.
            </Text>
          </View>

          {/* ⚠️ Note */}
          <View style={styles.noteBox}>
            <Text style={styles.noteText}>
              <Text style={styles.bold}>Note:</Text> Balance alerts are visible only to you.
              {'\n'}
              Automatic reminders and temporary suspension may apply if not refilled.
            </Text>
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default BalanceStatusModal;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: wp('90%'),
    backgroundColor: '#fff',
    borderRadius: wp('4%'),
    padding: wp('4%'),
  },

  closeBtn: {
    position: 'absolute',
    top: wp('3%'),
    right: wp('4%'),
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('3.5%'),
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp('1.8%'),
    
  },

  dot: {
    width: wp('3%'),
    height: wp('3%'),
    borderRadius: wp('1.5%'),
    marginTop: hp('0.6%'),
    marginRight: wp('3%'),
  },

  text: {
    color: '#000',
    fontSize: wp('3.8%'),
    lineHeight: hp('2.6%'),
    flex: 1,
  },

  bold: {
    fontWeight: '700',
  },

  noteBox: {
    backgroundColor: '#FFD6D6',
    padding: wp('4%'),
    borderRadius: wp('3%'),
    marginTop: hp('1%'),
  },

  noteText: {
    color: '#000',
    fontSize: wp('3.8%'),
    lineHeight: hp('2.5%'),
  },
});
