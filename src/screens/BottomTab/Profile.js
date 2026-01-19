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
              source={{ uri: "https://i.pravatar.cc/300" }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIcon}>
              <Image  source={require('../../../assets/images/profile_edit.png')}></Image>
              {/* <Ionicons name="camera" size={16} color="#fff" /> */}
            </TouchableOpacity>
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
      
<LogoutModal
  visible={showLogout}
  onCancel={() => setShowLogout(false)}
  onConfirm={handleLogout}
/>
    </ImageBackground>
        </ScreenWrapper>

  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
menuImage: {
  width: 22,
  height: 22,
},
  header: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },

  avatarWrapper: {
    position: "relative",
  },

  avatar: {
    width: 115,
    height: 115,
    borderRadius: 115/2,
    borderWidth: 3,
    //borderColor: "#ff1e1e",
  },

  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    //backgroundColor: "#ff1e1e",
    padding: 6,
    borderRadius: 20,
  },

  username: {
    marginTop: 8,
    fontSize: 24,
fontFamily:Typography.fontFamily.semibold,
    fontWeight: "700",
    color: "#ff1e1e",
  },

  badgeRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 8,
    alignItems:'center'
  },

  badge: {
    //paddingHorizontal: 10,
    //paddingVertical: 5,
    flexDirection:'row',
    gap:5,
   // borderRadius: 20,
    //backgroundColor: "#1a1a1a",
  },

  badgeText: {
    fontSize: 13,
    fontFamily:Typography.fontFamily.medium,
    color: "#fff",
  },

  verified: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  verifiedText: {
    fontSize: 12,
    color: "#fff",
  },

  menuContainer: {
    //marginTop: 10,
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#222",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  menuText: {
    fontSize: 16,
    fontFamily:Typography.fontFamily.semibold,
    color: "#fff",
  },

  version: {
    textAlign: "center",
    marginTop: 30,
    color: "#ff3b3b",
    fontSize: 12,
    fontFamily:Typography.fontFamily.regular
  },
  divider: {
  width: 2,
  height: 15,          // must be visible
  backgroundColor: '#fff',
  marginHorizontal: 2,
  opacity: 0.5,
},
});

