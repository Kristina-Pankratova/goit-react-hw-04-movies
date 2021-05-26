// import React from 'react';

// const HomeView = () => {
//   return <h1>It's Homepage</h1>;
// };

// export default HomeView;
import React, { Component } from 'react';
import Axios from 'axios';
import MoviesList from '../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=38ffd95028f6c80ed5a5389eea0285a5',
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending Today</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default HomePage;
