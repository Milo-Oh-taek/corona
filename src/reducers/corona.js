const initialState = {
    showData: undefined,
    isLoading: false,
}

export const fetchRequestAction = () => {
    return {
        type: 'FETCH_REQUEST',
        isLoading: true,
    }
}

export const fetchRequestSuccess = showData => {
    return {
        type: 'FETCH_REQUEST_SUCCESS',
        showData,
        isLoading: false,
    }
}

export const fetchRequestFail = () => {
    return {
        type: 'FETCH_REQUEST_FAIL',
        isLoading: false,
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
            }
        case 'FETCH_REQUEST_SUCCESS':
            return {
                ...state,
                showData: action.showData
            }
        case 'FETCH_REQUEST_FAIL':
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default reducer;