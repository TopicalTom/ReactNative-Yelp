import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

// Hooks
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [ query, setQuery ] = useState("");
    const [ searchAPI, results, errorMessage ] = useResults();

    return (
        <View>
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
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;