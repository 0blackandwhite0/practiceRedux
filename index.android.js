import { AppRegistry,StatusBar } from 'react-native';
import Root from "./app/root";

//StatusBar 设置header包含手机最上面显示信号，电量部分
StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor("transparent");

AppRegistry.registerComponent('pitaka', () => Root);