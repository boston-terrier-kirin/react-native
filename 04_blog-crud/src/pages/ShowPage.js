import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const ShowPage = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blog) => blog.id === id);

  return (
    <View>
      <Text>ShowPage</Text>
      <Text>{blogPost.id}</Text>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowPage;

const styles = StyleSheet.create({});
