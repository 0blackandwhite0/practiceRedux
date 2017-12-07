import React, { Component } from 'react';
import { Header } from "react-native-elements";
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class MyHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            title,
            back,
            rightComponent,
            outerContainerStyles,
            innerContainerStyles
        } = this.props;
        let leftComponent = back ? (
            <TouchableOpacity style={{ paddingHorizontal: 5, paddingVertical: 10 }} onPress={back}>
                <Image source={require('../images/user/icon_return.png')} />
            </TouchableOpacity>
        ) : null;
        return (
            <Image source={require('../images/user/jian.jpg')} style={{height:65,width:'100%'}}>
                <Header
                    leftComponent={
                        leftComponent
                    }
                    outerContainerStyles={[styles.outerContainer, outerContainerStyles]}
                    innerContainerStyles={[styles.innerContainer, innerContainerStyles]}
                    centerComponent={{text: title, style: styles.title}}
                    rightComponent={rightComponent || null}
                />
            </Image>   
        )
    }
}


const styles = StyleSheet.create({
    innerContainer: {
        alignItems: 'center',
    },
    outerContainer: {
        position: "relative",
        backgroundColor: 'transparent',
        height: 65,
        padding: 0,
        paddingTop: 20,
        paddingHorizontal: 15,
        width: "100%"
    },
    title: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center'
    }
});
