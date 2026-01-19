import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Modal,
  Alert,
  Platform
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppButton from '../../components/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  request,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const avatars = [
  require('../../../assets/images/Cartoon1.png'),
  require('../../../assets/images/Cartoon2.png'),
  require('../../../assets/images/Cartoon3.png'),
  require('../../../assets/images/Cartoon4.png'),
  require('../../../assets/images/Cartoon5.png'),
  require('../../../assets/images/Cartoon6.png'),
  require('../../../assets/images/Cartoon7.png'),
  require('../../../assets/images/Cartoon8.png'),
  require('../../../assets/images/Cartoon9.png'),
  require('../../../assets/images/Cartoon10.png'),
  require('../../../assets/images/Cartoon11.png'),
  require('../../../assets/images/Cartoon12.png'),
  require('../../../assets/images/Cartoon13.png'),
  require('../../../assets/images/Cartoon14.png'),
  require('../../../assets/images/Cartoon15.png'),
    require('../../../assets/images/Cartoon16.png'),

];

export default function createProfile({ navigation }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
const [profileImage, setProfileImage] = useState(null);
const [pickerVisible, setPickerVisible] = useState(false);
const requestCameraPermission = async () => {
  if (Platform.OS !== 'android') return true;

  const result = await request(PERMISSIONS.ANDROID.CAMERA);
  return result === RESULTS.GRANTED;
};

const requestGalleryPermission = async () => {
  if (Platform.OS !== 'android') return true;

  const permission =
    Platform.Version >= 33
      ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

  const result = await request(permission);
  return result === RESULTS.GRANTED;
};

const pickFromGallery = async () => {
  setPickerVisible(false);

  const granted = await requestGalleryPermission();
  if (!granted) {
    Alert.alert('Permission Required', 'Gallery permission is needed.');
    return;
  }

  const res = await launchImageLibrary({
    mediaType: 'photo',
    quality: 0.8,
  });

  if (!res.didCancel && res.assets?.length) {
    setProfileImage(res.assets[0].uri);
    setSelectedAvatar(null);
  }
};

const pickFromCamera = async () => {
  setPickerVisible(false);

  const granted = await requestCameraPermission();
  if (!granted) {
    Alert.alert('Permission Required', 'Camera permission is needed.');
    return;
  }

  const res = await launchCamera({
    mediaType: 'photo',
    cameraType: 'front',
    quality: 0.8,
  });

  if (!res.didCancel && res.assets?.length) {
    setProfileImage(res.assets[0].uri);
    setSelectedAvatar(null);
  }
};

 const renderAvatar = ({ item, index }) => (
  
  <TouchableOpacity
    style={[
      styles.avatarWrapper,
      selectedAvatar === index && styles.avatarSelected,
    ]}
    onPress={() => {
      setSelectedAvatar(index);
      setProfileImage(null);
    }}
  >
    <Image source={item} style={styles.avatar} />
  </TouchableOpacity>
);


  return (
    <ScreenWrapper>
      <ImageBackground
        source={require('../../../assets/images/login_bg.png')}
        style={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.inputBox} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile Setup</Text>
        </View>

        {/* Upload from Gallery */}
        <TouchableOpacity
  style={styles.uploadBox}
  onPress={()=>pickFromGallery()}
>
  {profileImage ? (
    <Image source={{ uri: profileImage }} style={styles.previewImage} />
  ) : (
    <>
      <Ionicons name="person-circle-outline" size={26} color="#ff3b3b" />
      <Text style={styles.uploadText}>Upload From Gallery</Text>
    </>
  )}
</TouchableOpacity>

        {/* OR */}
        <Text style={styles.orText}>Or</Text>

        {/* Choose Avatar */}
        <Text style={styles.sectionTitle}>Choose an Avatar</Text>

        <FlatList
          data={avatars}
          renderItem={renderAvatar}
          keyExtractor={(_, i) => i.toString()}
          numColumns={4}
          contentContainerStyle={styles.avatarGrid}
          showsVerticalScrollIndicator={false}
        />
 <AppButton
          title="Next"
          btnstyle={{ marginBottom: '32%'}}
          onPress={() => {navigation.navigate('CreateAccount')}}
        />
        {/* Next Button */}
       
      </ImageBackground>
      <Modal
  visible={pickerVisible}
  transparent
  animationType="fade"
  onRequestClose={() => setPickerVisible(false)}
>
  <TouchableOpacity
    style={styles.pickerOverlay}
    activeOpacity={1}
    onPress={() => setPickerVisible(false)}
  >
    {/* <View style={styles.pickerCard}>
      <TouchableOpacity style={styles.pickerItem} onPress={pickFromCamera}>
        <Ionicons name="camera-outline" size={22} color="#fff" />
        <Text style={styles.pickerText}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.pickerItem} onPress={pickFromGallery}>
        <Ionicons name="image-outline" size={22} color="#fff" />
        <Text style={styles.pickerText}>Choose from Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.pickerItem, { justifyContent: 'center' }]}
        onPress={() => {
          setPickerVisible(false);
          navigation.navigate('CreateAccount');
        }}
      >
        <Text style={[styles.pickerText, { color: '#ff3b3b' }]}>Cancel</Text>
      </TouchableOpacity>
    </View> */}
  </TouchableOpacity>
</Modal>

    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 10,
  },

  uploadBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ff3b3b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  uploadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'500',
    marginLeft: 10,
  },

  orText: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 12,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },

  avatarGrid: {
    paddingBottom: 20,
  },

  avatarWrapper: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  avatarSelected: {
    borderWidth: 2,
    borderColor: '#ff3b3b',
    borderRadius: 40,
    padding: 3,
  },
  previewImage: {
  width: 60,
  height: 60,
  borderRadius: 30,
},

pickerOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.6)',
  justifyContent: 'flex-end',
},

pickerCard: {
  backgroundColor: '#060605',
  padding: 20,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
},

pickerItem: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 14,
},

pickerText: {
  color: '#fff',
  fontSize: 16,
  marginLeft: 12,
},
inputBox: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
  },
});
