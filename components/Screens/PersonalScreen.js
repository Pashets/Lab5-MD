import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const backColor = "#FFF"
const textColor = "#000"

export default function PersonalScreen() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Дровнін Павло Андрійович{"\n"}
                <Text style={styles.textInnerStyle}>
                Група ІВ-83
                </Text>
                {"\n"}ЗК ІВ-8309
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        backgroundColor: backColor,
    },

    textStyle: {
        letterSpacing: 1,
        fontWeight: '400',
        fontSize: 18,
        textAlign: 'center', 
        color: textColor
    },
    textInnerStyle: {
        letterSpacing: 3

    }
})
