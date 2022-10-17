import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowPage = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  };

  if (!result) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

export default ResultsShowPage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: 250,
    height: 125,
    marginBottom: 16,
  },
});
