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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
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
          btnstyle={{ marginBottom: '28%'}}
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
  container: {
    flex: 1,
    paddingHorizontal: wp('3%'),
    paddingTop: hp('3%'),
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('4%'),
  },

  headerTitle: {
    color: '#fff',
    fontSize: wp('5.6%'),
    fontWeight: '700',
    marginLeft: wp('3%'),
  },

  inputBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: wp('3%'),
    paddingHorizontal: wp('3.5%'),
    height: hp('6.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* UPLOAD */
  uploadBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ff3b3b',
    borderRadius: wp('4%'),
    padding: wp('4%'),
    marginBottom: hp('2%'),
  },

  uploadText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: '500',
    marginLeft: wp('3%'),
  },

  previewImage: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
  },

  /* TEXT */
  orText: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: hp('1.8%'),
    fontSize: wp('3.8%'),
  },

  sectionTitle: {
    color: '#fff',
    fontSize: wp('4.6%'),
    fontWeight: '600',
    marginBottom: hp('2%'),
  },

  /* AVATAR GRID */
  avatarGrid: {
    paddingBottom: hp('3%'),
  },

  avatarWrapper: {
    width: wp('24%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  avatar: {
    width: wp('17%'),
    height: wp('17%'),
    borderRadius: wp('8.5%'),
  },

  avatarSelected: {
    borderWidth: 2,
    borderColor: '#ff3b3b',
    borderRadius: wp('10%'),
    padding: wp('1%'),
  },

  /* MODAL */
  pickerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },

  pickerCard: {
    backgroundColor: '#060605',
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
    borderTopLeftRadius: wp('6%'),
    borderTopRightRadius: wp('6%'),
  },

  pickerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2%'),
  },

  pickerText: {
    color: '#fff',
    fontSize: wp('4%'),
    marginLeft: wp('3%'),
  },
});

