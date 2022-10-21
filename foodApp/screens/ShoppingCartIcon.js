import React, { useContext, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity, Touchable } from 'react-native'
import { CartContext } from '../context/CartContext'
import COLORS from '../assets/colors/colors';
import * as Icons from "react-native-heroicons/solid";
import { RegularText } from '../components/Shared/StyledText';


const screenHeight = Dimensions.get("window").height;


export default function shoppingCartIcon() {

    const [cart, setCart] = useContext(CartContext);


    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

    // const cartName = this.cart.data.map(function (data, id) {
    //     return key = { id }{ data.name }

    // }

    // (card_id) => {
    //     setChange(change =>
    //         change.map((item) =>
    //             card_id === item.id ? { ...item, count: item.count++ } : item
    //         ));
    // }



    // const [count, setCount] = useState(qty);

    // count > 1 ? setCount(count - 1) : 1

    // setCount(count + 1)

    // const handleIncrement = (card_id) => {
    //     setChange(change =>
    //         change.map((item) =>
    //             card_id === cart.id ? { ...cart, count: cart.count + 1 } : item
    //         ));
    // }



    return (
        <View>


            <FlatList
                showsVerticalScrollIndicator={false}
                data={cart}
                renderItem={({ item }) =>

                    <View style={styles.main}>

                        <View style={styles.withinMain}>
                            <View style={styles.imageBoundary}>
                                <Image style={{
                                    flex: 1,
                                    resizeMode: 'cover',
                                    borderRadius: 10,
                                    height: 90,
                                    width: 80,
                                }}
                                    imageStyle={{
                                        width: 80
                                    }}
                                    source={item.image} />
                            </View>
                            <View style={styles.textBoundary}>
                                <Text style={styles.topText}>{item.name}</Text>
                                <Text style={styles.midText}>{item.description} {'\n'}{item.description2}</Text>
                                <Text style={styles.downText}>{item.price}</Text>
                            </View>

                            <View
                                style={{
                                    height: 25,
                                    width: 90,
                                    backgroundColor: COLORS.green,
                                    top: 32, right: 40,
                                    borderRadius: 5,
                                    flexDirection: "row",
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <TouchableOpacity onPress={() => item.count--}>
                                    <Text ><Icons.MinusIcon style={{ color: COLORS.white, paddingTop: 3 }} size={18} /></Text>
                                </TouchableOpacity>

                                <RegularText
                                    style={{
                                        color: COLORS.white,
                                        alignSelf: 'center',
                                        fontSize: 18,
                                        marginHorizontal: 15
                                    }}

                                >{item.count}</RegularText>

                                <TouchableOpacity onPress={() => item.count++}>
                                    <Text><Icons.PlusIcon style={{ color: COLORS.white, paddingTop: 3 }} size={18} /></Text>
                                </TouchableOpacity>
                            </View>

                        </View>


                    </View>
                }
                style={{ height: screenHeight / 1 }}
            />
        </View >
    )


}

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.white,
        width: '90%',
        borderRadius: 10,
        height: 100,
        marginBottom: 12,
        alignSelf: 'center'


    },
    withinMain: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,

    },
    imageBoundary: {
        height: 90,
        width: 80,
        borderRadius: 10,
        marginRight: 8
    },
    textBoundary: {
        height: 90,
        paddingRight: 20

    },
    topText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    midText: {
        color: 'grey',
        fontSize: 12
    },
    downText: {
        color: COLORS.green,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    }
})







