import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Song from './tracks/Song';

class Tracks extends Component {
	render() {
		return (
				//result of whatever is passed from Contex.Provider
				//conditional: spinner graphic for empty array, then loaded data
				// going to attempt to destructure so as to not have to use . values for everything
			<Consumer>
			{value => {
				const { track_list, heading } = value;
				//English: if the list is undefined or has no entries, show spinner
				if(track_list === undefined || track_list.length === 0) {
					return <Spinner />
				} else {
					return (
						<React.Fragment>
							<h3 className="text-center mb-4">{heading}</h3>
						<div className="row">
						//doing it this way so I can use two six column divs
							{track_list.map(item => (
								<Track key={item.song.track_id} track={item.track} />
							))}
						</div>
						</React.Fragment>
					);
				}
			}}
		</Consumer>

export default Tracks;
