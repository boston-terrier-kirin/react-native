import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import React from 'react';

const TextScreen = () => {
  const [name, setName] = useState();

  const onChange = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={onChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>Your name is: {name}</Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderColor: '#9ca3af',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
});
