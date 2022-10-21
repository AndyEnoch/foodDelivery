import React, { useContext } from 'react'

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import COLORS from '../assets/colors/colors';
import ShoppingCartIcon from './ShoppingCartIcon';
import { RegularText, LightText, ExtraBoldText, MediumText } from '../components/Shared/StyledText';
import { CartContext } from '../context/CartContext';





export default function CartScreen({ navigation }) {

    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        const item = { key: cart.id, image: cart.img, name: cart.topText, description: cart.midText1, description2: cart.midText2, price: cart.price, count: cart.count };
        setCart(curr => [...curr, item]);
        console.log(cart)

    }

    const image = require('../assets/cart.jpeg')
    return (
        <View style={styles.screen}>
            <ImageBackground source={image} resizeMode="cover" style={{ height: '100%', }} >

                <View style={styles.within}>
                    <View style={{ marginBottom: 20 }}>
                        <ExtraBoldText
                            style={{
                                fontSize: 25
                            }}
                        >Shopping Cart
                        </ExtraBoldText>
                    </View>
                    <ShoppingCartIcon />

                </View>
                <View style={styles.checkout}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: COLORS.green,
                        height: 50,
                        borderRadius: 5
                    }}
                        onPress={() => { addToCart }}>
                        <RegularText
                            style={{
                                fontSize: 20,
                                color: COLORS.white
                            }}
                        >CHECKOUT</RegularText>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {

        flex: 1
    },
    within: {
        margin: 20,
        overflow: 'hidden',
        height: '83%'



    },
    checkout: {
        marginTop: 10,
        position: "absolute",
        bottom: 30,
        left: '5%',
        right: '5%',
        width: '90%',

    }
})
