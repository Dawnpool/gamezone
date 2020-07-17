import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 16,
        color: '#333',
        flex: 1
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
    homeCover: {
        flex: 1,
        maxWidth: 80,
        maxHeight: 120
    },
    titleInfo: {
        flex: 2,
        marginLeft: 10
    },
    titleDate: {
        flex: 10,
        fontSize: 10,
        color: 'gray'
    },
    console: {
        flex: 1
    },
    heart: {
        flexDirection: 'row'
    },
    heartText: {
        fontSize: 12,
        color: '#4480EB'
    },
    heartImage: {
        marginHorizontal: 5
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    },
    covers: {
        '1': require('../assets/covers/zelda.jpg'),
        '2': require('../assets/covers/mario.jpg'),
        '3': require('../assets/covers/smash.jpg'),
        '4': require('../assets/covers/animal.jpg'),
        '5': require('../assets/covers/god.jpg'),
        '6': require('../assets/covers/devil.jpeg'),
    }
}