const initialState = {
    recentPosts : []
}


const reducer = (state=initialState , action) =>{

    switch(action.type) {

        case "getPosts" : {
            return {
                ...state,
                recentPosts : action.payload
            }                 
        }

    }

    return state;
}

export default reducer;