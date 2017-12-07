import { AppRegistry,StatusBar } from 'react-native';
import Root from "./app/root";

StatusBar.setBarStyle("light-content");
AppRegistry.registerComponent('pitaka', () => Root);