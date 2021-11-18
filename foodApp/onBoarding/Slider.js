import React, { Component } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { RenderItem } from 'react-native'
import BoldText, { RegularText } from '../components/Shared/StyledText'
import Item from '../components/menu/Item'
import COLORS from '../assets/colors/colors'

const slider = [
    {
        id: 1,
        title: 'Delicious Food',
        text: 'Order meals and enjoy food from Basement Plus Enjoy fingerlicking meals with taste you can never forget',
        img: require('../assets/food.jpeg'),


    },
    {
        id: 2,
        title: 'Fast Delivery',
        text: 'Order meals and enjoy food from Basement Plus Delivery is fast and our delivery personnels are great professionals that deliver on time',
        img: require('../assets/undraw_On_the_way_re_swjt.png'),


    },
    {
        id: 3,
        title: 'Easy payment',
        text: 'Order meals and enjoy food from Basement Plus Payment has been facilatated and made easy for all customers who want either delivery or  PickUp option',
        img: require('../assets/pay.png'),
        login: 'Sign-up / Login'
    }


]


export default class Slider extends Component {


    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, marginBottom: 20 }}>
                <Image
                    source={item.img}
                    style={{
                        resizeMode: 'contain',
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').width - 28

                    }}
                />

                <BoldText
                    style={{
                        alignSelf: 'center',
                        fontSize: 40,
                        color: COLORS.green,
                        paddingTop: " 5%",
                        fontWeight: 'bold'
                    }}
                >{item.title}</BoldText>
                <RegularText
                    style={{
                        marginHorizontal: 30,
                        fontSize: 20,
                        textAlign: 'center',
                        paddingTop: '10%',
                        opacity: 0.5,
                        color: '#283542',
                    }}>{item.text}</RegularText>


                <TouchableOpacity style={{
                    backgroundColor: COLORS.green,
                    height: item.login ? 60 : 0,
                    width: '60%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: '20%',
                    position: 'relative',
                    bottom: /**Dimensions.get('window').height > 350 && Dimensions.get('window').height < 400 ? -45 : **/Dimensions.get('window').height - '25%',
                    borderRadius: 5
                }}
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '800',
                        color: 'white'
                    }}>{item.login}</Text>
                </TouchableOpacity>


            </View>
        )
    }




    render() {
        return (
            <View
                style={{
                    height: '100%',
                    backgroundColor: 'white'
                }}>
                <AppIntroSlider
                    renderItem={this.renderItem}
                    data={slider}
                    activeDotStyle={{
                        backgroundColor: COLORS.green,
                        width: 30
                    }}


                />

            </View>
        )
    }

}
