const defaultState = {
  allVids: [
    {id: "1", title: 'Swag fleeStyle', url: `https://youtube.com/embed/bLr74OlNAmM`} ,
    {id: "2", title: 'After The Storm', url: `https://youtube.com/embed/9f5zD7ZSNpQ`},
    {id: "3", title: 'Get Bucks', url: `https://youtube.com/embed/bzzw9XVzfjk`},
    {id: "4", title: 'Please Dont Let Me Be Misunderstood', url: `https://youtube.com/embed/HHjKzr6tLz0`},
    {id: "5", title: '500 Benz', url: `https://youtube.com/embed/FK4CaraYWc4`}
  ],
  oneVid: []
};  //^^ default state

export default (state = defaultState, action) => { //<-- we have to return state somehow.. do it by passing
  let newState = state;

  switch (action.type) {

    case "GET_ALL":
      return newState; //returns a state
    case "GET_ONE":
      let theOne = newState.allVids.filter((vid) => vid.id === action.id);
    
                  // a little more complicated.. filters 
      if (theOne[0]) {
        return ({
          allVids: newState.allVids,
          oneVid: theOne[0] //then sets state  <<-- still returns a state regardless
        });
      } else {
        return newState;
      }
    case "CREATE_NEW":
      return({allMemes: [
        ...newState.allVids,
        {id: (newState.allVids.length + 1).toString(), title: action.title , url: action.url}
      ],oneMeme:[]})

    default:
      return newState;
  }

};
