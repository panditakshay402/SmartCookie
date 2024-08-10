import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index
  const [showCards, setShowCards] = useState(true); // Control visibility of the slider
  
  // Array of text for each card
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

  // Function to handle "Next" button press
  const handleNext = () => {
    if (currentIndex < cardTexts1.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first card after the last one
    }
  };

  // Function to handle "Skip" button press
  const handleSkip = () => {
    setShowCards(false); // Hide the slider and dots
  };

  // Render the slider only if it's not skipped
  return (
    <View style={styles.container}>
      {showCards && (
        <View style={styles.sliderContainer}>
          {/* Card */}
          <View style={styles.card}>
            <View>
              <Text style={styles.cardText1}>{cardTexts1[currentIndex]}</Text>
              <Text style={styles.cardText2}>{cardTexts2[currentIndex]}</Text>  
            </View>

            {/* Buttons on the card */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.buttonText}>Next --></Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Dots Indicator */}
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
    backgroundColor: 'orange',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -20,
  },
  cardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardText1: {
    color: 'white',
    fontSize: 48,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50, // Push text to the top
  },

  
  cardText2: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 90, // Push text to the top
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20, // Position buttons at the bottom of the card
  },
  nextButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
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
    position: 'absolute', // Make the dots container position absolute
    bottom: 160, // Position it 60 pixels above the bottom of the card
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
