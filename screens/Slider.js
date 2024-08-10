import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {height, width} = Dimensions.get('window');

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCards, setShowCards] = useState(true);

  const cardTexts1 = [
    'Welcome to our service!',
    'We serve incredible delicacies.',
    'Enjoy our special offers!',
  ];
  const cardTexts2 = [
    'Join our community!',
    'Discover amazing deals!',
    'Stay updated with our news!',
  ];

  const handleNext = () => {
    if (currentIndex < cardTexts1.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleSkip = () => {
    setShowCards(false);
  };

  return (
    <View style={styles.container}>
      {showCards && (
        <View style={styles.sliderContainer}>
          <View style={styles.card}>
            <View>
              <Text style={styles.cardText1}>{cardTexts1[currentIndex]}</Text>
              <Text style={styles.cardText2}>{cardTexts2[currentIndex]}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.buttonText}>
                  Next
                  <FontAwesome5
                    name="long-arrow-alt-right"
                    style={styles.iconstyle}
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dotsContainer}>
            {cardTexts1.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, currentIndex === index && styles.activeDot]}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    height: height / 2 + 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '270%',
  },
  card: {
    width: width - 79,
    height: height / 2 - 70,
    backgroundColor: '#FF7417',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -20,
  },
  cardText1: {
    color: 'white',
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 50,
  },
  cardText2: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 90,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
  },
  nextButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  iconstyle: {
    fontSize: 16,
    color: 'white',
  },
  skipButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 160,
    flexDirection: 'row',
  },
  dot: {
    width: 35,
    height: 6,
    borderRadius: 5,
    backgroundColor: 'grey',
    margin: 3,
  },
  activeDot: {
    width: 40,
    height: 6,
    borderRadius: 5,
    margin: 3,
    backgroundColor: 'white',
  },
});
