import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type){
		case: 'SEARCH_TRACKS':
			return {
				//spread operator to skip over
				...state,
				track_list: action.payload,
				heading: 'Search Results'
			};
			default:
				return state;
	}
}

//not useing default class so that can export a consumer
export class Provider extends Component {
	state = {
		track_list: [],
		heading: 'Top 10 Tracks',
		dispatch: action => this.setState(state => reducer(state, action))
	};

	componentDidMount() {
		axios
			.get( //Bypassing CORS trick. TBD
				`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart/tracks.get?page-1&page_size-10&country=us&f_has_lyrics=1&apikey-${
					process.env.REACT_APP_MM_KEY
				}`
			)
			.then(res => {
				console.log(res.data));
				//this will put the track list in state
				this.setState({track_list: res.data.message.body.track_list});
			})
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
