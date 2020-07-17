import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    user: yup.string().required().min(2),
    review: yup.string().required().min(4),
    rating: yup.string().required()
    .test('is-num-1-5', '평점은 1에서 5 사이여야 합니다', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{ title: '', body: '', rating: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='닉네임'
                            onChangeText={props.handleChange('user')}
                            value={props.values.user}
                            onBlur={props.handleBlur('user')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>
                        <TextInput 
                            multiline minHeight={100}
                            style={globalStyles.input}
                            placeholder='리뷰를 남겨주세요'
                            onChangeText={props.handleChange('review')}
                            value={props.values.review}
                            onBlur={props.handleBlur('review')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body }</Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='평점 (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType={'numeric'}
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating }</Text>
                        <FlatButton text='리뷰 작성' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}