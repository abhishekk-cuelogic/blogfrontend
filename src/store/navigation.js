const initialState = {
    loggedIn: false
}

const reducer = (state = initialState,action) => {

    switch(action.type) {

        case "loggedIn" :
                return {
                    ...state,
                    loggedIn : true
                }
    }

    return state;

}

export default reducer;