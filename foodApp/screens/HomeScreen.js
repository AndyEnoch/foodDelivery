import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native'
import COLORS from '../assets/colors/colors'
import Categories from '../components/header/Categories'
import Header from '../components/header/Header'
import Item from '../components/menu/Item'

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <Header />
            <View style={styles.screen}>
                <View >
                    <Text style={styles.heading}>Today's menu</Text>
                    <Categories />
                </View>
                <View>
                    <Item />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                    <Text>move</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    screen: {
        marginHorizontal: 15,
        marginTop: 40,
    },

    heading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    }
})
