import { StyleSheet, Text, View, FlatList } from 'react-native';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        horizontal={true}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
