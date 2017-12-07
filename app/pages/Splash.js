import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View
} from 'react-native';
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
let { height, width } = Dimensions.get('window');
import * as userActions from "../actions/userActions";
import store from "react-native-simple-store";
import { bindActionCreators } from "redux";

class Splash extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(state) {
        let { userReducer } = state;
    }

    navigateTo(routeName) {
        const {navigation} = this.props;
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: routeName}),
            ]
        });
        navigation.dispatch(resetAction);
    }

    componentWillMount() {
        const { userActions, navigation } = this.props;
        //提前获取数据
        userActions.getMovies(0, true);
        // 启动屏停3秒后进入首页
        setTimeout(() => {
            this.navigateTo("UserTabs")
        }, 3000);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={{ flex: 1, width: width, height: height }}
                    source={require('../images/shao.jpg')}
                />
            </View>
        );
    }
}

mapStateToProps = (state) => {
    const { userReducer } = state;
    return { userReducer }
};

mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators({ ...userActions }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);