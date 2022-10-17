import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlexItemScreen = () => {
  return (
    <View style={styles.container}>
      <Text>flexDirection: column</Text>
      <View style={{ ...styles.box, ...styles.flex1 }}>
        <Text style={{ ...styles.text, ...styles.textOne }}>Child #1</Text>
        <Text style={{ ...styles.text, ...styles.textTwo }}>Child #2</Text>
        <Text style={{ ...styles.text, ...styles.textThree }}>Child #3</Text>
      </View>
    </View>
  );
};

export default FlexItemScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  box: {
    height: 200,
    borderWidth: 1,
    borderColor: '#4b5563',
    borderRadius: 5,
    marginBottom: 16,
  },
  flex1: {
    flexDirection: 'column',
  },
  text: { borderColor: '#f87171', borderWidth: 1 },
  textOne: {
    alignSelf: 'center',
  },
  textTwo: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  textThree: {
    flex: 1,
    alignSelf: 'flex-end',
  },
});
