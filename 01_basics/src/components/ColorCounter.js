import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({ name, onIncrease, onDecrease, style }) => {
  return (
    <View style={{ ...styles.box, ...style }}>
      <Text style={styles.title}>{name}</Text>
      <Button title={`More ${name}`} onPress={onIncrease} />
      <Button title={`Less ${name}`} onPress={onDecrease} />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#4b5563',
  },
  box: {
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 16,
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
});
