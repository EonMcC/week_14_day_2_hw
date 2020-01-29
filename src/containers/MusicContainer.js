import React, { Component } from "react"
import Top20List from '../components/Top20List'

class MusicContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs.feed.entry}))
      .catch(error => console.error());
  }

  render() {
    return (
      <div>
        <h2>Top 20 Right Now</h2>
        <Top20List songs={this.state.songs}/>
      </div>
    );
  }
}

export default MusicContainer;
