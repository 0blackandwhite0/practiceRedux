import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Text, TextInput, View, TouchableOpacity, Alert, Image } from "react-native";
import * as userActions from "../../actions/userActions";
import MyHeader from "../../components/MyHeader";

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    

    render() {
        const { navigation, actions, userReducer } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <MyHeader title="我的" />
                <View>
                    <Text>{userReducer.increase}</Text>
                    <TouchableOpacity onPress={() => actions.increaseAction()}><Text>Increase</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

mapStateToProps = (state) => {
    const { userReducer } = state;
    return { userReducer }
};

mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...userActions }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

const styles = {
   
}