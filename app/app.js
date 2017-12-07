import Splash from "./pages/Splash";
import { Platform } from "react-native";
import UserTabs from "./userTabs";
import MovieDetail from './pages/user/movieDetail';


import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation"
import React, { Component } from 'react';
import NavigatorService from "./navigatorService";

function separateRoot(WrappedComponent) {
    const EnhencedComponent = class extends Component {
        render() {
            console.log(this.props.navigation);
            return <WrappedComponent ref={navigatorRef => {
                NavigatorService.setNavigator(navigatorRef);
            }} screenProps={{ outerNavigation: this.props.navigation }} />
        }
    };
    EnhencedComponent.navigationOptions = WrappedComponent.navigationOptions;
    return EnhencedComponent
}

const AppNavigator = StackNavigator(
    {
        Splash: {
            screen: Splash
        },
        MovieDetail: {
            screen: MovieDetail
        },
        UserTabs: {
            screen: separateRoot(UserTabs)
        },
    },
    {
        //设为Splash启用启动屏
        initialRouteName: 'Splash',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        headerMode: 'none'
    });

export default class App extends Component {
    render() {
        return (
            <AppNavigator ref={navigatorRef => {
                NavigatorService.setOuterNavigator(navigatorRef);
            }} />
        )
    }
}