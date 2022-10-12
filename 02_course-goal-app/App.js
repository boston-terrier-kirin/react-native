import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

/**
 * https://reactnative.dev/docs/flexbox
 * ・Viewはデフォルトでflexになっている。
 * ・デフォルトはcolumnになっている。
 * ・CSSみたいに継承/カスケードされない。
 */

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setGoals((prev) => [{ text: goal, id: Math.random().toString() }, ...prev]);
  };

  const deleteGoalHandler = (id) => {
    setGoals((prev) => prev.filter((prev) => prev.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      {/* 
      ScrollView
      https://reactnative.dev/docs/scrollview
      ScrollView renders all its react child components at once, but this has a performance downside.
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View> */}

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
