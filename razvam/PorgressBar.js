import React from 'react';
import { View, StyleSheet } from 'react-native';
import { normalizeHeight } from './utils';

const ProgressBar = ({ currentPage, totalPages }) => {
  const progress = (currentPage / totalPages) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: '75%',
    backgroundColor: '#e0e0df',
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'center',
    top: normalizeHeight(100),
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#c987e6',
  },
});

export default ProgressBar;