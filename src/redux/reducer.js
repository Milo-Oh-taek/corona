

const initialState = {
    country: 'kr'
}

const countryReducer = (state = initialState, action) => {
    switch(action.type){
        case "change":
            return {
                ...state,
                country: action.payload
            }
        default: return state; 
    }
}

export default countryReducer