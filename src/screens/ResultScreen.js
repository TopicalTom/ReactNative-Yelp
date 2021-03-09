import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

// API
import yelp from '../api/yelp';

const ResultScreen = ({ route }) => {
    const { id } = route.params;
    const [ result, setResult ] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <Image 
                            style={styles.image} 
                            source={{uri: item}} 
                        />
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 160,
        width: 250
    }
});

export default ResultScreen;