import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ActionButtons = ({
  leftLabel,
  onLeftPress,
  rightLabel,
  onRightPress,
}) => {
  return (
    <View style={styles.actionRow}>
      {/* Left Button (Outlined) */}
      <ImageBackground
        source={require('../../assets/images/secondarybtnbg.png')}
        style={styles.actionBtn}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.fullBtn}
          onPress={onLeftPress}
          activeOpacity={0.8}
        >
          <Text style={styles.outlinedText}>{leftLabel}</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Right Button (Filled) */}
      <TouchableOpacity
        style={[styles.actionBtn, styles.filledBtn]}
        onPress={onRightPress}
        activeOpacity={0.8}
      >
        <Text style={styles.filledText}>{rightLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
const styles = StyleSheet.create({
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp('3%'),
    gap: wp('2%'),
  },
  actionBtn: {
    width: wp('45%'),
    height: hp('6.2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledBtn: {
    backgroundColor: '#FA2630',
    borderRadius: wp('8%'),
  },
  outlinedText: {
    fontSize: wp('4%'),
    color: '#fff',
  },
  filledText: {
    fontSize: wp('4%'),
    color: '#fff',
    fontWeight: '600',
  },
});
