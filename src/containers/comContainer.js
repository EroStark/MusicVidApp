import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../components/comments/comments'

class commcontainer extends Component {

    getCommentOnId = (onId) => {
        const { dispatch } = this.props;
        dispatch({type: "GET_COMMID", comment: comment , onId: onId})
      }

    createNewComment = (comment, onId) => {
        const { dispatch } = this.props;
        dispatch({type: "CREATE_NEW_COMM", comment: comment , onId: onId})
    }
      
      
    render() {
        const { comments } = this.props;
    
        return (
          <Comments
            commentState={comments}
            getCommentsOnId={this.getCommentsOnId}
            createNewComment = {this.createNewComment}
          />
        );
    }
}

export default connect(state => state)(commContainer);