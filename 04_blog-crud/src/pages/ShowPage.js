import { useContext } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';

const ShowPage = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blog) => blog.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowPage.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');

  return {
    title: `Blog Post #${id}`,
    headerRight: () => (
      <Pressable onPress={() => navigation.navigate('Edit', { id })}>
        <MaterialIcons
          name="edit"
          size={30}
          color="black"
          style={{ marginRight: 14 }}
        />
      </Pressable>
    ),
  };
};

export default ShowPage;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    color: '#4b5563',
  },
  content: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d1d5db',
    backgroundColor: '#e5e7eb',
    padding: 8,
  },
});
