import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchScreen = () => {
    const [query, setQuery] = useState("")

    return (
        <View>
            <SearchBar
                placeholder="Search"
                platform="ios"
                onChangeText={(newValue) => setQuery(newValue)}
                value={query}
            />
            <Text>
                Search Screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;