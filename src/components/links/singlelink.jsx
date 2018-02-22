import React, { Component } from 'react';

class SingleLink extends Component {
  constructor(){
        super();
        this.state= {
            newComment: ""
        }
    }
  
  componentDidMount () {
    console.log('first thing', this.props.id)
    this.props.getSingleLink(this.props.id);
    this.props.getCommentsOnId(this.props.id);
  }

  handleInputChange = e =>{
        this.setState({
           [e.target.name]: e.target.value
        })
 }

 handleSubmit = () => {
        const {createNewComment , id} = this.props
        const {newComment} = this.state

        console.log('onId', )
        createNewComment(newComment , id)
        this.props.getCommentsOnId(this.props.id)
        this.setState({
            newComment: ""
        })
  }

  render () {
    const { state,commentState } = this.props;
    const {newComment} = this.state

    const allList = commentState.specificComments.map((comment) => {
      console.log('got here',comment)
      return (
          <li id={comment.id}>
            {comment.comment}
          </li>      
      )
    });

    console.log('commentState' , commentState)

    
    return (
      <div class="oneVid">
        <h3>{state.oneVid.comment}</h3>
        
        <iframe width="460" height="346"
          src={state.oneVid.url} >
        </iframe>
        <br/>
        <div>
        <img src="https://cdn3.iconfinder.com/data/icons/water-sports-and-recreation-tours/512/Water_sports_and_recreation_tours_Surfing-512.png" alt="Wave" height="22" width="22"/> {" "}
        <img src="https://cdn3.iconfinder.com/data/icons/beach-icons/456/Surfer-512.png" alt="Lame" height="22" width="22"/>
        </div>
        <br/>
        <div>
          <input placeholder="Add A Comment ..."  size="69" name="newComment"
          value={this.state.newUrl} onInput={this.handleInputChange} />
          <button onClick={this.handleSubmit}> Submit </button> 
        </div>

        <div>
          <ul>
            {allList}
          </ul>
        </div>

      </div>
    );
  }
}

export default SingleLink;
