import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const ControlButtons = ({ onAddScore, onSubtractScore, onReset }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="Tambah Skor A" onPress={() => onAddScore('A')} color="#38bdf8" />
        <Button title="Kurangi Skor A" onPress={() => onSubtractScore('A')} color="#ef4444" />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Tambah Skor B" onPress={() => onAddScore('B')} color="#38bdf8" />
        <Button title="Kurangi Skor B" onPress={() => onSubtractScore('B')} color="#ef4444" />
      </View>
      <Button title="Reset Skor" onPress={onReset} color="#10b981" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '80%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default ControlButtons;
