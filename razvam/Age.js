import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Dimensions } from 'react-native';

const Age = ({ age, setAge }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Please select your age:</Text>
      <Text style={styles.ageDisplay}>{age}</Text>
      <Slider
        style={styles.slider}
        minimumValue={16}
        maximumValue={100}
        step={1}
        value={age}
        onSlidingComplete={setAge}
        minimumTrackTintColor="#c987e6"
        maximumTrackTintColor="#000000"
        thumbTintColor="#c987e6"
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const scale = width / 320;

const normalize = (size) => {
  return Math.round(scale * size);
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    color: 'grey',
    fontSize: normalize(14),
    marginBottom: 5,
  },
  ageDisplay: {
    color: 'white',
    fontSize: normalize(20),
    marginBottom: 5,
  },
  slider: {
    width: '80%',
    height: 40,
  },
});

export default Age;