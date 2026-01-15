// GameSwiper.js
import React, { useRef, useState } from 'react';
import { View, FlatList, ImageBackground, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = 180; // use your card width
const SPACING = 20; // same as your marginLeft

const GameSwiper = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (CARD_WIDTH + SPACING));
    setActiveIndex(index);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.number}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING} // snap to card
        decelerationRate="fast"
        //contentContainerStyle={{ paddingHorizontal: (width - CARD_WIDTH) / 2 - SPACING / 2 }}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => <GameCard {...item} />}
      />

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: index === activeIndex ? 1 : 0.3, width: index === activeIndex ? 12 : 8 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

// Your GameCard component with existing styles
const GameCard = ({ number, title, subtitle, min, icon,player }) => (
  <View style={styles.gameCardWrapper}>
    <ImageBackground
      source={icon}
      resizeMode="cover"
      style={styles.gameCard}
      imageStyle={{ borderRadius: 20 }}
    >
      {/* Uncomment if you want big number */}
      {/* <Text style={styles.bigNumber}>{number}</Text> */}
<View style={{marginLeft: 10}}>


      <Text style={styles.gameTitle}>{title}</Text>
            <View style={{ height: 8 }} />

      <Text style={styles.gameSub}>{subtitle}</Text>
      <Text style={styles.gameSub}>{player}</Text>

      <Text style={styles.gameMin}>Min : {min} FCFA</Text>
</View>
      {/* Optional red glow */}
      {/* <View style={styles.redGlow} /> */}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  gameCardWrapper: {},
  gameCard: {
    width: 180,
    height: 210,
    backgroundColor: '#0A0A0A',
    borderRadius: 20,
    padding: 10,
    marginLeft: 12,
    marginRight: 20,
    overflow: 'hidden',
  },
  bigNumber: {
    position: 'absolute',
    //top: -10,
    right: 10,
    fontSize: 110,
    fontWeight: '900',
    color: '#E11D2E',
  },
  gameTitle: { color: '#fff', fontSize: 22, fontWeight: '700', marginTop: 60,width: '50%' },
  gameSub: { color: '#ccc', marginTop: 2 },
  gameMin: { color: '#fff', marginTop: 2 },
  pagination: { flexDirection: 'row', marginTop: 10 },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000',
    marginHorizontal: 4,
  },
});

export default GameSwiper;
