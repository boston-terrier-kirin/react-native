import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviwes
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});
