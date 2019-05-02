import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();


//not useing default class so that can export a consumer
export class Provider extends Component {
	state = {
		track_list: []
		heading: 'Top 10 Tracks'
	};

	componentDidMount() {
		axios.get(``)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Context.Provider>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer;
