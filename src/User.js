import React, { Component } from 'react';
import './User.css';

class User extends Component {
	render() {
	    const { user } = this.props;

		return (
			<div>
				
				<img className="image rounded-circle" src={user.avatar} alt="avatar" />
				
				<h3 className="name">{user.name}</h3>
				<p className="location">{user.location}</p>
			</div>
		)
	}

}

export default User;