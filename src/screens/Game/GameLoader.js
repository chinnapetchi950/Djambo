import React, { useEffect,useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Image
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../../components/ScreenWrapper';
import FastImage from 'react-native-fast-image';

const GameLoader = ({route}) => {
  const navigation = useNavigation();
  const gameType=route?.params?.gametype
  console.log("gameType",gameType);
  
 // const

  useEffect(() => {
    const timer = setTimeout(() => {
      // if(gameType==='five')
      navigation.replace('WaitingRoomScreen',{gametype:gameType});
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenWrapper>
      <ImageBackground
        source={require('../../../assets/images/loader_bg.png')}
        style={styles.container}
      >
        {/* 🔝 Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Setting Up Your Game...</Text>
        </View>

        {/* 🎯 Center GIF */}
        <View style={styles.center}>
          <FastImage
            source={require('../../../assets/images/gameloader.png')}
            style={styles.gif}
            resizeMode={FastImage.resizeMode.contain}
          >
            <Image style={{alignSelf:'center',marginTop:hp('13.2%')}} source={require('../../../assets/images/Loading.png')}>

            </Image>
            <ActivityIndicator style={{alignSelf:'center',marginBottom:hp('58.2%')}} size={'large'} color={'#FFF'}/>


          </FastImage>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default GameLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingTop: hp('10%'),
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: wp('6%'),
    fontWeight: '600',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gif: {
    width: wp('70%'),
    height: wp('70%'),
    marginBottom:hp('10%')
  },
});
