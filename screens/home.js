import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: '젤다의 전설 브레스 오브 더 와일드', rating: 5, console: 'Nintendo Switch',
        body: 'lorem ipsum', cover: images.covers['1'], date: '2017년 3월 3일 출시', key: '1' },
        { title: '슈퍼 마리오 오디세이', rating: 4, console: 'Nintendo Switch',
        body: 'lorem ipsum', cover: images.covers['2'], date: '2017년 10월 27일 출시', key: '2'},
        { title: '슈퍼 스매시브라더스 얼티밋', rating: 5, console: 'Nintendo Switch',
        body: 'lorem ipsum', cover: images.covers['3'], date: '2018년 12월 7일 출시', key: '3'},
        { title: '모여봐요 동물의 숲', rating: 5, console: 'Nintendo Switch',
        body: 'lorem ipsum', cover: images.covers['4'], date: '2020년 3월 20일 출시', key: '4'},
        { title: '갓 오브 워 4', rating: 4, console: 'Playstation 4',
        body: 'lorem ipsum', cover: images.covers['5'], date: '2018년 4월 20일 출시', key: '5'},
        { title: '데빌 메이 크라이 5', rating: 3, console: 'Playstation 4',
        body: 'lorem ipsum', cover: images.covers['6'], date: '2019년 3월 8일 출시', key: '6'},
    ]);
    
    const addReview = (review) => {
        review.key = Math.random().toString;
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Image source={item.cover} style={globalStyles.homeCover} />
                            <View style={globalStyles.titleInfo}>
                                <Text style={globalStyles.titleText}>{ item.title }</Text>
                                <Text style={globalStyles.console}>{item.console}</Text>
                                <Text style={globalStyles.titleDate}>{item.date}</Text>
                                <View style={globalStyles.heart}>
                                    <Text style={globalStyles.heartText}>유저 평점</Text>
                                    <Image style= {globalStyles.heartImage} source={images.ratings[item.rating]} />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}