import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>flexDirection: column</Text>
      <View style={{ ...styles.box, ...styles.flex1 }}>
        <Text style={{ ...styles.text, ...styles.textOne }}>Child #1</Text>
        <Text style={{ ...styles.text, ...styles.textTwo }}>Child #2</Text>
        <Text style={{ ...styles.text, ...styles.textThree }}>Child #3</Text>
        <Text style={{ ...styles.text, ...styles.textFour }}></Text>
      </View>
    </View>
  );
};

export default PositionScreen;

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
  textOne: {},
  textTwo: {
    // 親はデフォルトでrelativeになっている。
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  textThree: {
    // relativeのままでleftを指定すると、本来ある場所からleft:10になる。
    left: 10,
    top: 10,
  },
  textFour: {
    // 全部を0にすると、オーバーレイになる。
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,

    // これでも同じことができる。
    ...StyleSheet.absoluteFillObject,

    backgroundColor: '#fee2e2',
    zIndex: -1,
  },
});
