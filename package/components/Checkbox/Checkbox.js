import React from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';

const Checkbox = ({ label, value, onValueChange, containerStyle, checkboxStyle, labelStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => onValueChange(!value)}
      activeOpacity={0.8}
    >
      <View style={[styles.checkbox, checkboxStyle, value && styles.checked]}>
        {value && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    ...Platform.select({
      ios: {
        backgroundColor: '#fff', // Customize for iOS if needed
      },
      android: {
        backgroundColor: '#fff', // Customize for Android if needed
      },
    }),
  },
  checked: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});

export default Checkbox;
