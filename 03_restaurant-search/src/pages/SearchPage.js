import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchPage = () => {
  const [term, setTerm] = useState('');
  const { searchApi, results, errorMessage } = useResults();

  console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {results.length} results</Text>

      <ResultsList
        title="Cost Effective"
        results={filterResultsByPrice('￥')}
      />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('￥￥')} />
      <ResultsList
        title="Big Spender"
        results={filterResultsByPrice('￥￥￥')}
      />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({});
