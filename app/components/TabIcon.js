import { Image } from "react-native";
import React, { Component } from 'react';

const TabIcon = (props) => {
    return <Image
        style={{height: 25, width: 25}} resizeMode={'contain'}
        source={props.focused ? props.active : props.inActive}
    />
};

export default TabIcon;