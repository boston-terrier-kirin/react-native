import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, score, imageSrc }) => {
  return (
    <View style={styles.imageDetailContainer}>
      <Image style={styles.image} source={imageSrc} />
      <Text>{title}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({
  imageDetailContainer: {
    marginBottom: 16,
    padding: 16,
    borderColor: '#333',
    borderWidth: '1',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    marginBottom: 8,
  },
});
