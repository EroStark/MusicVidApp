import React , {Component} from 'react';

class NewLink extends Component {
    constructor(){
        super();
        this.state= {
            newMeme: "",
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
        const {newMeme, newUrl} = this.state
        createNewLink(newMeme , newUrl)
        this.setState({
            newMeme: "",
            newUrl: ""
        })
    }

    render () {
        const {newUrl , newMeme} = this.state
        console.log('newUrl', newUrl , 'newMeme' , newMeme)
        return (
          <div>
            <div> <label>WAVE TITLE  <input name="newMeme" value={this.state.newMeme}
                            onInput={this.handleInputChange}/></label> </div>
            <div> <label>WAVE ID <sub>[end of link ex.bLr74OlNAmM]</sub> <input name="newUrl" value={this.state.newUrl}
                            onInput={this.handleInputChange}/> </label></div>
            <div> <button onClick={this.handleSubmit}> Submit </button> </div>
          </div> 
        );
      }
}

export default NewLink