import { Route } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';

const App = () => (
  <>
    <Route path="/" component={HomeView} />
  </>
);

export default App;
