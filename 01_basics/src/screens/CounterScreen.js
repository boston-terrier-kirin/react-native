import { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increment"
        onPress={() => setCounter((prev) => prev + 1)}
      />
      <Button
        title="Decrement"
        onPress={() => setCounter((prev) => prev - 1)}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
