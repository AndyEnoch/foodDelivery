import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, SafeAreaView, FlatList } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import COLORS from '../assets/colors/colors';
import HeaderAnnex from '../components/Shared/HeaderAnnex'
import ConfirmScreen from './orders/ConfirmScreen';
import SummaryScreen from './orders/SummaryScreen';
import BoldText, { RegularText } from '../components/Shared/StyledText';



function CustomTabView(props) {
    const [state, setState] = useState({
        index: 0,
        routes: [
            { key: 'first', title: 'Confirm' },
            { key: 'second', title: 'Summary' },

        ],
    });

    // useEffect(() => {
    //   props.onChangeIndex(state);
    // }, [state]);

    const _handleIndexChange = index =>
        setState(prevState => ({ ...prevState, index: index }));

    const _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <TabBar
                {...props}
                style={{ backgroundColor: 'white' }}
                activeColor={COLORS.green}
                inactiveColor="grey"
                renderLabel={({ route, focused, color }) => (
                    <View>
                        <RegularText style={{ fontSize: 15, color: focused ? COLORS.green : 'grey' }}>
                            {route.title}
                        </RegularText>
                    </View>
                )}
                labelStyle={{ fontSize: 12, fontWeight: 'bold' }}
                indicatorStyle={{

                    padding: 1.5,
                    marginLeft: 0,
                    backgroundColor: COLORS.green,
                }}
            />
        );
    };

    const _renderScene = SceneMap({
        first: ConfirmScreen,
        second: SummaryScreen,

    });



    return (
        <TabView
            style={{ backgroundColor: 'white' }}
            navigationState={state}
            renderScene={_renderScene}
            renderTabBar={_renderTabBar}
            onIndexChange={_handleIndexChange}
        />
    );
}



export default function OrderScreen({ navigation, route }) {


    const [state, setState] = useState(0);

    function handleChangeIndex(state) {
        setState(state.index);
    }

    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <HeaderAnnex titleAlign="center" title="Order and Summary" subtitle="View your Orders and Receipts" />
            <CustomTabView onChangeIndex={handleChangeIndex} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

})
