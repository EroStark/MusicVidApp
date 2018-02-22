import React, { Component } from 'react';
import { connect } from 'react-redux';
import Links from '../components/links/links'

class LinksContainer extends React.Component {
  getAllLinks = () => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ALL" });
  };

  getSingleLink = (id) => {
    const { dispatch } = this.props;   //whenever we dispatch something we come here 
    dispatch({ type: "GET_ONE", id: id }); //give an object with a type.. 
  }                                 // what does the reducer return? (head to reducers)

  createNewLink = (title,url) => {
    const link = `https://youtube.com/embed/${url}`
    const { dispatch } = this.props;
    dispatch({type: "CREATE_NEW", title: title , url: link})
  }

  getCommentsOnId = (onId) => {
    const { dispatch } = this.props;
    dispatch({type: "GET_COMMID", onId: onId})
  }

  createNewComment = (comment, onId) => {
    const { dispatch } = this.props;
    dispatch({type: "CREATE_NEW_COMM", comment: comment , onId: onId})
  }

  render() {
    const { links , comments } = this.props;

    return (
      <Links
        state={links}
        getAllLinks={this.getAllLinks}
        getSingleLink={this.getSingleLink}
        createNewLink = {this.createNewLink}
        commentState ={comments}
        getCommentsOnId = {this.getCommentsOnId}
        createNewComment = {this.createNewComment}
      />
    );
  }
}

export default connect(state => state)(LinksContainer);

//connect to connect to store ... store defined in index
