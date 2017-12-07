import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Modal,
    Platform
} from 'react-native';

export default class Loading extends Component {
    render() {
        let show = this.props.show;
        let text = this.props.text || "waiting...";
        if (!show) {
            return (<View />)
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <ActivityIndicator size={Platform.OS === 'ios' ? 'small' : 40} color="black"/>
                        <Text style={styles.loadingTitle}>{text}</Text>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    loading: {
        backgroundColor: '#fff',
        height: 120,
        width: 150,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingTitle: {
        marginTop: 15,
        fontSize: 14,
        color: '#333'
    }
});