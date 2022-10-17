import { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Pressable,
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

// https://icons.expo.fyi/
import { Feather } from '@expo/vector-icons';

const IndexPage = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('Show', { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <Pressable onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </Pressable>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

IndexPage.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <Pressable onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} style={{ marginRight: 14 }} />
      </Pressable>
    ),
  };
};

export default IndexPage;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
