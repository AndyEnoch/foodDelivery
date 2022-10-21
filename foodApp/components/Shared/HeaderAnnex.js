import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, SafeAreaView, StyleSheet, TouchableOpacity, Platform, TextInput, StatusBar } from 'react-native'
import BoldText, { RegularText } from './StyledText';
import SimpleLinesIcons from 'react-native-vector-icons/Feather';
import COLORS from '../../assets/colors/colors';

export default function HeaderAnnex({

    title,
    titleAlign,
    child = false,
    parent = false,
    notification = false,
    transparent = false,
    modal = false,
    border = false,
    subtitle,
    additional = () => null,
    navigation }) {



    return (

        <SafeAreaView style={styles.androidSafeArea}>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 15,
                    backgroundColor: transparent ? 'white' : 'white',
                    paddingTop: !modal
                        ? Platform.OS === 'android'
                            ? 10
                            : StatusBar.currentHeight + 10
                        : 15,
                    borderBottomWidth: border ? 0.5 : 0,
                    borderBottomColor: '#e3e3e3',
                }}>
                <StatusBar backgroundColor={COLORS.green} barStyle="dark-content" />
                {child || parent ? (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ paddingRight: 10 }}
                        onPress={() => {
                            navigation.canGoBack() && navigation.goBack();
                        }}>
                        <SimpleLinesIcons
                            size={20}
                            name={modal ? 'arrow-down' : 'arrow-left'}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
            <View >
                <RegularText
                    style={{
                        fontSize: child ? 14 : 18,
                        textAlign: titleAlign ? titleAlign : 'left',
                        paddingBottom: 5
                    }}>
                    {title}
                </RegularText>
                {subtitle && (
                    <RegularText
                        style={{
                            color: 'grey',
                            fontSize: 12,
                            textAlign: titleAlign ? titleAlign : 'left',
                        }}>
                        {subtitle}
                    </RegularText>
                )}
            </View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
    }
})