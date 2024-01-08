import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AlertCircle } from 'lucide-react-native';

const Error = () => {
  return (
    <View style={styles.root}>
      <AlertCircle color="red" height={50} width={50} />
      <Text style={styles.message}>Unable to load movies</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
