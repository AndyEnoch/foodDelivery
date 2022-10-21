import React from 'react'
import { View, Text, Platform, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { RegularText, LightText, ExtraBoldText, MediumText } from '../components/Shared/StyledText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import COLORS from '../assets/colors/colors'
import * as Icons from "react-native-heroicons/solid";


export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <StatusBar backgroundColor={COLORS.green} barStyle="dark-content" />
            <View
                style={{
                    marginHorizontal: 10,
                    flex: 1
                }}>
                <View style={styles.top}>
                    <MediumText style={{
                        fontSize: 20,
                        fontWeight: '700'
                    }}>Profile</MediumText>
                </View>
                <View style={styles.middle}>
                    <View style={styles.inMiddle}>
                        <View style={styles.imageBoundary}></View>

                        <View style={{ justifyContent: 'center', }}>
                            <RegularText
                                style={{
                                    fontSize: 18,
                                    fontWeight: '400',
                                    marginBottom: 10
                                }}> Nyarko Betrand</RegularText>
                            <MediumText
                                style={{
                                    color: 'gray',
                                    fontWeight: '800'
                                }}> +233264774091</MediumText>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: " 30%" }}>
                        <Ionicons name="mail-outline" size={21} style={{
                            color: 'gray',
                            fontWeight: 'bold',
                            marginRight: 2,

                        }} />
                        <MediumText
                            style={{
                                color: 'gray',
                                fontWeight: '800',
                                fontSize: 16
                            }}>Betrand2354@gmail.com</MediumText>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.touch}>
                        <View style={styles.touchContent}>
                            <RegularText
                                style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                }}>Account Info</RegularText>

                            <Icons.ChevronRightIcon style={{ color: 'black' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch}>
                        <View style={styles.touchContent}>
                            <RegularText
                                style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                }}>Saved Addresses</RegularText>

                            <Icons.ChevronRightIcon style={{ color: 'black' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch}>
                        <View style={styles.touchContent}>
                            <RegularText
                                style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                }}>History</RegularText>

                            <Icons.ChevronRightIcon style={{ color: 'black' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch}>
                        <View style={styles.touchContent}>
                            <RegularText
                                style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                }}>Notifications</RegularText>

                            <Icons.ChevronRightIcon style={{ color: 'black' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch}>
                        <View style={styles.touchContent}>
                            <RegularText
                                style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                }}>Language</RegularText>

                            <Text
                                style={{ color: COLORS.green }}>English</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch}>
                        <View style={styles.touchContent}>
                            <RegularText
                                style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                }}>Settings</RegularText>

                            <Icons.ChevronRightIcon style={{ color: 'black' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            marginTop: '6%'
                        }}>
                        <View>
                            <RegularText
                                style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                    color: COLORS.green
                                }}>Logout</RegularText>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: 'white'
    },
    top: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center'

    },
    middle: {
        flex: 1.8
    },
    inMiddle: {
        flexDirection: 'row',
        marginBottom: 10
    },
    imageBoundary: {
        height: 90,
        width: 90,
        borderRadius: 10,
        backgroundColor: 'blue',
        marginRight: 10
    },
    bottom: {
        justifyContent: 'space-between',
        flex: 5,
    },
    touch: {
        height: 40,
        width: '100%',
        backgroundColor: 'white',
        borderTopWidth: 3,
        borderTopColor: '#f5f5f5',
        marginBottom: 12,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    },
    touchContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        marginHorizontal: 5
    }

})
