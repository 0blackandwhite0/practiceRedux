import * as apis from "../constants/apis"
import http from "../utils/http";
import Toast from "react-native-toast";
import store from "react-native-simple-store";
import NavigatorService from "../navigatorService";
import { NavigationActions } from "react-navigation";

export let increaseAction = () => {
    return{
        type: 'INCREASE'
    }
}
export let deleteAction = () => {
    return {
        type: 'DELETE'
    }
}

//获取电影
export const getMovies = (count, refresh) => {
    return (dispatch) => {
        dispatch(getTaskRequest(refresh));
        let body = {
            type: 'hot',
            offset: count,
            limit: 10
          }
        return http.request(apis.getMovie, 'get', body)
            .then((res) => {
                console.log("sas", res)
                dispatch(getMoviesSuccess(res.data.movies,refresh));
            })
            .catch((error) => {
                Toast.showShortBottom(error.error || '网络异常,请重试');
                dispatch(getMoviesFailure(error));
            })
    }
};
export let getTaskRequest = (refresh) => {
    return {
        type: 'GET_MOVIE_REQUEST',
        refresh: refresh
    }
};
export let getMoviesSuccess = (json,refresh) => {
    return {
        type: 'GET_MOVIE_SUCCESS',
        refresh: refresh,
        getMovie: json
    }
};
export let getMoviesFailure = (error) => {
    return {
        type: 'GET_MOVIE_FAILURE',
        error: error
    }
};

export const getMovieDetail = (id) => {
    return (dispatch) => {
        return http.request(apis.getMovieDetail+ id + ".json", 'get')
            .then((res) => {
                console.log("getMovieDetailSuccess", res)
                dispatch(getMovieDetailSuccess(res));
            })
            .catch((error) => {
                Toast.showShortBottom(error.error || '网络异常,请重试');
            })
    }
};
export let getMovieDetailSuccess = (json) => {
    return {
        type: 'GET_MOVIE_DETAIL_SUCCESS',
        getMovieDetail: json
    }
};