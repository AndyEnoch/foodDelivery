import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, SafeAreaView, StyleSheet, TouchableOpacity, Platform, TextInput, StatusBar } from 'react-native'
import BoldText, { RegularText } from '../components/Shared/StyledText';
import SimpleLinesIcons from 'react-native-vector-icons/Feather';
import COLORS from '../assets/colors/colors';
import Input, { Password } from '../components/Shared/Input';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Shared/Button';
import Row from '../components/Shared/Row';

export default function SignUp({ navigation }) {


    const [callingCode, setCallingCode] = useState('233');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const [focus, setFocus] = useState(false);

    return (

        <KeyboardAvoidingView
            style={{
                backgroundColor: 'white',
                flex: 1
            }}>
            <SafeAreaView style={styles.androidSafeArea}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ paddingRight: 10 }}
                    onPress={() => {
                        navigation.canGoBack() && navigation.goBack();
                    }}>
                    <SimpleLinesIcons
                        size={20}
                        name={'arrow-left'}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        paddingTop: '20%',
                        alignSelf: 'center'
                    }}>
                    <RegularText
                        style={{
                            fontSize: 17
                        }}>Welcome To The Basement Plus Restaurant</RegularText>
                </View>

                <View
                // style={{
                //     paddingTop: '10%',
                //     height: 40,
                //     width: '100%',
                //     marginBottom: 12,
                //     borderColor: COLORS.green,
                //     borderWidth: 1
                // }}
                >
                    <Input
                        multiline={true}
                        placeholder="Full Name"
                        style={{
                            minHeight: 50,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 5,

                        }}

                    />
                    <Input
                        onBlur={() => setFocus(false)}
                        onFocus={() => setFocus(true)}
                        maxLength={9}
                        keyboardType="number-pad"
                        style={{
                            flex: 1,
                            padding: 10,
                            fontSize: 17,
                            fontFamily: 'Rubik-Regular',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 5,

                        }}
                        placeholder="+233 54 832 0232"
                    />

                    <Password
                        placeholder="Password"
                        style={{
                            minHeight: 50,
                            flex: 1,
                            padding: 10,
                            fontSize: 17,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 5,

                        }}
                        onChangeText={t => setPassword(t)}

                    />

                    <Password
                        placeholder="Confirm Password"
                        style={{
                            minHeight: 50,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 5,

                        }}
                    />

                    <Button
                        title="Sign Up"
                        onPress={() => navigation.navigate('Home')}
                        style={{
                            marginTop: '13%',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 5,

                        }}
                    />

                    <Row style={{ justifyContent: 'center' }}>
                        <RegularText
                            style={{
                                alignSelf: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            Already a member?{' '}
                        </RegularText>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{ paddingBottom: -4 }}
                            onPress={() => {
                                navigation.navigate('SignIn');
                            }}>
                            <BoldText style={{
                                color: COLORS.green,
                                fontSize: 15
                            }}
                            >Login here</BoldText>
                        </TouchableOpacity>
                    </Row>

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        margin: 20
    }
})