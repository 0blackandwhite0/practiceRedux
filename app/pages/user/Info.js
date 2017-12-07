import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, TextInput } from "react-native";
import MyHeader from "../../components/MyHeader";
import Moment from 'moment';


let time = new Date('Thu Feb 15 2018 00:00:00 GMT+0800 (中国标准时间)').getTime();

class Info extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentDate: Moment( new Date() ).format("YYYY:MM:D HH:mm:ss"),
            deletenumbers: this._getLeftTime( time - new Date().getTime())
        
        }
    }

    _getLeftTime(leftTime) { 
        var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数 
        var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
        var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
        days = checkTime(days); 
        hours = checkTime(hours); 
        minutes = checkTime(minutes); 
        seconds = checkTime(seconds); 
        
        var str = `${days}天${hours}时${minutes}分${seconds}秒`;  
        
        return str;

        function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
            if(i<10) 
            { 
             i = "0" + i; 
            } 
            return i; 
           } 
       
    }

    componentDidMount() {
        
        this.timer = setInterval(() => {
            this.setState({
                currentDate: Moment( new Date() ).format("YYYY:MM:D HH:mm:ss"),
                deletenumbers : this._getLeftTime( time - new Date().getTime() )
            })
          }, 1000);
    }

    render() {
        const { navigation, userReducer } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <MyHeader title="--" />    
                <View>
                    <Text>当前时间：{ this.state.currentDate.toString() }</Text>
                    <Text>过年倒计时：{this.state.deletenumbers}</Text>
                </View>
            </View >
        )
    }
}

export default Info;

const styles = {
    
};