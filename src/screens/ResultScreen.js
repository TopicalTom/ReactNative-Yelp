import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <View>
            <Text>{id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultScreen;