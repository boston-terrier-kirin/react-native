import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

const BlogPostForm = ({ initialValues, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: { title: '', content: '' },
};

export default BlogPostForm;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    color: '#4b5563',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d1d5db',
    backgroundColor: '#e5e7eb',
    padding: 8,
    marginBottom: 16,
  },
});
