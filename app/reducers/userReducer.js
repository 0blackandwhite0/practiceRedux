const initialState = {
    isLoading: false,
    hideSplash: false,
    increase: 0,
    deletenumber: 86,
    count: 0,
    hasMore: true,
    loading: false,
    movie: [],
    movieDetail: null
};

let userReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'INCREASE':
            let increase = state.increase;
            return {
                ...state,
                increase: increase + 1
            }
        case 'DELETE':
            let deletenumber = state.deletenumber;
            return {
                ...state,
                deletenumber: deletenumber - 1
            }
        case 'GET_MOVIE_REQUEST':
            if (action.refresh) {
                return {
                    ...state,
                    count: 0,
                    loading: true,
                    hasMore: true,
                    movie: [],
                };
            } else {
                return {
                    ...state,
                    hasMore: true,
                    loading: true
                }
            }
        case 'GET_MOVIE_SUCCESS':
            let moviesData;
            console.log("movie".action)
            if (action.refresh) {
                moviesData = action.getMovie;
            } else {
                moviesData = [...state.movie, ...action.getMovie];
            }
            return {
                ...state,
                count: state.count + 10,
                loading: false,
                hasMore: action.getMovie.length === 10,
                movie: moviesData,
            };
        case 'GET_MOVIE_FAILURE':
            return {
                ...state,
                loading: false
            };
        case 'GET_MOVIE_DETAIL_SUCCESS':
            console.log("movieDetail".action)
            return {
                ...state,
                movieDetail: action.getMovieDetail
            };

        default:
            return state
    }
};

export default userReducer;