
import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { Platform, Image } from "react-native";
import UserHome from "./pages/user/UserHome";
import Info from "./pages/user/Info";
import UserInfo from "./pages/user/UserInfo";
import MovieDetail from './pages/user/movieDetail';
import NavigatorService from "./navigatorService";
import TabIcon from './components/TabIcon'


const TabsNav = TabNavigator(
    {
        Home: {
            screen: UserHome,
            navigationOptions: {
                title: '首页',
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabIcon focused={focused}
                        active={require('./images/user/home_selected.png')}
                        inActive={require('./images/user/home.png')}
                    />
                )
            }
        },
        Info: {
            screen: Info,
            navigationOptions: {
                title: '--',
                tabBarLabel: '--',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabIcon focused={focused}
                        active={require('./images/user/menu_selected.png')}
                        inActive={require('./images/user/menu.png')}
                    />
                )
            }
        },
        Mine: {
            screen: UserInfo,
            navigationOptions: {
                title: '我的',
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabIcon focused={focused}
                        active={require('./images/user/my_selected.png')}
                        inActive={require('./images/user/my.png')}
                    />
                )
            }
        }
    },
    {
        tabBarComponent: TabBarBottom,            // 内置组件样式
        tabBarPosition: 'bottom',                 // 显示在底端，android 默认是显示在页面顶端的
        animationEnabled: true,                   // 切换页面时是否有动画效果
        swipeEnabled: false,                      // 是否可以左右滑动切换tab
        lazy: true,                               // 延迟加载其他tab页
        tabBarOptions: {                          // TabBarBottom 组件配置
            showIcon: true,                       // android 默认不显示 icon, 需要设置为 true 才会显示
            showLabel: true,
            inactiveBackgroundColor: '#ffffff',
            activeBackgroundColor: '#ffffff',
            inactiveTintColor: '#d3d3d3',
            activeTintColor: '#333333',
            labelStyle: {
                fontSize: 11
            },
            style: {
                height: 50,
                borderTopColor: 'transparent',
                backgroundColor: '#fff'
            }
        },
    }
);

const userTabs = StackNavigator(
    {
        Root: {
            screen: TabsNav
        },
        MovieDetail: {
            screen: MovieDetail
        }  
    },
    {
        initialRouteName: 'Root',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        headerMode: 'none'
    });

export default userTabs;
