import { StyleSheet, ScrollView } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  const images = [
    {
      id: '1',
      title: 'Forest',
      score: 7,
      imageSrc: require('../../assets/images/forest.jpg'),
    },
    {
      id: '2',
      title: 'Beach',
      score: 6,
      imageSrc: require('../../assets/images/beach.jpg'),
    },
    {
      id: '3',
      title: 'Mountain',
      score: 9,
      imageSrc: require('../../assets/images/mountain.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.imageContainer}>
      {images.map((image) => (
        <ImageDetail
          key={image.id}
          title={image.title}
          score={image.score}
          imageSrc={image.imageSrc}
        />
      ))}
    </ScrollView>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  imageContainer: {
    padding: 16,
  },
});
