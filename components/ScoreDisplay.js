import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ScoreDisplay = ({ scoreA, scoreB }) => {
  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamText}>Tim A</Text>
        <Text style={styles.scoreText}>{scoreA}</Text>
      </View>
      <View style={styles.teamContainer}>
        <Text style={styles.teamText}>Tim B</Text>
        <Text style={styles.scoreText}>{scoreB}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  scoreText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#38bdf8',
  },
});

export default ScoreDisplay;
