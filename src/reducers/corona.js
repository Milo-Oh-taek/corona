const initialState = {
    showData: undefined,
    isLoading: false,
    country: 'kr',
}

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
export const FETCH_REQUEST_FAIL = 'FETCH_REQUEST_FAIL';



const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
                isLoading: true,
            }
        case 'FETCH_REQUEST_SUCCESS':
            console.log("reducer case");
            return {
                ...state,
                showData: action.data.showData,
                isLoading: false,
                country: action.data.country,
            }
        case 'FETCH_REQUEST_FAIL':
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default reducer;