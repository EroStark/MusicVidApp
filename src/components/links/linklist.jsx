import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SingleLink from './singlelink';

class LinkList extends Component {
  componentDidMount() {
    this.props.getAllLinks();
  }

  render() {
    const { state } = this.props;

    const allList = state.allVids.map((item) => {
      return (
        <Link to={`/links/${item.id}`} style={{ textDecoration: 'none' }}>
          <li id={item.id}>
            {item.title}
          </li>
        </Link>
      )
    });

    return (
      <div className="linkList">
        <ul>
          {allList}
        </ul>
        <Link to={`/links/new`}> <button> ADD A NEW WAVE! </button> </Link>
      </div>
    )
  }
}

export default LinkList;
