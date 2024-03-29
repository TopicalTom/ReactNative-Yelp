import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: result.image_url }}
                style={styles.image} 
            />
            <Text 
                style={styles.name}>
                {result.name}
            </Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 16
    },
    image: {
        width: 250,
        height: 160,
        borderRadius: 4,
        marginBottom: 8
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 4
    }
});

export default ResultsDetail;