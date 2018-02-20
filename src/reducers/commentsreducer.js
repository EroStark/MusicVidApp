const defaultState = {
    allComments: [],
    specificComments: []

}

export default (state = defaultState , action ) => {
    let newState = state

    switch (action.type){
        case "CREATE_NEW_COMM":
        return({allComments: [
            ...newState.allComments,
            {id: (newState.allComments.length + 1).toString(), comment: action.comment , onId: action.onId}
          ],specificComments:[]})
    
        case "GET_COMMID":
        let filteredComments = newState.allComments.filter((comment) => comment.onId === action.onId);
        
                      // a little more complicated.. filters 
          if (filteredComments) {
            return ({
              specificComments: ilteredComments //then sets state  <<-- still returns a state regardless
            });
          } else {
            return newState;
        default:
        return newState;
    }

    

}