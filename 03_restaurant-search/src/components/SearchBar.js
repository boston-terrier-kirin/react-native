import { Feather } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e7eb',
    height: 50,
    borderRadius: 5,
    marginTop: 16,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 35,
    color: '#374151',
  },
  input: {
    color: '#374151',
    padding: 8,
    fontSize: 18,
    flex: 1,
  },
});
