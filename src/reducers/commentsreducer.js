const defaultState = {
    allComments: [],
    specificComments: []

}

export default (state = defaultState , action ) => {
    let newState = state
    console.log('state',state)
    switch (action.type){
        case "CREATE_NEW_COMM":
        return({allComments: [
            ...newState.allComments,
            {id: (newState.allComments.length + 1).toString(), comment: action.comment , onId: action.onId}
          ],specificComments:[]})
    
        case "GET_COMMID":
        console.log("got to comm case",newState.allComments)
        let filteredComments = newState.allComments.filter((comment) =>  comment.onId === action.onId);
        
                      // a little more complicated.. filters 
          if (filteredComments[0]) {
            return ({
                allComments: [...newState.allComments],
              specificComments: filteredComments //then sets state  <<-- still returns a state regardless
            });
          } else {
            return newState;}
        default:
        return newState;
    }

    

}