import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import BoldText from './StyledText';
import Icon from 'react-native-vector-icons/Entypo';
import Row from './Row';
import COLORS from '../../assets/colors/colors';

export default function Input(props) {
  const [focus, setFocus] = useState(false);
  return (
    <View style={{ marginTop: 10 }}>
      {props.showLabel ? (
        <BoldText style={{ color: 'grey', fontWeight: '400' }}>
          {props.label}
        </BoldText>
      ) : null}
      <Row
        style={[
          style.main,
          {
            borderWidth: 0.6,
            backgroundColor: "transparent",
            borderColor: focus ? COLORS.green : '#e3e3e3',
          },
        ]}>
        <View style={{ flex: 1 }}>
          <TextInput
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...props}
            style={[
              {
                padding: 13,
                fontSize: 16,
                fontFamily: 'Rubik-Regular',
                ...props.style,
              },
            ]}
          />
        </View>
        {props.loading ? (
          <ActivityIndicator color={COLORS.green} style={{ paddingRight: 10 }} />
        ) : null}
      </Row>
    </View>
  );
}

export function Password(props) {
  const [showPassword, setShowPassword] = useState(true);
  const [focus, setFocus] = useState(false);
  return (
    <View style={{ marginTop: 10 }}>
      {props.showLabel ? <BoldText style={{ fontWeight: '400' }}>{props.label}</BoldText> : null}
      <View
        style={[
          style.main,
          {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 11,
            paddingVertical: Platform.OS === 'android' ? 3 : 13,
            borderWidth: 0.6,
            backgroundColor: "transparent",
            borderColor: focus ? COLORS.green : '#e3e3e3',
          },
        ]}>
        <TextInput
          secureTextEntry={showPassword}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          {...props}
          style={[{ flex: 1, fontSize: 16, fontFamily: 'Rubik-Regular' }]}
        />
        <TouchableOpacity
          onPress={() => {
            setShowPassword(!showPassword);
          }}>
          <Icon
            color="grey"
            name={showPassword ? 'eye-with-line' : 'eye'}
            size={18}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    backgroundColor: '#f2f2f2',
    // borderWidth: 0.4,
    marginTop: 7,
    borderRadius: 5,
    borderColor: '#e3e3e3',
  },
});
