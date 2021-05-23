import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, ScrollView, Image, ActivityIndicator } from 'react-native';

import { imageSwitch } from "../../global/imageSwitch";
import { infoSwitch } from "../../global/infoSwitch";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const screenColor = {
    bg: "#fff",
    color: '#000',
}

export default function BookInfo({ route }) {

    const { id, title, subtitle } = route.params;

    const data = infoSwitch(id)

    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    const orientation = () => {
        const dim = Dimensions.get('screen');
        if (dim.height >= dim.width) {
            return styles
        } else {
            return landscape
        }
    } 

    return (
        <>
            
            <SafeAreaView>
                <ScrollView style={{ backgroundColor: screenColor.bg }}>
                    <View style={orientation().infoScreen}>
                        <View style={orientation().infoImageSection}>
                            <Image
                                style={orientation().infoImage}
                                source={imageSwitch(data.image)}
                            />
                        </View>
                        <View style={orientation().infoScreenTextView}>
                            <Text style={orientation().baseText}>
                                Title:
                                <Text style={orientation().innerText}> {data.title != '' ? data.title : title}</Text>
                            </Text>
                            <Text style={orientation().baseText}>
                                Subtitle:
                                <Text style={orientation().innerText}> {data.subtitle != '' ? data.subtitle : subtitle}</Text>
                            </Text>
                            <Text style={orientation().baseText}>
                                Description:
                                <Text style={orientation().innerText}> {data.desc}{'\n'}</Text>
                            </Text>
                            <Text style={orientation().baseText}>
                                Authors:
                                <Text style={orientation().innerText}> {data.authors}</Text>
                            </Text>
                            <Text style={orientation().baseText}>
                                Publisher:
                                <Text style={orientation().innerText}> {data.publisher}{'\n'}</Text>
                            </Text>
                            <Text style={orientation().baseText}>
                                Pages:
                                <Text style={orientation().innerText}> {data.pages}</Text>
                            </Text>
                            <Text style={orientation().baseText}>
                                Year:
                                <Text style={orientation().innerText}> {data.year}</Text>
                            </Text>
                            <Text style={orientation().baseText}>
                                Rating:
                                <Text style={orientation().innerText}> {data.rating}</Text>
                            </Text>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({

    baseText: {
        color: screenColor.color,
        fontWeight: '600',
        fontSize: 18,
        marginVertical: 2,
    },

    innerText: {
        color: screenColor.color,
        fontWeight: '400',

        marginTop: 2,
        marginBottom: 8,
        fontSize: 16,

    },

    infoScreen: {
        paddingHorizontal: 13,
        paddingTop: 10,
        paddingBottom: 40,
        backgroundColor: screenColor.bg
    },

    infoImageSection: {
        alignItems: 'center',
    },

    infoImage: {
        width: 250,
        height: 340,


    },
    infoScreenTextView: {
        marginTop: 30,
    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: screenColor.bg,
        color: screenColor.color
    }
});


const landscape = StyleSheet.create({

    infoScreen: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 40,
        backgroundColor: screenColor.bg,
        flex: 1,
        flexDirection: 'row',
    },

    infoImage: {
        width: 170,
        height: 300,
        borderColor: screenColor.color,
    },

    infoScreenTextView: {
        paddingLeft: 14,
        flexShrink: 1,
        paddingTop: 34,

    },

    titleText: {
        color: screenColor.color,
        fontWeight: '600',
        fontSize: 21,
        marginVertical: 1,
        letterSpacing: 1
    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: screenColor.bg,
        color: screenColor.color
    }
})