import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchScreen = () => {
    const [query, setQuery] = useState("")

    return (
        <View style={styles.backgroundStyle}>
            <SearchBar
                placeholder="Search"
                platform="ios"
                onChangeText={newValue => setQuery(newValue)}
                value={query}
            />
            <Text>
                Search Screen
            </Text>
            <Text>
                {query}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#ffffff'
    }
});

export default SearchScreen;