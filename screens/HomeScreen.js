import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import ScoreDisplay from '../components/ScoreDisplay';
import ControlButtons from '../components/ControlButtons';

const HomeScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleAddScore = (team) => {
    if (team === 'A') setScoreA(scoreA + 1);
    if (team === 'B') setScoreB(scoreB + 1);

    if (scoreA === 9 || scoreB === 9) {
      Alert.alert('Pemenang', `${team === 'A' ? 'Tim A' : 'Tim B'} menang!`);
    }
  };

  const handleSubtractScore = (team) => {
    if (team === 'A' && scoreA > 0) setScoreA(scoreA - 1);
    if (team === 'B' && scoreB > 0) setScoreB(scoreB - 1);
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score Tracker</Text>
      <ScoreDisplay scoreA={scoreA} scoreB={scoreB} />
      <ControlButtons
        onAddScore={handleAddScore}
        onSubtractScore={handleSubtractScore}
        onReset={handleReset}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e293b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
});

export default HomeScreen;
