import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount();
  // update: componentWillReceiveProps() -> shouldComponentUpdate() ==true -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {}

  componentWillMount(){
    console.log('will mount');
  } 


  componentDidMount(){
    console.log('did mount');
    this._getMovies();
    
  }
  
  
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

   _getMovies = async () => {
    const movies = await this._callApi();
    // asnyc 랑 await 같이써야함
    //await 는 함수가 끝나길 기다림. _callAPI가 완료된후 setState 실행. 
    this.setState({
      movies
    })
  }

  _callApi = () => {

    //모던 자바스크립트
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }


  render(){
    console.log('render');
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
