import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, ImageBackground } from 'react-native'
import COLORS from '../../assets/colors/colors'

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Categories from './Categories';
import { RegularText, MediumText } from '../Shared/StyledText';
import BoldText from '../Shared/StyledText';


// const { width, height } = Dimensions.get(window);

const image = require('../../assets/illustrate.jpg')

export default function Header() {

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={{ height: '100%' }} imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, alignItems: 'center' }}>
                <View style={styles.top}>
                    <View style={{ paddingTop: 6 }}>
                        <BoldText style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: '800'
                        }}>The Basement Plus Restaurant</BoldText>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Ionicons name="ios-notifications-outline" size={35} color={COLORS.white} />
                            <View style={styles.counter}>
                                <Text style={{ color: COLORS.white }}>1</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.searchContainerAnnex}>
                        <AntDesign name="search1" size={20} color={COLORS.dark} style={{ marginHorizontal: 20, }} />
                        <TextInput placeholder="Search for a food" style={styles.input} />
                    </View>

                </View>


            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '25%',
        width: '100%',


    },
    intro: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    welcome: {
        color: COLORS.main,
        fontSize: 15,
        fontWeight: '800'
    },
    counter: {
        position: 'absolute',
        width: 16,
        height: 16,
        backgroundColor: COLORS.secondary,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: -2,
        top: 3,

    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
        position: 'absolute',
        bottom: -20,
        left: 10,
        right: 10,

    },
    searchContainerAnnex: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        height: 40,
        borderRadius: 7,
        width: '90%',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    sort: {
        backgroundColor: COLORS.white,
        height: 40,
        width: '15%',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        flex: 2,
        borderRadius: 10

    },
    input: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.dark,
        flex: 1,
        height: 40,
    },
    slider: {
        flex: 3,
        width: '100%'
    }
})