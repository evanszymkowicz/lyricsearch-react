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
		axios.get(`http://api.musixmatch.com/ws/1.1/chart/tracks.get?page-1&page_size-10&country=us&f_has_lyrics=1&apikey-${process.env.REACT_APP_MM_KEY}`)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
			//this should run as soon as the provider serves
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
