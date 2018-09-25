const initialState = {
    recentPosts : {},
    popularPosts : []
}


const reducer = (state=initialState , action) =>{

    switch(action.type) {

        case "getPosts" : {
            console.log('getPost reducer called');
            console.log('reducer===>',action.payload);  
          
               
        }
    }

    return state;
}

export default reducer;