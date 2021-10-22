export const changeCountry = (country) => {
    return (dispatch) => {
        dispatch({
            type: "change",
            payload: country
        })
    }
}