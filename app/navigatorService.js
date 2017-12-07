
import { NavigationActions } from 'react-navigation';

const config = {};

function setNavigator(nav) {
    if (nav) {
        config.navigator = nav;
    }
}

function setOuterNavigator(nav) {
    if (nav) {
        config.outerNavigator = nav;
    }
}

function navigate(routeName, params) {
    if (config.navigator && routeName) {
        let action = NavigationActions.navigate({routeName, params});
        config.navigator.dispatch(action);
    }
}


function dispatch(action) {
    config.navigator.dispatch(action);
}

function goBack() {
    if (config.navigator) {
        let action = NavigationActions.back({});
        config.navigator.dispatch(action);
    }
}

function getNavigator() {
    return config.navigator;
}

function getOuterNavigator() {
    return config.outerNavigator;
}

const NavigatorService = {
    setNavigator,
    setOuterNavigator,
    getNavigator,
    getOuterNavigator,
    navigate,
    dispatch,
    goBack,
};
export default NavigatorService