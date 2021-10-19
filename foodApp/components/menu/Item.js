import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import COLORS from '../../assets/colors/colors'
import * as Icons from "react-native-heroicons/solid";


export default function Item() {
    return (
        <View >
            <TouchableOpacity>
                <View style={styles.main}>

                    <View style={styles.withinMain}>
                        <View style={styles.imageBoundary}>

                        </View>
                        <View style={styles.textBoundary}>
                            <Text style={styles.topText}>Chicken Burger</Text>
                            <Text style={styles.midText}>Spicy chicken burger {'\n'}Taste great and beyond</Text>
                            <Text style={styles.downText}>Ghs 20</Text>
                        </View>
                        <View style={{ top: 35 }}><Text>  <Icons.PlusCircleIcon style={{ color: COLORS.green }} /></Text></View>
                    </View>


                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.main}>

                    <View style={styles.withinMain}>
                        <View style={styles.imageBoundary}>

                        </View>
                        <View style={styles.textBoundary}>
                            <Text style={styles.topText}>Chicken Burger</Text>
                            <Text style={styles.midText}>Spicy chicken burger {'\n'}Taste great and beyond</Text>
                            <Text style={styles.downText}>Ghs 20</Text>
                        </View>
                        <View style={{ top: 35 }}><Text>  <Icons.PlusCircleIcon style={{ color: COLORS.green }} /></Text></View>
                    </View>


                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.main}>

                    <View style={styles.withinMain}>
                        <View style={styles.imageBoundary}>

                        </View>
                        <View style={styles.textBoundary}>
                            <Text style={styles.topText}>Chicken Burger</Text>
                            <Text style={styles.midText}>Spicy chicken burger {'\n'}Taste great and beyond</Text>
                            <Text style={styles.downText}>Ghs 20</Text>
                        </View>
                        <View style={{ top: 35 }}><Text>  <Icons.PlusCircleIcon style={{ color: COLORS.green }} /></Text></View>
                    </View>


                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.main}>

                    <View style={styles.withinMain}>
                        <View style={styles.imageBoundary}>

                        </View>
                        <View style={styles.textBoundary}>
                            <Text style={styles.topText}>Chicken Burger</Text>
                            <Text style={styles.midText}>Spicy chicken burger {'\n'}Taste great and beyond</Text>
                            <Text style={styles.downText}>Ghs 20</Text>
                        </View>
                        <View style={{ top: 35 }}><Text>  <Icons.PlusCircleIcon style={{ color: COLORS.green }} /></Text></View>
                    </View>


                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.main}>

                    <View style={styles.withinMain}>
                        <View style={styles.imageBoundary}>

                        </View>
                        <View style={styles.textBoundary}>
                            <Text style={styles.topText}>Chicken Burger</Text>
                            <Text style={styles.midText}>Spicy chicken burger {'\n'}Taste great and beyond</Text>
                            <Text style={styles.downText}>Ghs 20</Text>
                        </View>
                        <View style={{ top: 35 }}><Text>  <Icons.PlusCircleIcon style={{ color: COLORS.green }} /></Text></View>
                    </View>


                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.main}>

                    <View style={styles.withinMain}>
                        <View style={styles.imageBoundary}>

                        </View>
                        <View style={styles.textBoundary}>
                            <Text style={styles.topText}>Chicken Burger</Text>
                            <Text style={styles.midText}>Spicy chicken burger {'\n'}Taste great and beyond</Text>
                            <Text style={styles.downText}>Ghs 20</Text>
                        </View>
                        <View style={{ top: 35 }}><Text>  <Icons.PlusCircleIcon style={{ color: COLORS.green }} /></Text></View>
                    </View>


                </View>
            </TouchableOpacity>


        </View >
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.white,
        width: '100%',
        borderRadius: 5,
        height: 110,
        marginBottom: 12
    },
    withinMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    imageBoundary: {
        height: 90,
        width: 80,
        backgroundColor: COLORS.red,
        borderRadius: 10
    },
    textBoundary: {
        paddingRight: 30,
        justifyContent: 'space-between',
        height: 90
    },
    topText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    midText: {
        color: 'grey',
        fontSize: 13
    },
    downText: {
        color: COLORS.green,
        fontWeight: 'bold',
        fontSize: 18
    }

})
