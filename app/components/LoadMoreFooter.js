import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class LoadMoreFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>
                    {this.props.isLoadAll ? (this.props.hasMore ? "" : 'Loaded completely') : 'Loading...'}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginBottom: 20,
    },
    footerTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: '#dddddd',
        alignSelf: 'center'
    }
})

export default LoadMoreFooter