import { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexPage = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={() => addBlogPost({ title: 'TEST' })} />
      <FlatList
        data={data}
        keyExtractor={(blog, index) => index}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({});
