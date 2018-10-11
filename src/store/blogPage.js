const initialState = {
    Post : {}
}

const reducer = (state = initialState , action) => {

    switch(action.type) {

        case "CLEAR" :
            return {
                ...state,
                Post : {}
            }

        case "GET_POST": 
            return {
                ...state,
                Post : action.payload
            }
        
        case "LIKED" :
            return {
                ...state,
                Post : action.payload
            }

        case "SAVE_COMMENT" : 
            return {
                ...state,
                Post : action.payload
            }
        
            case "DELETE_COMMENT" : 
            return {
                ...state,
                Post : action.payload
            }
    }


    return state;
}

export default reducer;