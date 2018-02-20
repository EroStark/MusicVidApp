import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LinkList from './linklist';
import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LinkList from './linklist';
import SingleLink from './singlelink';
import NewLink from './newLink';

const Comments = ({ commentState, createNewComment }) => {
  
  const renderLinkList = () => {
    return (
      <LinkList state={state} getAllLinks={getAllLinks} />
    )
  }

  const renderSingleLink = (props) => {
    const { id } = props.match.params;
    return (
      <SingleLink state={state} getSingleLink={getSingleLink} id={id} createNewComment={createNewComment} />
    )
  }

  const renderNewLink = (props) => {
    return (
      <NewLink createNewLink={createNewLink} />
    )
  }

  return (
    <div>
      <Switch>
        <Route exact path='/links' render={renderLinkList} />
        <Route exact path='/links/new' render={renderNewLink} />
        <Route path='/links/:id' render={renderSingleLink} />
      </Switch>
    </div>
  )
}

export default Comments;