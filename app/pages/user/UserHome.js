import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import MyHeader from "../../components/MyHeader";
import LoadMoreFooter from '../../components/LoadMoreFooter';

// class Blink extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { showText: true };

//         setInterval(() => {
//             this.setState(previousState => {
//                 return { showText: !previousState.showText }
//             })
//         }, 1000)
//     }
//     render() {
//         let display = this.state.showText ? this.props.text : 'now';
//         return (
//             <Text style={styles.gre}>{display}</Text>
//         )
//     }
// }

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
    }

    componentDidMount() {
        this.props.userActions.getMovies(0, true);
    }

    componentWillReceiveProps() {

    }

    //     _renderItem = ({item}) => (
    // <MyListItem
    //       id={item.id}
    //       onPressItem={this._onPressItem}
    //       selected={!!this.state.selected.get(item.id)}
    //       title={item.title}
    //     />
    //     )
    _onScroll(event) {
        const { userReducer, actions } = this.props;
        const { loading, hasMore, count } = userReducer;

        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;

        if (y + height >= contentHeight - 30 && !loading && hasMore) {
            this.props.userActions.getMovies(count);
        }
    }
    render() {
        let { userReducer, userActions, navigation } = this.props;
        console.log(userReducer.movie)
        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <MyHeader title="首页" />

                {/* <Blink /> */}
                <View style={{ flex: 1 }}>

                    <FlatList
                        data={userReducer.movie}
                        renderItem={this.movieItem.bind(this)}
                        onScroll={this._onScroll.bind(this)}
                    >
                        {/* <LoadMoreFooter
                            hasMore={userReducer.hasMore}
                            isLoadAll={!userReducer.loading}
                        /> */}
                    </FlatList>

                </View>
            </View>
        )
    }

    movieItem(data) {
        // console.log(item)
        return (
            <TouchableOpacity style={styles.container} onPress={() => {
                this.props.navigation.navigate('MovieDetail', { id: data.item.id });
            }}>
                <Image style={styles.movieImg} source={{ uri: data.item.img }}></Image>
                <View>
                    <Text style={styles.textColor}>{data.item.nm}</Text>
                    <Text><Text>评分：</Text><Text style={{ color: 'blue' }}>{data.item.sc == 0 ? '暂无评分' : data.item.sc}</Text></Text>
                    <Text>{data.item.rt}</Text>
                    <Text>类型：{data.item.cat}</Text>
                    {/* <Text style={styles.star}>演员：{data.item.star}</Text> */}
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    movieImg: {
        width: 60,
        height: 80,
        marginLeft: 10,
        marginRight: 10
    },
    textColor: {
        color: 'red'
    },
    star: {
        color: 'green'
    }
});

mapStateToProps = (state) => {
    const { userReducer } = state;
    return { userReducer }
};

mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators({ ...userActions }, dispatch),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserHome);