import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import MyHeader from "../../components/MyHeader";

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        console.log("1", props)
    }
    componentDidMount() {
        console.log(this.props.navigation.state.params.id)
        let ids = this.props.navigation.state.params.id
        this.props.userActions.getMovieDetail(ids);
    }
    render() {
        let { userReducer, userActions, navigation } = this.props;
        console.log("电影详情", userReducer)
        return (
            userReducer.movieDetail ?
                <View style={{ flex: 1 }}>
                    <MyHeader title="电影详情" back={() => this.props.navigation.goBack()} />
                    <ScrollView style={{ flex: 1 }}>
                        <View style={[styles.movieContent, { flexDirection: 'row', }]}>
                            <Image style={styles.titleImg} source={{ uri: userReducer.movieDetail.data.MovieDetailModel.img }}></Image>
                            <View style={styles.movieTitle}>
                                <Text style={styles.textColor}>{userReducer.movieDetail.data.MovieDetailModel.nm}</Text>
                                <Text><Text>评分：</Text><Text style={{ color: 'blue' }}>{userReducer.movieDetail.data.MovieDetailModel.sc == 0 ? '暂无评分' : userReducer.movieDetail.data.MovieDetailModel.sc}</Text></Text>
                                <Text>{userReducer.movieDetail.data.MovieDetailModel.rt}</Text>
                                <Text>类型：{userReducer.movieDetail.data.MovieDetailModel.cat}</Text>
                            </View>
                        </View>
                        <View style={styles.movieContent}>
                            <Text>电影详情</Text>
                            <Text>{userReducer.movieDetail.data.MovieDetailModel.dra}</Text>
                        </View>
                        <View style={styles.movieContent}>
                            <Text style={styles.star}>演员列表：{userReducer.movieDetail.data.MovieDetailModel.star}</Text>
                        </View>
                    </ScrollView>
                </View> : null
        )
    }
}

const styles = StyleSheet.create({
    titleImg: {
        width: 80,
        height: 120
    },
    star: {
        color: 'green'
    },
    movieContent: {
        padding: 10,
        backgroundColor: '#ffffff',
        marginBottom: 10
    },
    movieTitle: {
        marginLeft: 20
    }
})

mapStateToProps = (state) => {
    const { userReducer } = state;
    return { userReducer }
};

mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators({ ...userActions }, dispatch),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);