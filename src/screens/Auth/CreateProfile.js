import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppButton from '../../components/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const avatars = [
  require('../../../assets/images/Cartoon.png'),
  require('../../../assets/images/Cartoon3.png'),
  require('../../../assets/images/Cartoon4.png'),
  require('../../../assets/images/Cartoon3.png'),
  require('../../../assets/images/Cartoon4.png'),
  require('../../../assets/images/Cartoon3.png'),
  require('../../../assets/images/Cartoon4.png'),
  require('../../../assets/images/Cartoon3.png'),
  require('../../../assets/images/Cartoon4.png'),
  require('../../../assets/images/Cartoon3.png'),
  require('../../../assets/images/Cartoon4.png'),
  require('../../../assets/images/Cartoon3.png'),
  require('../../../assets/images/Cartoon4.png'),
  require('../../../assets/images/Cartoon3.png'),
  require('../../../assets/images/Cartoon4.png'),
];

export default function ProfileSetupScreen({ navigation }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const renderAvatar = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.avatarWrapper,
        selectedAvatar === index && styles.avatarSelected,
      ]}
      onPress={() => setSelectedAvatar(index)}
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile Setup</Text>
        </View>

        {/* Upload from Gallery */}
        <TouchableOpacity style={styles.uploadBox}>
          <Ionicons name="person-circle-outline" size={26} color="#ff3b3b" />
          <Text style={styles.uploadText}>Upload From Gallery</Text>
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

        {/* Next Button */}
        <AppButton
          title="Next"
          style={{ marginBottom: 20 }}
          onPress={() => {}}
        />
      </ImageBackground>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
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
    marginLeft: 10,
  },

  orText: {
    textAlign: 'center',
    color: '#9c9c9c',
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
});
