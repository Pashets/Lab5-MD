import React from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';

const borderColor = '#fff'

const PictureSchema = ({ images, width, height }) => {

    const imageBoxStyle = (size = 1) => {
        if (size === 1) {
            return (
                {
                    width: width,
                    height: height,
                    borderWidth: 1,
                    borderColor: borderColor,
                }
            )
        } else if (size === 2) {
            return (
                {
                    width: width * 3,
                    height: height * 3,
                    borderWidth: 1,
                    borderColor: borderColor,
                }
            )
        }
    }

    const ImageBox = (uri, style = imageBoxStyle()) => (
        <View style={style}>
            <Image
                style={styles.imageStyle}
                source={uri}
            />
        </View>
    );


    return (
        <View>
            <View style={styles.row}>
                <View style={styles.column}>
                    {images[0] && ImageBox(images[0])}
                    {images[3] && ImageBox(images[3])}
                    {images[5] && ImageBox(images[5])}
                </View>
                {images[1] && ImageBox(images[1], imageBoxStyle(2))}
                <View style={styles.column}>
                    {images[2] && ImageBox(images[2])}
                    {images[4] && ImageBox(images[4])}
                    {images[6] && ImageBox(images[6])}
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
    },

    column: {
        flexDirection: "column",
    },

    imageStyle: {
        height: "100%",
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default PictureSchema
