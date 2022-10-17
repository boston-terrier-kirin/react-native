import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
          >
            <ResultsDetail result={item} />
          </Pressable>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 5,
  },
});
