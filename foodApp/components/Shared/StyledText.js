import React from 'react';
import { Text } from 'react-native';

export default function BoldText(props) {
    return (
        <Text {...props} style={[{ ...props.style, fontFamily: 'Rubik-Bold' }]} />
    );
}

export function ExtraBoldText(props) {
    return (
        <Text
            {...props}
            style={[{ ...props.style, fontFamily: 'Rubik-Black', fontWeight: 'bold' }]}
        />
    );
}

export function RegularText(props) {
    return (
        <Text {...props} style={[{ fontFamily: 'Rubik-Regular', ...props.style }]} />
    );
}

export function MediumText(props) {
    return (
        <Text {...props} style={[{ fontFamily: 'Rubik-Medium', ...props.style }]} />
    );
}

export function SemiBoldText(props) {
    return (
        <Text {...props} style={[{ fontFamily: 'Rubik-SemiBold', ...props.style }]} />
    );
}

export function LightText(props) {
    return (
        <Text {...props} style={[{ fontFamily: 'Rubik-Light', ...props.style }]} />
    );
}
