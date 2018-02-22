import React , {Component} from 'react';

class NewLink extends Component {
    constructor(){
        super();
        this.state= {
            newVid: "",
            newUrl: ""
        }
    }

    handleInputChange = e =>{
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const {createNewLink} = this.props
        const {newVid, newUrl} = this.state
        createNewLink(newVid , newUrl)
        this.setState({
            newMeme: "",
            newUrl: ""
        })
    }

    render () {
        const {newUrl , newVid} = this.state
        console.log('newUrl', newUrl , 'newVid' , newVid)
        return (
          <div>
            <div> <label>WAVE TITLE  <input name="newVid" value={this.state.newVid}
                            onInput={this.handleInputChange}/></label> </div>
            <div> <label>WAVE ID <sub>[end of link ex.bLr74OlNAmM]</sub> <input name="newUrl" value={this.state.newUrl}
                            onInput={this.handleInputChange}/> </label></div>
            <div> <button onClick={this.handleSubmit}> Submit </button> </div>
          </div> 
        );
      }
}

export default NewLink