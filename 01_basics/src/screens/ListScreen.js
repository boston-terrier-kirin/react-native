import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { id: '1', name: 'Friend #1', age: 10 },
    { id: '2', name: 'Friend #2', age: 11 },
    { id: '3', name: 'Friend #3', age: 20 },
    { id: '4', name: 'Friend #4', age: 30 },
    { id: '5', name: 'Friend #5', age: 40 },
    { id: '6', name: 'Friend #6', age: 15 },
    { id: '7', name: 'Friend #7', age: 16 },
    { id: '8', name: 'Friend #8', age: 34 },
    { id: '9', name: 'Friend #9', age: 25 },
    { id: '10', name: 'Friend #10', age: 67 },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.id}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name: {item.name} - Age: {item.age}
          </Text>
        );
      }}
      horizontal={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
