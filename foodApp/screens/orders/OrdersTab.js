import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import COLORS from '../../assets/colors/colors'
import BoldText, { RegularText } from '../../components/Shared/StyledText'

export default function OrdersTabs() {


    const [activeTab, setActiveTab] = useState('DELIVERY')


    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton
                text="DELIVERY"
                btnColor={COLORS.green}
                textColor="grey"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="PICKUP"
                btnColor="grey"
                textColor={COLORS.green}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

export const HeaderButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? COLORS.green : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 10,
            marginTop: 7,
            marginBottom: 5
        }}
            onPress={() => props.setActiveTab(props.text)}>
            <BoldText style={{
                color: props.activeTab === props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: '900'
            }}>
                {props.text}
            </BoldText>
        </TouchableOpacity>
    )

};