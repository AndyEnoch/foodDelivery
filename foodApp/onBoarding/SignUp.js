import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, SafeAreaView, StyleSheet, TouchableOpacity, Platform, TextInput, StatusBar, Dimensions } from 'react-native'
import BoldText, { RegularText } from '../components/Shared/StyledText';
import SimpleLinesIcons from 'react-native-vector-icons/Feather';
import COLORS from '../assets/colors/colors';
import Input, { Password } from '../components/Shared/Input';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Shared/Button';
import Row from '../components/Shared/Row';

export default function SignUp({ navigation }, props) {


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
                    {/* <Input
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

                    /> */}

                    <View
                        style={{
                            height: 50,
                            width: '100%',
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            borderTopWidth: 3,
                            borderTopColor: '#f5f5f5',
                            flexDirection: 'row',
                            marginBottom: 15,
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,

                        }}>
                        <Ionicons name="person-outline" size={25} color="grey"
                            style={{
                                // width: '20%',
                                alignSelf: 'center',
                                marginLeft: 10
                            }} />
                        <TextInput
                            style={{
                                height: '100%',
                                width: '90%',
                                fontSize: 15,
                                marginLeft: 5
                            }}
                            placeholder="Full Name"
                        />
                    </View>
                    <View
                        style={{
                            height: 50,
                            width: '100%',
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            borderTopWidth: 3,
                            borderTopColor: '#f5f5f5',
                            flexDirection: 'row',
                            marginBottom: 15,
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,

                        }}>
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

                                fontSize: 15,
                                marginLeft: 5
                            }}
                            keyboardType={'number-pad'}
                            maxLength={14}
                            placeholder="+233 264 774 091"
                        />
                    </View>

                    {/* <Password
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

                    /> */}
                    <View
                        style={{
                            height: 50,
                            width: '100%',
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            borderTopWidth: 3,
                            borderTopColor: '#f5f5f5',
                            flexDirection: 'row',
                            marginBottom: 15,
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,

                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                marginLeft: 10
                            }}>
                            <Ionicons name="lock-closed-outline" size={25} color="grey"
                                style={{
                                    alignSelf: 'center',

                                }} />
                        </View>
                        <View
                            style={{
                                width: '89%',
                                justifyContent: 'center',
                                paddingLeft: 5
                            }}>
                            <Password
                                placeholder="Password"
                                style={{
                                    borderWidth: 0,

                                }}
                                onChangeText={t => setPassword(t)}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            height: 50,
                            width: '100%',
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            borderTopWidth: 3,
                            borderTopColor: '#f5f5f5',
                            flexDirection: 'row',
                            marginBottom: 15,
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,

                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                marginLeft: 10
                            }}>
                            <Ionicons name="lock-closed-outline" size={25} color="grey"
                                style={{
                                    alignSelf: 'center',

                                }} />
                        </View>
                        <View
                            style={{
                                width: '89%',
                                justifyContent: 'center',
                                paddingLeft: 5
                            }}>
                            <Password
                                placeholder="Confirm Password"
                                style={{
                                    borderWidth: 0,

                                }}
                                onChangeText={t => setPassword(t)}
                            />
                        </View>
                    </View>

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