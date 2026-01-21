import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/headerTop.png')}
      style={styles.header}
      imageStyle={styles.headerImage}
    >
      <View style={styles.row}>
        {/* LEFT */}
        <View style={styles.left}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.hello}>Hello David 👋</Text>
            <Text style={styles.sub}>Welcome Back</Text>
          </View>
        </View>

        {/* RIGHT */}
        <TouchableOpacity style={styles.bell} activeOpacity={0.8}>
          <Ionicons
            name="notifications"
            size={wp('6%')}
            color="#FFD200"
          />
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: hp('28%'),              // responsive header height
    paddingTop: hp('6%'),           // handles status bar space
    paddingHorizontal: wp('4%'),
  },

  headerImage: {
    borderBottomLeftRadius: wp('8%'),
    borderBottomRightRadius: wp('8%'),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
    marginRight: wp('3%'),
  },

  hello: {
    color: '#fff',
    fontSize: wp('4.6%'),
    fontWeight: '700',
  },

  sub: {
    color: '#F2CFCF',
    fontSize: wp('3.4%'),
    marginTop: hp('0.3%'),
  },

  bell: {
    position: 'relative',
    padding: wp('1%'),
  },

  dot: {
    position: 'absolute',
    top: wp('0.8%'),
    right: wp('0.8%'),
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    backgroundColor: '#FF3B30',
  },
});
