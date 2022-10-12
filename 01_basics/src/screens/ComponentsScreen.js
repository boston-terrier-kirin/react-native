import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const myName = 'Kirin';

  return (
    <View>
      <Text style={styles.title}>Getting started with React Native</Text>
      <Text style={styles.name}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  name: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
