import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Typography } from "../../theme/typography";
import LogoutModal from "../../components/LogoutModal";
import { CommonActions } from '@react-navigation/native';
import ProfileImagePickerModal from "../../components/ProfileImagePickerModal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MenuItem = ({
  icon,
  image,
  title,
  onPress,
  IconSet = Ionicons,
  danger,
}) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        {/* ICON OR IMAGE */}
        {image ? (
          <Image
            source={image}
            style={[
              styles.menuImage,
              danger && { tintColor: "#ff3b3b" },
            ]}
            resizeMode="contain"
          />
        ) : (
          <IconSet
            name={icon}
            size={22}
            color={danger ? "#ff3b3b" : "#ffffff"}
          />
        )}

        <Text style={[styles.menuText, danger && { color: "#ff3b3b" }]}>
          {title}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#fff" />
    </TouchableOpacity>
  );
};

const Profile = ({navigation}) => {
  const [showLogout, setShowLogout] = useState(false);
   const [modalVisible, setModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
const handleLogout=()=>{
  setShowLogout(false),
 navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'Auth',
          state: {
            routes: [{ name: 'Login' }],
          },
        },
      ],
    })
  );
}

  return (
    <ScreenWrapper>

    <ImageBackground
                source={require('../../../assets/images/profile_bg.png')}
                style={styles.container}
              >
   
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* PROFILE HEADER */}
        <View style={styles.header}>
          <View style={styles.avatarWrapper}>
  <Image
    source={
      profileImage
        ? profileImage.uri
          ? { uri: profileImage.uri }
          : profileImage // avatar image require(...)
        : { uri: 'https://i.pravatar.cc/300' }
    }
    style={styles.avatar}
  />

  <TouchableOpacity
    style={styles.editIcon}
    activeOpacity={0.8}
    onPress={() => setModalVisible(true)}
  >
    <Image
      source={require('../../../assets/images/profile_edit.png')}
      style={styles.editImage}
    />
  </TouchableOpacity>

  {/* Profile Image Picker Modal */}
 
</View>


          <Text style={styles.username}>Game Master_x</Text>

          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Image source={require('../../../assets/images/profile_cameroom.png')}></Image>
              <Text style={styles.badgeText}>Cameroon</Text>
            </View>
<View style={styles.divider} />
            <View style={styles.badge}>
                            <Image source={require('../../../assets/images/fcfa.png')}></Image>

              <Text style={styles.badgeText}> FCFA</Text>
            </View>
            <View style={styles.divider} />

            <View style={[styles.badge, styles.verified]}>
                            <Image tintColor={'#00FF40'} source={require('../../../assets/images/verify.png')}></Image>
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>
        </View>

        {/* MENU */}
        <View style={styles.menuContainer}>
          <MenuItem  image={require('../../../assets/images/edit.png')} title="Edit Profile" onPress={()=>navigation.navigate('EditProfile')}/>
          <MenuItem
          onPress={()=>navigation.navigate('SecuritySettings')}
           image={require('../../../assets/images/verify.png')}
            title="Security Settings"
          />
          
          <MenuItem  onPress={()=>navigation.navigate('GameStatistics')} image={require('../../../assets/images/profile_game.png')} title="Game Statistics" />
          <MenuItem onPress={()=>navigation.navigate('Notification')}  icon="notifications" title="Notification" />
          <MenuItem
           image={require('../../../assets/images/support.png')}
            title="Support"
            IconSet={Feather}
            onPress={()=>navigation.navigate('Support')}
          />
          <MenuItem
           image={require('../../../assets/images/legal.png')}
            title="Legal"
            IconSet={MaterialIcons}
             onPress={()=>navigation.navigate('Legal')}
          />
          <MenuItem
          onPress={()=>setShowLogout(true)}
           image={require('../../../assets/images/logout.png')}
            title="Logout"
            danger
            IconSet={MaterialIcons}
          />
        </View>

        <Text style={styles.version}>Version 1.2.3</Text>
      </ScrollView>
      <ProfileImagePickerModal
  visible={modalVisible}
  onClose={() => setModalVisible(false)}
  onSelect={(image) => {
    setProfileImage(image);
   // uploadProfileImage(image); // 🔥 API call here
  }}
/>

<LogoutModal
  visible={showLogout}
  onCancel={() => setShowLogout(false)}
  onConfirm={handleLogout}
title={
    <>
      Are you sure that you want to{'\n'}
      Logout?
    </>
  }/>
    </ImageBackground>
        </ScreenWrapper>

  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* ===== HEADER ===== */
  header: {
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('4%'),
  },

  avatarWrapper: {
    position: 'relative',
  },

  avatar: {
    width: wp('28%'),
    height: wp('28%'),
    borderRadius: wp('14%'),
    borderWidth: wp('0.6%'),
  },

  editIcon: {
    position: 'absolute',
    bottom: hp('0.6%'),
    right: hp('0.1%'),
    padding: wp('1.5%'),
    borderRadius: wp('6%'),
  },

  username: {
    marginTop: hp('1%'),
    fontSize: wp('6%'),
    fontFamily: Typography.fontFamily.semibold,
    color: '#ff1e1e',
  },

  /* ===== BADGES ===== */
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.2%'),
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('1.2%'),
  },

  badgeText: {
    fontSize: wp('3.2%'),
    fontFamily: Typography.fontFamily.medium,
    color: '#fff',
  },

  verifiedText: {
    fontSize: wp('3%'),
    color: '#fff',
  },

  divider: {
    width: wp('0.4%'),
    height: hp('2%'),
    backgroundColor: '#fff',
    marginHorizontal: wp('2%'),
    opacity: 0.5,
  },

  /* ===== MENU ===== */
  menuContainer: {
    marginTop: hp('2%'),
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    borderBottomWidth: 0.5,
    borderBottomColor: '#222',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('4%'),
  },

  menuImage: {
    width: wp('5.5%'),
    height: wp('5.5%'),
  },

  menuText: {
    fontSize: wp('4%'),
    fontFamily: Typography.fontFamily.semibold,
    color: '#fff',
  },

  /* ===== VERSION ===== */
  version: {
    textAlign: 'center',
    marginTop: hp('4%'),
    marginBottom: hp('3%'),
    color: '#ff3b3b',
    fontSize: wp('3%'),
    fontFamily: Typography.fontFamily.regular,
  },
});


