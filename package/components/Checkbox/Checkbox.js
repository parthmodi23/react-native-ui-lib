import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox = ({ label, value, onValueChange }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onValueChange(!value)}>
      <View style={[styles.checkbox, value && styles.checked]}>
        {value && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#fff',
  },
  label: {
    fontSize: 16,
  },
});

export default Checkbox;
