import React, { Component  } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDytR0Dz4b-fX6MsfHIpC_v7PQeqaJh2m0';

// Create a new component.  This component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('rock climbing');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {

      // setting selectedVideo to 1st video so it comes up
      // when we first load the app
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  };
}

// Take this component's generated HTML and put it in the DOM
RaeactDOM.render(<App />, document.querySelector('.container'));
