import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { DATA } from "../Screens/BookScreen";

let newBookCounter = 0

const screenColor = {
    bg: "#fff",
    color: '#000',
}

const inputColor = {
    bg: '#fff',
    color: '#000',
}
export default function AddBook({ navigation, route }) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState('');
    const [show, setShow] = useState(false)

    const newItem = () => {
        setTitle('')
        setSubtitle('')
        setPrice('')
        if (title != '') {
            const obj = {
                "title": title,
                "subtitle": subtitle,
                "price": price,
                "imdbID": newBookCounter + 1,
            }

            DATA.push(obj)
            newBookCounter++
            navigation.navigate('BookScreen')
        } else {
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 4000);
        }
    }

    const regex = /\d+/;

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.sectionStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => setTitle(text)}
                        value={title}
                        clearButtonMode={'while-editing'}
                        placeholder={"Титулка"}
                        placeholderTextColor={inputColor.color}
                    />
                </View>
                <View style={{ padding: 2 }}>
                    {show ? (<Text style={styles.textTipStyle}>This field must be filled!</Text>) : null}
                </View>
                <View style={styles.sectionStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => setSubtitle(text)}
                        value={subtitle}
                        clearButtonMode={'while-editing'}
                        placeholder={"Підзаголовок"}
                        placeholderTextColor={inputColor.color}
                    />
                </View>
                <View style={{ padding: 2 }}></View>
                <View style={styles.sectionStyle}>
                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                            if (regex.test(text) || text === '') {
                                setPrice(text)
                            }
                        }}
                        value={price}
                        clearButtonMode={'while-editing'}

                        placeholder={"Ціна"}
                        placeholderTextColor={inputColor.color}
                    />
                </View>
                <View style={{ padding: 2 }}></View>

                <View style={styles.buttonStyleContainer}>
                    <Button
                        color={screenColor.color}

                        style={styles.buttonStyle}
                        title="Додати книгу"
                        onPress={newItem}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        backgroundColor: screenColor.bg,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    textInputStyle: {
        flex: 1,
        height: 40,
        marginLeft: 10,
        borderRadius: 10,
        color: inputColor.color,

    },

    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: inputColor.bg,

        height: 40,
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 8,

        borderColor: '#808082',
        borderWidth: 1,

    },

    imageStyle: {
        margin: 5,
    },

    buttonStyleContainer: {
        marginVertical: 26,
        backgroundColor: inputColor.bg,
        borderColor: '#808082',
        borderWidth: 1,
        borderRadius: 10,
        margin: 80,

    },

    buttonStyle: {
        color: screenColor.color,
        color: '#1C1C1C',
        borderColor: screenColor.color,
        borderWidth: 1,
    },

    textStyle: {
        marginLeft: 16,
        color: screenColor.color,
        marginTop: 20,
        fontSize: 16,
    },

    textTipStyle: {
        paddingTop: 6,
        marginLeft: 16,
        position: 'absolute',
        fontSize: 12,
        color: screenColor.color,
    },

    closeButtonParent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        color: '#1C1C1C',
        borderColor: screenColor.color,
        borderWidth: 1,
    },
});

