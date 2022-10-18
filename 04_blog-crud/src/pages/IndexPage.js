import { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

// https://icons.expo.fyi/
import { Feather } from '@expo/vector-icons';

const IndexPage = ({ navigation }) => {
  const { state, getBlogPosts, deleteBlogPost } = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();

    // POINT：画面とバックエンドをどう同期するか？
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
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
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    borderRadius: 5,
    backgroundColor: '#eff6ff',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: '#4b5563',
  },
  icon: {
    fontSize: 24,
    color: '#4b5563',
  },
});
