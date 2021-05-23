import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import * as data from '../../BooksList.json';
import { imageSwitch } from "../../global/imageSwitch";

export let DATA = data.books
const separation = 'gray'
const standartBlue = '#2379DD'
const screenColor = {
    bg: "#fff",
    color: '#46413B',
}
const searchColor = {
    bg: '#EFEFEF',
    color: '#000',
}
const getItemCount = (data) => data.length;
const getItem = (data, index) => {
    return ({
        id: `${data[index].isbn13}`,
        title: `${data[index].title}`,
        subtitle: `${data[index].subtitle}`,
        price: `${data[index].price}`,
        image: `${data[index].image}`
    })
};

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function BookScreen({ navigation }) {

    const [dimensions, setDimensions] = useState({ window, screen });
    const [filteredData, setFilteredData] = useState([]);
    const [fullData, setFullData] = useState([]);
    const [search, setSearch] = useState('');

    const [reloade, setReloade] = useState(false);

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
            return portrait
        } else {
            return landscape
        }
    }

    useEffect(() => {
        setFilteredData(DATA);
        setFullData(DATA);
    }, []);

    const searchFunction = (text) => {
        setFilteredData(DATA);
        setFullData(DATA);
        if (text) {
            const newData = fullData.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            setFilteredData(fullData);
            setSearch(text);
        }
    };

    const LeftActions = () => {
        return (
            <View style={portrait.rightAction}>
                <Text style={portrait.actionText}>Delete</Text>
            </View>
        )
    }

    function Item({ id, title, subtitle, price, image }) {
    
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={
                    () => navigation.navigate('BookInfo', {
                        id: id,
                        title: title,
                        subtitle: subtitle,
                    })}>
                <Swipeable
                    renderRightActions={LeftActions}
                    onSwipeableRightOpen={() => {
                        const object = DATA.findIndex(elem => elem.isbn13 === id)
                        DATA.splice(object, 1);
                        searchFunction(search)
                        setReloade(!reloade)
                    }}>
                    <View style={portrait.item}>
                        <View style={portrait.imageViev}>
                            <Image
                                style={orientation().image}
                                source={imageSwitch(image)}
                            />
                        </View>
                        <View style={orientation().textViev}>
                            <Text style={portrait.title}>{title}</Text>
                            <Text style={portrait.details}>{subtitle}</Text>
                            <Text style={portrait.details}>{price}</Text>
                        </View>
                    </View>
                </Swipeable>
            </TouchableOpacity>
        )
    }
   
    
    return (
        <SafeAreaView style={portrait.container}>
            {
                React.useLayoutEffect(() => {
                    navigation.setOptions({
                        headerRight: () => (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => { navigation.navigate('AddBook')}}>
                                <MaterialCommunityIcons style={portrait.addIcon} name="plus" color={'#808082'} size={30} />
                            </TouchableOpacity>
                        ),
                    });
                }, [navigation])
            }
            <View style={portrait.sectionStyle}>
                <MaterialCommunityIcons style={portrait.searchIcon} name="magnify" color={'#F7F7F6'} size={26} />
                <TextInput
                    style={portrait.textInputStyle}
                    placeholder={'Пошук'}
                    placeholderTextColor={searchColor.color}
                    clearButtonMode={'while-editing'}
                    onChangeText={(text) =>
                        searchFunction(text)}
                    value={search}
                />
            </View>

            <VirtualizedList
                data={filteredData}
                ItemSeparatorComponent={() => {return(<View style={portrait.separator}/>)}}
                renderItem={({ item }) => (
                    <Item id={item.id} title={item.title} subtitle={item.subtitle} price={item.price} image={item.image} />
                )}
                getItemCount={getItemCount}
                getItem={getItem}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
            />

        </SafeAreaView>
    );
}


const portrait = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: screenColor.bg,
    },

    separator: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: separation,
        width: '92%',
        height: 0.5,
    },

    item: {
        flexDirection: 'row',
        backgroundColor: screenColor.bg,
        height: 'auto',
        justifyContent: 'center',
        marginHorizontal: 0,
        padding: 20,
    },

    title: {
        fontSize: 18,
        color: screenColor.color
    },

    image: {
        width: 90,
        height: 150,
        borderColor: screenColor.color,    
    },

    imageViev: {
        flex: 2
    },

    textViev: {
        flex: 10,
        marginLeft: 48,
        marginTop: 16,

    },


    details: {
        fontSize: 16,
        marginTop: 10,
        color: screenColor.color
    },

    // Search style section

    textInputStyle: {
        flex: 1,
        height: 40,
        margin: 2,
        borderRadius: 10,
        color: searchColor.color,
          
    },

    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: searchColor.bg,

        height: 40,
        borderRadius: 12,
        marginTop: 10,
        marginHorizontal: 6,
        marginBottom: 3,
    },

    searchIcon: {
        margin: 8,
        color: searchColor.color
    },


    infoImage: {
        width: 380,
        height: 600,

    },

    rightAction: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',

    },

    actionText: {
        color: '#fff',
        padding: 20,
        textAlign: 'right'
    },

    addIcon: {
        textAlign: 'right',
        marginHorizontal: 16,
        marginBottom: 5,
        marginTop: 2,
        color: standartBlue
    }
});

const landscape = StyleSheet.create({
    textViev: {
        marginRight: 20,
        flex: 10,
        paddingTop: 15
    },

    image: {
        width: 90,
        height: 145, 
        borderColor: screenColor.color,
    },

})
