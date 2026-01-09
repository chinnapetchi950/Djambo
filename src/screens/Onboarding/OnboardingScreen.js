import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Typography } from '../../theme/typography';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Play Smart. Play Secure.',
    description:
      'Create your account securely, choose an avatar, and play with confidence.',
    points: [
      'Secure OTP login',
      'Anonymous or visible identity',
      'Fair gameplay',
    ],
    image: require('../../../assets/images/intro1.png'),
  },
  {
    title: 'One Wallet. Multiple Currencies.',
    description: 'Deposit, play, and withdraw easily in your preferred currency.',
    points: ['EUR / USD / FCFA wallet', 'Mobile Money & PayPal', 'Instant balance updates'],
    image: require('../../../assets/images/intro2.png'),
  },
  {
    title: 'Join GUIO. Play & Win.',
    description: 'Create or join matches and enjoy  real-time card games.',
    points: ['Find or create GUIOs', '2–4 player games', 'Instant winnings'],
    image: require('../../../assets/images/intro3.png'),
  },
];

export default function OnboardingScreen({ navigation }) {
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);

  const onNext = () => {
    if (index === slides.length - 1) {
      navigation.navigate('Login'); 
      // navigation.replace('createProfile');
    } else {
      flatListRef.current.scrollToIndex({ index: index + 1 });
    }
  };

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setIndex(viewableItems[0].index);
    }
  });

  return (
    <ScreenWrapper>
      <ImageBackground
        source={require('../../../assets/images/splash_bg.png')}
        style={styles.container}
        resizeMode="cover"
      >
        <FlatList
          ref={flatListRef}
          data={slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Text style={styles.title}>{item.title}</Text>

              <Image source={item.image} style={styles.image} />

              <Text style={styles.description}>{item.description}</Text>

              <View style={styles.pointsContainer}>
                {item.points.map((p, i) => (
                  <Text key={i} style={styles.point}>
                    • {p}
                  </Text>
                ))}
              </View>
            </View>
          )}
        />

        {/* BOTTOM CONTROLS */}
        <View style={styles.bottomRow}>
          <View style={styles.dots}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  index === i && styles.activeDot,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.nextButton,
              index === slides.length - 1 && styles.getStartedBtn,
            ]}
            onPress={onNext}
          >
            {index === slides.length - 1 ? (
              <View style={{ flexDirection: 'row', alignItems: 'center',padding:8 }}>
                <Text style={styles.getStartedText}>Get Started</Text>
                <Image
                  tintColor={'#000'}
                  source={require('../../../assets/images/arrow.png')}
                style={{ width: 24, height: 24,marginLeft:10 }}
              />
              </View>
            ) : (
              <Image
                tintColor={'#000'}
                source={require('../../../assets/images/arrow.png')}
                style={{ width: 22, height: 22 }}
              />
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  slide: {
    width,
    paddingHorizontal: 24,
    paddingTop: 70,
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 40 ,
    fontFamily: Typography.fontFamily.bold,
  },

  image: {
    width: width - 48,
    height: height * 0.35,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  description: {
    color: '#fff',
    fontSize: 18,
    marginTop: 30,
    fontFamily: Typography.fontFamily.medium,
  },

  pointsContainer: { marginTop: 15 },

  point: {
    color: '#ddd',
    fontSize: 15,
    marginTop: 6,
    fontFamily: Typography.fontFamily.regular,
  },

  bottomRow: {
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dots: { flexDirection: 'row' },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ff2d2d',
    marginRight: 8,
  },

  activeDot: { backgroundColor: '#ff2d2d' },

  nextButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ff2d2d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  getStartedBtn: {
    width: 140,
    borderRadius: 30,
  },

  getStartedText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
});
