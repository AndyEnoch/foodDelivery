import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Platform, StatusBar, Dimensions, ScrollView } from 'react-native'
import COLORS from '../assets/colors/colors'
import Categories from '../components/header/Categories'
import Header from '../components/header/Header'
import Item from '../components/menu/Item'
import { RegularText, LightText, ExtraBoldText, MediumText } from '../components/Shared/StyledText'
// import { Divider } from 'react-native-elements'

const screenHeight = Dimensions.get("window").height;

export default function HomeScreen({ navigation }) {



    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <Header />
            <View style={styles.screen}>
                <View  >
                    <MediumText style={{ fontSize: 20 }}>Today's menu</MediumText>
                    <Categories />
                </View>

                <View >
                    <Item />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: 'white'
    },
    screen: {
        marginHorizontal: 15,
        marginTop: 25,

    },

})
