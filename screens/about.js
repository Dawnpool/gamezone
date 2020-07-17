import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text>게임 리뷰 어플입니다. 리뷰를 남겨주세요.</Text>
        </View>
    );
}