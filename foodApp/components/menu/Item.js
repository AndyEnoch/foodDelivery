import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import COLORS from '../../assets/colors/colors'
import * as Icons from "react-native-heroicons/solid";
import { CartContext } from '../../context/CartContext';







const screenHeight = Dimensions.get("window").height;

export default function Item() {

    const [cart, setCart] = useContext(CartContext);


    const list = [
        {
            id: 1,
            topText: 'Chicken Burger',
            midText1: 'Spicy chicken burger ',
            midText2: 'Taste great and beyond',
            price: 39.99,
            img: require('../../assets/bg1.jpg'),
            count: 1

        },
        {
            id: 2,
            topText: 'Pizza',
            midText1: 'Spicy chicken burger ',
            midText2: 'Taste great and beyond',
            price: 39.99,
            img: require('../../assets/bg2.jpg'),
            count: 1

        },
        {
            id: 3,
            topText: 'Variety',
            midText1: 'Spicy chicken burger ',
            midText2: 'Taste great and beyond',
            price: 9.99,
            img: require('../../assets/illustrate.jpg'),
            count: 1

        },
        {
            id: 4,
            topText: 'Chicken Burger',
            midText1: 'Spicy chicken burger ',
            midText2: 'Taste great and beyond',
            price: 39.99,
            img: require('../../assets/back2.jpg'),
            count: 1

        },
        {
            id: 5,
            topText: 'Chicken Burger',
            midText1: 'Spicy chicken burger ',
            midText2: 'Taste great and beyond',
            price: 39.99,
            img: require('../../assets/bg1.jpg'),
            count: 1

        }, {
            id: 6,
            topText: 'Chicken Burger',
            midText1: 'Spicy chicken burger ',
            midText2: 'Taste great and beyond',
            price: 39.99,
            img: require('../../assets/bg1.jpg'),
            count: 1

        },
        {
            id: 7,
            topText: 'Chicken Burger',
            midText1: 'Spicy chicken burger ',
            midText2: 'Taste great and beyond',
            price: 39.99,
            img: require('../../assets/bg1.jpg'),
            count: 1

        }, {
            id: 8,
            topText: 'Chicken Burger',
            midText1: 'Spicy chicken burger ',
            midText2: 'Taste great and beyond',
            price: 39.99,
            img: require('../../assets/bg1.jpg'),
            count: 1

        },
    ]


    const Menu = ({ list }) => {

        const addToCart = () => {
            const item = { key: list.id, image: list.img, name: list.topText, description: list.midText1, description2: list.midText2, price: list.price, count: list.count };
            setCart(curr => [...curr, item]);
            console.log(cart)

        }

        return (
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
                            source={list.img} />
                    </View>
                    <View style={styles.textBoundary}>
                        <Text style={styles.topText}>{list.topText}</Text>
                        <Text style={styles.midText}>{list.midText1} {'\n'}{list.midText2}</Text>
                        <Text style={styles.downText}>{list.price}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={addToCart}>
                        <View style={{ top: 35 }}><Text>  <Icons.PlusCircleIcon style={{ color: COLORS.green }} /></Text></View>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }

    return (
        <View  >

            <FlatList
                showsVerticalScrollIndicator={false}
                data={list}
                renderItem={({ item }) => <Menu list={item} />}
                style={{ height: screenHeight / 1 }}
            />

        </View >
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.white,
        width: '95%',
        paddingRight: '15',
        borderTopWidth: 3,
        borderTopColor: '#f5f5f5',
        borderRadius: 5,
        height: 110,
        justifyContent: 'center',
        marginHorizontal: 6,
        marginBottom: 15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,

    },
    withinMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,


    },
    imageBoundary: {
        height: 90,
        width: 80,
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
