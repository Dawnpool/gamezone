import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import ReviewCard from '../shared/reviewCard';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import ReviewForm from './reviewForm'
import Emoji from '../shared/emoji'

export default function ReviewDetails({ navigation }) {
    const reviewData = require('../reviews.json');
    const key = navigation.getParam('key');
    const [reviews, setReviews] = useState(reviewData[key].reviews);
    const [modalOpen, setModalOpen] = useState(false);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='fade'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <ReviewCard>
                        <View style={styles.cardLeftSide}>
                            <View style={styles.user}>
                                <Image style={styles.profileImage} source={require('../assets/profile.png')} />
                                <Text style={styles.userName}>{ item.user }</Text>
                            </View>
                            <Text style={styles.comment}>{ item.review }</Text>
                        </View>
                        <Emoji rating={ item.rating } style={styles.cardRightSide} />
                    </ReviewCard>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    modalToggle: {
        marginBottom: 10,
        // borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,
    },
    user: {
        flexDirection: 'row',
    },
    userName: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center'
    },
    profileImage: {
        width: 30,
        height: 30
    },
    cardLeftSide: {
        flex: 7
    },
    cardRightSide: {
        flex: 1,
        padding: 5
    }
});