import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

// Hooks
import useResults from '../hooks/useResults';

// Components
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [ query, setQuery ] = useState("");
    const [ searchAPI, results, errorMessage ] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <>
            <SearchBar
                placeholder="Search"
                platform="ios"
                onChangeText={newValue => setQuery(newValue)}
                onEndEditing={() => searchAPI(query)}
                value={query}
            />
            {errorMessage 
                ?   <Text>{errorMessage}</Text> 
                :   null
            }
            <ScrollView style={styles.scrollArea}>
                <ResultsList 
                    title="Cost Effective" 
                    results={filterResultsByPrice('$')}
                />
                <ResultsList 
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')} 
                />
                <ResultsList 
                    title="Big Spender" 
                    results={filterResultsByPrice('$$$')}
                /> 
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollArea: {
        backgroundColor: '#fff',
        flex: 1
    }
});

export default SearchScreen;