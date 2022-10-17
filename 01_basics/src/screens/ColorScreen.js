import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React from 'react';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const onAddColor = () => {
    setColors((prev) => [randomRgb(), ...prev]);
  };

  return (
    <View style={styles.container}>
      <Button title="Add a Color" onPress={onAddColor} />
      <FlatList
        data={colors}
        keyExtractor={(color) => color}
        renderItem={(color) => {
          return (
            <View
              style={{
                height: 100,
                width: 200,
                backgroundColor: color.item,
                ...styles.box,
              }}
            >
              <Text>{color.item}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;

const styles = StyleSheet.create({
  container: { alignItems: 'center', width: '100%' },
  box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
