import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreatePage = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

CreatePage.navigationOptions = () => {
  return {
    title: `Create New Blog Post`,
  };
};

export default CreatePage;

const styles = StyleSheet.create({});
