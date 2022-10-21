import React, { useState } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../assets/colors/colors';



export default function Categories() {

    const categories = ['PICK-UP', 'SOFT-DRINKS', 'BAKERY ITEMS', 'FAST-FOOD', 'DRINKS', 'COFFEE & TEA', 'DESSERT'];

    const [categoryIndex, setCategoryIndex] = useState(0)

    return (

        <View style={styles.categoryContainer} >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index}
                        activeOpacity={0.8}
                        onPress={() => setCategoryIndex(index)}
                        style={styles.categoryView}>
                        <Text style={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>


    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        justifyContent: "space-between",
        height: 50,

    },
    categoryText: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold',

    },
    categoryTextSelected: {
        color: COLORS.white,
        padding: 5,
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.green,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',


    },
    categoryView: {
        flex: 2,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 3,
        borderTopColor: '#f5f5f5',
        width: '100%',
        height: 40,
        shadowOffset: {
            width: 0,
            height: 3,

        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }
})




        // <View
        //     style={{
        //         marginTop: 30,

        //     }}>
        //     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        //         {items.map((item, index) => (
        //             <View key={index} style={{ alignItems: 'center', height: 42, width: 45, backgroundColor: 'white', borderRadius: 5, marginHorizontal: 3, justifyContent: 'center' }}>
        //                 <Image source={item.image}
        //                     style={{
        //                         width: 25,
        //                         height: 25,
        //                         resizeMode: 'contain'
        //                     }} />
        //                 <Text style={{
        //                     fontSize: 7,
        //                     fontWeight: '200'
        //                 }}
        //                 >{item.text}
        //                 </Text>
        //             </View>
        //         ))}

        //     </ScrollView>
        // </View>



        // const items = [
//     {
//         image: require("../../assets/deals.png"),
//         text: "Pick-up",
//     },
//     {
//         image: require("../../assets/soft-drink.png"),
//         text: "Soft Drinks",
//     }, {
//         image: require("../../assets/bread.png"),
//         text: "Bakery Items",
//     },
//     {
//         image: require("../../assets/fast-food.png"),
//         text: "Fast Foods",
//     },
//     {
//         image: require("../../assets/deals.png"),
//         text: "Deals",
//     },
//     {
//         image: require("../../assets/coffee.png"),
//         text: "Coffee & Tea",
//     },
//     {
//         image: require("../../assets/desserts.png"),
//         text: "Desserts",
//     },
// ]


