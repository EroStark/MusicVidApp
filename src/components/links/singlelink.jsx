import React, { Component } from 'react';

class SingleLink extends Component {
  constructor(){
        super();
        this.state= {
            newComment: ""
        }
    }
  
  componentDidMount () {
    this.props.getSingleLink(this.props.id);
  }

  handleInputChange = e =>{
        this.setState({
           [e.target.name]: e.target.value
        })
 }

 handleSubmit = () => {
        const {createNewComment , id} = this.props
        const {newComment} = this.state
        createNewComment(newComment , id)
        this.setState({
            newComment: ""
        })
  }

  render () {
    const { state } = this.props;
    const {newComment} = this.state

    console.log(newComment)
    return (
      <div class="oneVid">
        <h3>{state.oneMeme.title}</h3>
        
        <iframe width="460" height="346"
          src={state.oneMeme.url} >
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

      </div>
    );
  }
}

export default SingleLink;
