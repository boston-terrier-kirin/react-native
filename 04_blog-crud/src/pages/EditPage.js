import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditPage = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((blog) => blog.id === id);

  return (
    <BlogPostForm
      initialValues={blogPost}
      onSubmit={(title, content) => {
        // POINT：popで1つ前に戻る。
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

EditPage.navigationOptions = () => {
  return {
    title: `Edit Blog Post`,
  };
};

export default EditPage;

const styles = StyleSheet.create({});
