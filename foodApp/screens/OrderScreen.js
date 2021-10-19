import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'

export default function OrderScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <View style={styles.screen}>
                <Text>Order</Text>
                <TouchableOpacity onPress={() => navigation.goBack('Home')}>
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
        marginHorizontal: 15
    }
})
