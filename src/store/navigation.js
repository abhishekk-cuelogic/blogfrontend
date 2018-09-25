const initialState = {
    loggedIn: false,
    clicked: false
}

const reducer = (state = initialState,action) => {

    switch(action.type) {

        case "LOGGEDIN" :
                return {
                    ...state,
                    loggedIn : true
                }
         
        case "LOGGEDOUT" :
                return {
                    ...state,
                    loggedIn : false,
                    clicked : false
                }

        case "NAVCLICKED":

                return {
                    ...state,
                    clicked : true
                }
    }

    return state;

}

export default reducer;