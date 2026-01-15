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

const Header = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/headerTop.png')} // red curved image
      style={styles.header}
      imageStyle={styles.headerImage}
    >
      <View style={styles.row}>
        {/* Left */}
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

        {/* Right */}
        <TouchableOpacity style={styles.bell}>
          <Ionicons name="notifications" size={22} color="#FFD200" />
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Header;
const styles = StyleSheet.create({
 header: {
  height: 240,          // reduce from 268
  paddingTop: 58,       // status bar + spacing
  paddingHorizontal: 16,
},

headerImage: {
  borderBottomLeftRadius: 32,
  borderBottomRightRadius: 32,
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
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },

  hello: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  sub: {
    color: '#F2CFCF',
    fontSize: 13,
    marginTop: 2,
  },

  bell: {
    position: 'relative',
    tintColor:'#fff'
  },

  dot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
});
