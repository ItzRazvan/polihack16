import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { normalizeWidth, normalizeHeight } from './utils';

const Question = ({ text, selectedCircle, setSelectedCircle }) => {
  return (
    <View>
      <Text style={styles.question}>{text}</Text>
      <View style={styles.circleContainer}>
      <Text style={styles.label}>No</Text>
        {[...Array(6)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.circle,
              selectedCircle === index && styles.selectedCircle,
            ]}
            onPress={() => setSelectedCircle(index)}
          />
        ))}
        <Text style={styles.label}>Yes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    color: 'grey',
    fontSize: normalizeWidth(14),
    marginBottom: normalizeHeight(15),
    textAlign: 'center',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'grey',
    marginHorizontal: 5,
  },
  selectedCircle: {
    backgroundColor: '#c987e6',
  },
  label: {
    top: normalizeHeight(15),
    color: 'grey',
    fontSize: normalizeWidth(10),
  },
});

export default Question;