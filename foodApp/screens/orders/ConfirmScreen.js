import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, SafeAreaView, FlatList, TextInput, Dimensions, ScrollView } from 'react-native'
import { CartContext } from '../../context/CartContext'
import OrdersTabs from './OrdersTab';
import { HeaderButton } from './OrdersTab';
import BoldText, { ExtraBoldText, RegularText } from '../../components/Shared/StyledText';
import { Entypo } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Divider } from 'react-native-elements';
import COLORS from '../../assets/colors/colors';
import Input from '../../components/Shared/Input';

export default function ConfirmScreen() {

    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0)
    let delivery = 10
    const alltogether = totalPrice + delivery
    return (
        <View
            style={{
                flex: 1
            }}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <OrdersTabs />
                <View
                    style={{
                        marginHorizontal: 10,
                    }}>
                    <ExtraBoldText
                        style={{
                            fontSize: 18,
                            marginBottom: 10,
                        }}>Delivery</ExtraBoldText>
                    <View
                        style={styles.display}>
                        <Entypo name="location-pin" size={25} color="grey"
                            style={{

                                alignSelf: 'center',
                                marginLeft: 10
                            }} />

                    </View>

                    <View
                        style={styles.display}>
                        <Ionicons name="phone-portrait-outline" size={25} color="grey"
                            style={{
                                // width: '20%',
                                alignSelf: 'center',
                                marginLeft: 10
                            }} />
                        <TextInput
                            style={{
                                height: '100%',
                                width: '90%',

                                fontSize: 15
                            }}
                            keyboardType={'number-pad'}
                            maxLength={14}
                            placeholder="+233 264 774 091" />
                    </View>
                    <Divider orientation="horizontal"
                        style={{
                            marginTop: '5%',
                            marginBottom: '2%',
                        }} />

                    <ExtraBoldText
                        style={{
                            fontSize: 18,
                            marginBottom: 10,
                        }}>Item Details</ExtraBoldText>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 5
                        }}>
                        <BoldText
                            style={{
                                fontSize: 17
                            }}>Item</BoldText>
                        <BoldText
                            style={{
                                fontSize: 17
                            }}>Quantity</BoldText>
                        <BoldText
                            style={{
                                fontSize: 17
                            }}>Price</BoldText>
                    </View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cart}
                        style={{
                            maxHeight: 80
                        }}
                        renderItem={({ item }) =>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                <RegularText
                                    style={{
                                        fontSize: 14
                                    }}
                                >{item.name}</RegularText>
                                <RegularText
                                    style={{
                                        fontSize: 14,
                                        position: 'absolute',
                                        left: '50%',

                                    }}
                                >{item.count}</RegularText>
                                <RegularText
                                    style={{
                                        fontSize: 14
                                    }}
                                >{item.price}</RegularText>
                            </View>
                        }
                    />


                    <Divider orientation="horizontal"
                        style={{
                            marginTop: '5%',
                            marginBottom: '2%',
                        }} />

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 5
                        }}>
                        <RegularText
                            style={{
                                fontSize: 19
                            }}
                        >Item Total</RegularText>
                        <RegularText
                            style={{
                                fontSize: 19,
                                fontWeight: 'bold',
                                color: COLORS.green
                            }}
                        >GHc {totalPrice}</RegularText>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 5
                        }}>
                        <RegularText
                            style={{
                                fontSize: 18
                            }}
                        >Delivery Fee</RegularText>
                        <RegularText
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',

                            }}
                        >GHc {delivery}</RegularText>
                    </View>

                    <Divider orientation="horizontal"
                        style={{
                            marginTop: '2%',
                            marginBottom: '2%',
                        }} />

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 5
                        }}>
                        <ExtraBoldText
                            style={{
                                fontSize: 22,
                                fontWeight: 'bold'
                            }}
                        >Total</ExtraBoldText>
                        <ExtraBoldText
                            style={{
                                fontSize: 22,
                                fontWeight: 'bold',

                            }}
                        >GHc {alltogether}</ExtraBoldText>
                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: COLORS.green,
                        height: 40,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: Dimensions.get('window').height > 350 ? 550 : '100%',
                        borderRadius: 5
                    }}
                        onPress={() => null}>
                        <RegularText style={{
                            fontSize: 20,
                            fontWeight: '800',
                            color: 'white'
                        }}>Confirm Order</RegularText>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    display: {
        height: 40,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderTopWidth: 3,
        borderTopColor: '#f5f5f5',
        flexDirection: 'row',
        // justifyContent: 'space-between',

        marginBottom: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    }
})
