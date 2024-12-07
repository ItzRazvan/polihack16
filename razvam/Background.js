import React from 'react';
import { View, StyleSheet } from 'react-native';
import { normalizeHeight } from './utils';

const Background = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block_dreaptasus} />
      <View style={styles.block_dreaptamij} />
      <View style={styles.block_dreptajos} />
      <View style={styles.block_stangajos} />
      <View style={styles.block_stangamij} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c1e33',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    block_dreaptasus: {
        position: 'absolute',
        width: '100%',
        height: 200,
        top: 0,
        right: 0,
        backgroundColor: '#100813',
        borderBottomLeftRadius: 400,
      },
      block_dreaptamij: {
        position: 'absolute',
        width: '50%',
        height: 150,
        top: 200,
        right: 0,
        backgroundColor: '#100813',
        borderBottomLeftRadius: 400,
      },
      block_dreptajos: {
        position: 'absolute',
        width: '20%',
        height: 330,
        top: 330,
        right: 0,
        backgroundColor: '#100813',
        borderBottomLeftRadius: '100%',
      },
      block_stangajos: {
        position: 'absolute',
        width: '100%',
        height: '30%',
        top: '75%',
        left: 0,
        backgroundColor: '#100813',
        borderTopRightRadius: 200,
      },
      block_stangamij: {
        position: 'absolute',
        width: '20%',
        height: '100%',
        top: '30%',
        left: 0,
        backgroundColor: '#100813',
        borderTopRightRadius: '100%',
      },
});

export default Background;