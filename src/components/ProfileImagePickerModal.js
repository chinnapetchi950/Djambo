
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
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const avatars = [
  require('../../assets/images/Cartoon1.png'),
  require('../../assets/images/Cartoon2.png'),
  require('../../assets/images/Cartoon3.png'),
  require('../../assets/images/Cartoon4.png'),
  require('../../assets/images/Cartoon5.png'),
  require('../../assets/images/Cartoon6.png'),
  require('../../assets/images/Cartoon7.png'),
  require('../../assets/images/Cartoon8.png'),
  require('../../assets/images/Cartoon9.png'),
  require('../../assets/images/Cartoon10.png'),
  require('../../assets/images/Cartoon11.png'),
  require('../../assets/images/Cartoon12.png'),
  require('../../assets/images/Cartoon13.png'),
  require('../../assets/images/Cartoon14.png'),
  require('../../assets/images/Cartoon15.png'),
  require('../../assets/images/Cartoon16.png'),
];

export default function ProfileImagePickerModal({
  visible,
  onClose,
  onSelect,
}) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  /* ---------- PERMISSIONS ---------- */
  const requestGalleryPermission = async () => {
    if (Platform.OS !== 'android') return true;
    const permission =
      Platform.Version >= 33
        ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    return (await request(permission)) === RESULTS.GRANTED;
  };

  /* ---------- GALLERY ---------- */
  const pickFromGallery = async () => {
    const granted = await requestGalleryPermission();
    if (!granted) {
      Alert.alert('Permission Required', 'Gallery permission needed');
      return;
    }

    const res = await launchImageLibrary({ mediaType: 'photo', quality: 0.8 });
    if (!res.didCancel && res.assets?.length) {
      setSelectedAvatar(null);
      setSelectedImage({ uri: res.assets[0].uri });
    }
  };

  /* ---------- AVATAR ---------- */
  const renderAvatar = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.avatarWrapper,
        selectedAvatar === index && styles.avatarSelected,
      ]}
      onPress={() => {
        setSelectedAvatar(index);
        setSelectedImage(item);
      }}
    >
      <Image source={item} style={styles.avatar} />
    </TouchableOpacity>
  );

  /* ---------- SAVE ---------- */
  const handleSave = () => {
    if (!selectedImage) {
      Alert.alert('Select Image', 'Please select an image');
      return;
    }
    onSelect(selectedImage); // 🔥 upload trigger (parent)
    onClose();               // 🔥 close modal
  };
//   const pickFromCamera = async () => {
//     const granted = await requestCameraPermission();
//     if (!granted) {
//       Alert.alert('Permission Required', 'Camera permission needed');
//       return;
//     }

//     const res = await launchCamera({
//       mediaType: 'photo',
//       cameraType: 'front',
//       quality: 0.8,
//     });

//     if (!res.didCancel && res.assets?.length) {
//       onSelect({ uri: res.assets[0].uri });
//       onClose();
//     }
//   };
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <ImageBackground
          source={require('../../assets/images/login_bg.png')}
          style={styles.card}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>Choose Profile Picture</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={26} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* PREVIEW */}
          {selectedImage && (
            <Image
              source={selectedImage.uri ? { uri: selectedImage.uri } : selectedImage}
              style={styles.preview}
            />
          )}

          {/* GALLERY */}
          <TouchableOpacity style={styles.uploadBox} onPress={pickFromGallery}>
            <Ionicons name="image-outline" size={22} color="#ff3b3b" />
            <Text style={styles.uploadText}>Upload From Gallery</Text>
          </TouchableOpacity>
  {/* <TouchableOpacity style={styles.uploadBox} onPress={pickFromCamera}>
            <Ionicons name="camera-outline" size={22} color="#ff3b3b" />
            <Text style={styles.uploadText}>Take Photo</Text>
          </TouchableOpacity> */}
          <Text style={styles.orText}>OR</Text>

          {/* AVATARS */}
          <FlatList
            data={avatars}
            renderItem={renderAvatar}
            keyExtractor={(_, i) => i.toString()}
            numColumns={4}
            showsVerticalScrollIndicator={false}
          />

          {/* SAVE BUTTON */}
          <TouchableOpacity
            style={[
              styles.saveBtn,
              !selectedImage && { opacity: 0.5 },
            ]}
            disabled={!selectedImage}
            onPress={handleSave}
          >
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </Modal>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
   // backgroundColor: 'rgba(0,0,0,0.7)',
   backgroundColor:'#0f0f0f',
    justifyContent: 'flex-end',
  },
  card: {
    //height: '85%',
    padding: wp('4%'),
    borderTopLeftRadius: wp('6%'),
    borderTopRightRadius: wp('6%'),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  title: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: '700',
  },
  uploadBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ff3b3b',
    borderRadius: wp('4%'),
    padding: wp('4%'),
    marginBottom: hp('1.5%'),
  },
  uploadText: {
    color: '#fff',
    fontSize: wp('4%'),
    marginLeft: wp('3%'),
  },
  orText: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: hp('2%'),
  },
  avatarWrapper: {
    width: wp('23%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  avatar: {
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('8%'),
  },
  avatarSelected: {
    borderWidth: 2,
    borderColor: '#ff3b3b',
    borderRadius: wp('9%'),
    padding: wp('1%'),
  },
  preview: {
  width: wp('22%'),
  height: wp('22%'),
  borderRadius: wp('11%'),
  alignSelf: 'center',
  marginBottom: hp('2%'),
},

saveBtn: {
  backgroundColor: '#ff3b3b',
  paddingVertical: hp('1.6%'),
  borderRadius: wp('8%'),
  alignItems: 'center',
  marginTop: hp('2%'),
},

saveText: {
  color: '#fff',
  fontSize: wp('4.5%'),
  fontWeight: '700',
},

});
