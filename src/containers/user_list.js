import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div className="card card-block" key={user.name}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a href={user.website} className="btn btn-primary">Website</a>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        { this.props.users.map(this.renderUser) }
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps, actions)(UserList);

// this
// { this.props.users.map(this.renderUser) }
// is the same as
// { this.props.users.map(user => this.renderUser(user)) }