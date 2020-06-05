import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import MovieList from './MovieList';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';
import TvShowInfo from './TvShowInfo';
import TvShowList from './TvShowList';

class App extends Component {
  constructor()
  {
    super()
    this.state = {
      movies: [],
      tvShows: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
      currentTvShow: null
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }
  
  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], currentPage: pageNumber })
    }) 
  }

  viewMovieInfo = (id) => {
    const filteredMovie=this.state.movies.filter(movie => movie.id === id )
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    this.setState({ currentMovie: newCurrentMovie })
  }

  closeMovieInfo =() => {
    this.setState({ currentMovie: null})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ tvShows: [...data.results], totalResults: data.total_results})
    })
    .catch(console.log)
  }

handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ tvShows: [...data.results], currentPage: pageNumber })
    }) 
  }
  
  viewTvShowInfo = (id) => {
    const filteredTvShow=this.state.tvShows.filter(tvShow => tvShow.id === id )
    const newCurrentTvShow = filteredTvShow.length > 0 ? filteredTvShow[0] : null
    this.setState({ currentTvShow: newCurrentTvShow })
  }

  closeTvShowInfo =() => {
    this.setState({ currentTvShow: null})
  }

  render() {
    let numberPages = Math.floor(this.state.totalResults / 20);
    return (
        <div className="App">
          <Nav />
          {this.state.currentTvShow == null ? <div><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><TvShowList viewTvShowInfo={this.viewTvShowInfo} tvShows={this.state.tvShows}/></div> : <TvShowInfo closeTvShowInfo={this.closeTvShowInfo} currentTvShow={this.state.currentTvShow} />}
          {this.state.totalResults > 20 && this.state.currentTvShow == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
          {this.state.currentMovie == null ? <div><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />}
          {this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''} 
        </div>
    );
  }
}

export default App;
