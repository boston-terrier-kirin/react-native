import { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchPage = () => {
  const [term, setTerm] = useState('');
  const { searchApi, results, errorMessage } = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <ScrollView>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}

      {/* Cost Effective */}
      <ResultsList
        title="Cost Effective"
        results={filterResultsByPrice('￥')}
      />

      {/* Bit Pricier */}
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('￥￥')} />

      {/* Big Spender */}
      <ResultsList
        title="Big Spender"
        results={filterResultsByPrice('￥￥￥')}
      />
    </ScrollView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({});
