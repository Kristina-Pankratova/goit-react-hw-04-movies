// import { Route } from 'react-router-dom';
// import './App.css';
// import HomeView from './views/HomeView';
// import MoviesPage from './components/MoviesPage';

// // 38ffd95028f6c80ed5a5389eea0285a5
// // 'https://api.themoviedb.org/3/movie/550?api_key=38ffd95028f6c80ed5a5389eea0285a5';

// const App = () => (
//   <>
//     <Route path="/" component={HomeView} />
//     <Route path="/movies" component={MoviesPage} />
//   </>
// );

// export default App;
import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NoExistView from './views/NoExistView';
import MovieAppBar from './components/MovieAppBar';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "movieDetails-page" */
  ),
);

const App = () => (
  <>
    <MovieAppBar />
    <Suspense fallback={<h1>Downloading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route exact path={routes.movies} component={MoviesPage} />

        <Route component={NoExistView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
