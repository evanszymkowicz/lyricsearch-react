import React, { Component } from 'react';
import { Consumer } from '../../context';

class Tracks extends Component {
	render() {
		return (
			<Consumer>
			{value => { //result of whatever is passed from Contex.Provider

			}}
			</Consumer>
		);
	}
}

export default Tracks;
