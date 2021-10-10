import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const CustomButton = ({onPress, title}) => {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#4AB147',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default CustomButton;
