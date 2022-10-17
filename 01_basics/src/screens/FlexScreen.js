import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text>flexDirection: column</Text>
      <View style={{ ...styles.box, ...styles.flex1 }}>
        <Text style={styles.text}>Child #1</Text>
        <Text style={styles.text}>Child #2</Text>
        <Text style={styles.text}>Child #3</Text>
      </View>

      <Text>flexDirection: row</Text>
      <View style={{ ...styles.box, ...styles.flex2 }}>
        <Text style={styles.text}>Child #1</Text>
        <Text style={styles.text}>Child #2</Text>
        <Text style={styles.text}>Child #3</Text>
      </View>
    </View>
  );
};

export default FlexScreen;

/**
 * デフォルトでは、paddingもmarginもゼロになっている。
 */
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
    // デフォルトはstretchになっていて、cross-axis方向に100%になる。
    // alignItems: 'stretch',
    alignItems: 'center',
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',

    justifyContent: 'space-around',
  },
  flex2: {
    flexDirection: 'row',
    // alignItems: 'stretch',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  text: {
    borderColor: '#f87171',
    borderWidth: 1,
  },
});
