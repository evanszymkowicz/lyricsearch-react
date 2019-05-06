import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ''
	};

	findTrack = (e) => {
		e.preventDefault();

		axios
			.get(
				`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
					process.env.REACT_APP_MM_KEY
				}`
			)
			.then(res => {
				console.log(res.data));
			})
			.catch(err => console.log(err));
	}
  //refactored to include an arrow function
  //initial run returned an error
  onChange = e => {
    //changed this too
    //Now it will return results even if it doesn't match exactly
    //this.setState({ trackTitle: e.target.value});
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search:
              </h1>
              <p className="lead text-center">
                Find the lyrics to your favorite songs
              </p>
              <form onSubmit={this.findTrack}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Title"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
									className="btn btn-primary btn-lg btn-block mb-5"
									type="submit"
									>
									Get Lyrics
								/>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
