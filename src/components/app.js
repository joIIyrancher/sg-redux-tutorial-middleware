import React from 'react';
import { Component } from 'react';
import UserList from '../containers/user_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}
