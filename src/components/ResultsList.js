import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text 
                style={styles.title}>
                {title}
            </Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => 
                                navigation.navigate('Result', { id: item.id })
                            }
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 8
    }
});

export default ResultsList;