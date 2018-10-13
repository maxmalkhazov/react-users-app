import React, { Component } from 'react';
import './App.css';

import User from './User';

class App extends Component {

  state = {
    user: {},
    display: false
  }

  users = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

  getUser = (e) => {
    const name = e.currentTarget.textContent;
    fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        user: {
          avatar: data.avatar_url,
          name: data.name,
          location: data.location
        },
        display: true
      });
    });
  };

  render() {

    const { user } = this.state;

    let displayShow = null;
    if (this.state.display) {
      displayShow = <User user={user} />
    }

    return (
      <div className="App">
      <h2 className="mt-3">Top 5 GitHub Users</h2>
        {this.users.map(user => <p onClick={this.getUser} className="btn btn-primary m-3">{ user }</p>)}
        {displayShow}
      </div>
    );
  }
}

export default App;
