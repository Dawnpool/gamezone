import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet } from 'react-native'

export default function Emoji({ rating }) {
    let name;
    let color;
    if (rating == 5) {
        name = 'emoji-flirt';
        color = '#1BBB22';
    } else if (rating == 4) {
        name = 'emoji-happy';
        color = '#05E60F';
    } else if (rating == 3) {
        name = 'emoji-neutral';
        color = '#E2DB16'
    } else {
        name = 'emoji-sad';
        color = 'orange';
    }
    return (
        <Entypo 
            name={name}
            size={30}
            color={color}
            style={styles.emoji}
        />
    )
}

const styles = StyleSheet.create({
    emoji: {
        alignSelf: 'center'
    }
});