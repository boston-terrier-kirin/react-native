import { StyleSheet, Text, View, Pressable } from 'react-native';

/**
 * https://reactnative.dev/docs/touchableopacity
 * TouchableOpacity ではなく、Pressable を使うのが良いらしい。
 */

const GoalItem = ({ id, text, onDeleteItem }) => {
  const deleteGoalHandler = () => {
    onDeleteItem(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff',
    padding: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
