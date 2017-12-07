

import store from "react-native-simple-store"
import NavigatorService from "../navigatorService"
import { NavigationActions } from "react-navigation"

async function setHeader(opts) {
    return store.get('user').then((user) => {
        if (user && user.uuid && user.token) {
            opts.headers['uuid'] = user.uuid;
            opts.headers['token'] = user.token;
        }
        return opts;
    }).catch((error) => {
        return opts;
    })
}

async function request(url, method, body) {
    let isOk;
    let opts = {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        rejectUnauthorized: false
    };
    console.log(body);
    if (method.toUpperCase() === 'GET') {
        url = setParams(url, body)
    } else {
        opts.body = JSON.stringify(body);
    }
    opts = await setHeader(opts);
    return new Promise((resolve, reject) => {
        fetch(url, opts)
        .then((response) => {
            console.log(response);
            isOk = !!response.ok;
            if (isOk) {
                response.json().then((res) => {
                    resolve(res);
                    console.log(res);
                })
            } else {
                if (response.status === 401) {
                    const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName: "Login"})
                        ]
                    });
                    NavigatorService.getOuterNavigator().dispatch(resetAction);
                }
                response.json().then((res) => reject(res))
            }
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        })
        
        
    });
}

//GET请求添加参数到url内
let setParams = function (url, obj) {
    if (obj === undefined) return url;
    let str = [];
    for (let p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    if (url.indexOf("?") !== -1) {
        return url + "&" + str.join("&");
    } else {
        return url + "?" + str.join("&");
    }
};

export default http = {
    request: request
};